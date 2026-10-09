const assert = require('node:assert/strict');
const { test } = require('node:test');
const fs = require('node:fs');
const path = require('node:path');
const ts = require('typescript');
const { NextRequest } = require('next/server');

// Execute the actual route with mocked transport; never send a real email.
const source = fs.readFileSync(path.join(__dirname, '../src/app/api/contact/route.ts'), 'utf8');
const compiled = ts.transpileModule(source, {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 },
}).outputText;
const route = { exports: {} };
const catalog = { exports: {} };
const catalogCompiled = ts.transpileModule(fs.readFileSync(path.join(__dirname, '../src/lib/invitations.ts'), 'utf8'), {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 },
}).outputText;
new Function('module', 'exports', catalogCompiled)(catalog, catalog.exports);
const input = { exports: {} };
const inputCompiled = ts.transpileModule(fs.readFileSync(path.join(__dirname, '../src/lib/contact-input.ts'), 'utf8'), {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 },
}).outputText;
new Function('module', 'exports', inputCompiled)(input, input.exports);
const routeRequire = (name) => name === '@/lib/invitations' ? catalog.exports : name === '@/lib/contact-input' ? input.exports : require(name);
new Function('require', 'module', 'exports', compiled)(routeRequire, route, route.exports);
const { POST } = route.exports;
const valid = { name: 'Visitante', email: 'visitor@example.org', message: 'Pedido de avaliação', service: 'Pentest Web & API' };
const request = (body = valid) => new NextRequest('http://localhost/api/contact', {
  method: 'POST', headers: { 'Content-Type': 'application/json', Origin: 'http://localhost' }, body: JSON.stringify(body),
});

