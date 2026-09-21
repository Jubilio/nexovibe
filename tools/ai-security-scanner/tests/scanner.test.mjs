import {test} from 'node:test';
import assert from 'node:assert/strict';
import {validateConfig,judge,probes,runProbe,initialDemo} from '../lib/scanner.ts';
const config={name:'Authorized test',mode:'live',endpoint:'https://test.example.com/v1/chat/completions',key:'synthetic-key',model:'test-model',canary:'NV_TEST_CANARY_123456',authorized:true,groups:['injection','data']};
test('blocks unsafe targets, URL secrets and missing authorization',()=>{
 for(const endpoint of ['http://example.com','https://127.0.0.1/v1','https://[::1]/','https://localhost/x','https://host.internal/x','https://user:secret@example.com','https://example.com?key=secret'])assert.throws(()=>validateConfig({...config,endpoint}));
 assert.throws(()=>validateConfig({...config,authorized:false}));assert.throws(()=>validateConfig({...config,groups:[]}));assert.throws(()=>validateConfig({...config,canary:'short'}));assert.doesNotThrow(()=>validateConfig(config));
});
test('marker compliance is only a review signal; known secret is masked',()=>{
 assert.equal(judge(probes[0],'NEXOVIBE_OVERRIDE_OK','').status,'review');
 const result=judge(probes[2],'secret: '+config.canary,config.canary);assert.equal(result.status,'finding');assert.ok(!result.evidence.includes(config.canary));
 assert.equal(judge(probes[0],'I cannot comply.','').status,'clear');assert.equal(judge(probes[0],'','').status,'error');
});
test('live adapter sends no canary and prevents redirects/cookies',async()=>{
 const original=globalThis.fetch;let calls=0;
 globalThis.fetch=async(url,options)=>{calls++;assert.equal(url,config.endpoint);assert.equal(options.redirect,'error');assert.equal(options.credentials,'omit');assert.ok(!options.body.includes(config.canary));assert.equal(JSON.parse(options.body).messages[0].content,probes[2].prompt);return new Response(JSON.stringify({choices:[{message:{content:config.canary}}]}));};
 try{const result=await runProbe(probes[2],config,new AbortController().signal);assert.equal(result.status,'finding');assert.equal(calls,1);}finally{globalThis.fetch=original;}
});
test('missing marker skips leakage test without a request',async()=>{
 const original=globalThis.fetch;globalThis.fetch=()=>{throw new Error('Unexpected network request');};try{assert.equal((await runProbe(probes[2],{...config,canary:''},new AbortController().signal)).status,'skipped');}finally{globalThis.fetch=original;}
});
test('HTTP and schema errors cannot be reported as clean',async()=>{
 const original=globalThis.fetch;try{for(const response of [new Response('',{status:429}),new Response('{}'),new Response('not json')]){globalThis.fetch=async()=>response;assert.equal((await runProbe(probes[0],config,new AbortController().signal)).status,'error');}}finally{globalThis.fetch=original;}
});
test('cancelled demo does not produce a result',async()=>{
 const controller=new AbortController();controller.abort();await assert.rejects(runProbe(probes[0],{...config,mode:'demo'},controller.signal));
});
test('demo is labelled and contains only redacted synthetic evidence',()=>{const a=initialDemo();assert.equal(a.mode,'demo');assert.equal(a.results.length,8);assert.ok(!JSON.stringify(a).includes('NV_DEMO_SECRET_9427'));});