test('contact route uses Brevo safely and reports delivery acceptance accurately', async (t) => {
  const originalFetch = global.fetch;
  const saved = { BREVO_API_KEY: process.env.BREVO_API_KEY, BREVO_SENDER_EMAIL: process.env.BREVO_SENDER_EMAIL };
  try {
    process.env.BREVO_API_KEY = 'test-only-key';
    process.env.BREVO_SENDER_EMAIL = 'verified@example.org';
    await t.test('rejects invalid input without contacting the provider', async () => {
      global.fetch = async () => { throw new Error('Transport must not be called'); };
      for (const body of [null, [], { ...valid, email: 'invalid' }, { ...valid, name: 'A\nB' }, { ...valid, message: ' ' }]) {
        assert.equal((await POST(request(body))).status, 400);
      }
    });
    await t.test('blocks foreign origins, unsupported formats, oversized bodies and honeypots', async () => {
      global.fetch = async () => { throw new Error('Transport must not be called'); };
      const samples = [
        [{ 'Content-Type': 'application/json', Origin: 'https://foreign.example' }, JSON.stringify(valid), 403],
        [{ 'Content-Type': 'application/json' }, JSON.stringify(valid), 403],
        [{ 'Content-Type': 'text/plain', Origin: 'http://localhost' }, JSON.stringify(valid), 415],
        [{ 'Content-Type': 'application/json', Origin: 'http://localhost', 'Content-Length': '50000' }, '{}', 413],
        [{ 'Content-Type': 'application/json', Origin: 'http://localhost' }, 'x'.repeat(33000), 413],
        [{ 'Content-Type': 'application/json', Origin: 'http://localhost' }, '{', 400],
      ];
      for (const [headers, body, status] of samples) {
        assert.equal((await POST(new NextRequest('http://localhost/api/contact', { method: 'POST', headers, body }))).status, status);
      }
      assert.equal((await POST(request({ ...valid, website: 'spam.example' }))).status, 400);
    });
    await t.test('requires server configuration' , async () => {
      delete process.env.BREVO_API_KEY;
      assert.equal((await POST(request())).status, 503);
      process.env.BREVO_API_KEY = 'test-only-key';
      process.env.BREVO_SENDER_EMAIL = 'invalid';
      assert.equal((await POST(request())).status, 503);
      process.env.BREVO_SENDER_EMAIL = 'verified@example.org';
    });
    await t.test('fixes recipient, uses verified sender and replies to visitor', async () => {
      let called = false;
      global.fetch = async (url, options) => {
        called = true;
        assert.equal(url, 'https://api.brevo.com/v3/smtp/email');
        assert.equal(options.headers['api-key'], 'test-only-key');
        const body = JSON.parse(options.body);
        assert.deepEqual(body.to, [{ email: 'nexovibecontact@gmail.com', name: 'NexoVibe' }]);
        assert.equal(body.sender.email, 'verified@example.org');
        assert.equal(body.replyTo.email, valid.email);
        assert.ok(body.textContent.includes(valid.message));
        assert.equal(body.htmlContent, undefined);
        return Response.json({ messageId: '<test@example.org>' }, { status: 201 });
      };
      const response = await POST(request({ ...valid, to: 'other@example.org', sender: 'spoof@example.org' }));
      assert.ok(called);
      assert.equal(response.status, 200);
      assert.deepEqual(await response.json(), { ok: true });
    });
    await t.test('rejects invalid invitation packages before sending', async () => {
      global.fetch = async () => { throw new Error('Transport must not be called'); };
      for (const invitationPackage of ['unknown', '', 42, null, {}]) {
        assert.equal((await POST(request({ ...valid, invitationPackage }))).status, 400);
      }
    });
    await t.test('includes the selected package and authoritative price in email', async () => {
      for (const item of catalog.exports.invitationPackages) {
        global.fetch = async (_url, options) => {
          const sent = JSON.parse(options.body);
          assert.ok(sent.textContent.includes(item.name));
          assert.ok(sent.textContent.includes(catalog.exports.formatInvitationPrice(item.price)));
          assert.ok(sent.textContent.includes('Preço de referência, negociável'));
          assert.ok(!sent.textContent.includes('provisório'));
          assert.ok(!sent.textContent.includes('FORGED_PRICE'));
          assert.equal(sent.to[0].email, 'nexovibecontact@gmail.com');
          return Response.json({ messageId: '<test@example.org>' }, { status: 201 });
        };
        assert.equal((await POST(request({ ...valid, invitationPackage: item.id, price: 'FORGED_PRICE' }))).status, 200);
      }
    });
    await t.test('classifies provider errors without exposing raw data', async () => {
      const cases = [
        [401, 'unauthorized', 'Key not found', 'EMAIL_AUTH'],
        [401, 'unauthorized', 'We detected an unrecognised IP address', 'EMAIL_IP_BLOCKED'],
        [400, 'invalid_parameter', 'sender is invalid', 'EMAIL_SENDER'],
        [403, 'permission_denied', 'Account is not activated', 'EMAIL_PERMISSION'],
        [402, 'not_enough_credits', 'No credits', 'EMAIL_LIMIT'],
        [429, 'rate_limit', 'Too many requests', 'EMAIL_LIMIT'],
      ];
      const originalLog = console.error;
      const logs = [];
      console.error = (...args) => logs.push(args);
      try {
        for (const [status, code, message, expected] of cases) {
          global.fetch = async () => Response.json({ code, message: message + ' secret@example.org PRIVATE_DATA' }, { status });
          const response = await POST(request());
          const result = await response.json();
          assert.equal(response.status, 502);
          assert.equal(result.code, expected);
          assert.ok(!JSON.stringify(result).includes('PRIVATE_DATA'));
        }
        assert.ok(!JSON.stringify(logs).includes('PRIVATE_DATA'));
        assert.ok(!JSON.stringify(logs).includes('secret@example.org'));
      } finally { console.error = originalLog; }
    });
    await t.test('rejects provider failure, unconfirmed success and transport errors', async () => {
      for (const response of [Response.json({ error: 'rejected' }, { status: 400 }), Response.json({}), new Response('invalid JSON', { status: 201 })]) {
        global.fetch = async () => response;
        assert.equal((await POST(request())).status, 502);
      }
      global.fetch = async () => { throw new Error('Network timeout'); };
      assert.equal((await POST(request())).status, 502);
    });
  } finally {
    global.fetch = originalFetch;
    for (const [key, value] of Object.entries(saved)) {
      if (value === undefined) delete process.env[key]; else process.env[key] = value;
    }
  }
});
