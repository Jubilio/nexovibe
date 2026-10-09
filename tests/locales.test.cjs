const {test}=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const vm=require('node:vm');
const ts=require('typescript');
const {execFileSync}=require('node:child_process');
execFileSync(process.execPath,['scripts/build-locales.mjs'],{stdio:'pipe'});
function read(file){return fs.readFileSync(file,'utf8');}
function moduleOf(file){const exports={};vm.runInNewContext(ts.transpileModule(read(file),{compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2020}}).outputText,{exports,URL,encodeURIComponent,Intl});return exports;}
test('English build keeps API, package IDs and image paths stable',()=>{
  const pt=moduleOf('src/lib/invitations.ts').invitationPackages;
  const en=moduleOf('src/generated/en/lib/invitations.ts').invitationPackages;
  assert.equal(JSON.stringify(en.map(p=>[p.id,p.price])),JSON.stringify(pt.map(p=>[p.id,p.price])));
  const form=read('src/generated/en/components/ui/ContactForm.tsx');
  assert.match(form,/fetch\("\/api\/contact"/);assert.doesNotMatch(form,/\/en\/api\//);
  assert.match(form,/Opening WhatsApp|Open WhatsApp/);assert.match(form,/Continue on WhatsApp/);
  const data=moduleOf('src/generated/en/lib/data.ts').projects;
  for(const p of data) assert.ok(fs.existsSync('public'+p.image.src),p.image.src);
});
test('WhatsApp links use the approved number, encode messages and stay user initiated',()=>{
  for(const file of ['src/lib/contact.ts','src/generated/en/lib/contact.ts']){
    const contact=moduleOf(file);const url=new URL(contact.whatsappUrl('Package & scope?'));
    assert.equal(url.origin,'https://wa.me');assert.equal(url.pathname,'/258874518769');assert.equal(url.searchParams.get('text'),'Package & scope?');
  }
  assert.match(moduleOf('src/generated/en/lib/contact.ts').whatsappUrl(),/Hello/);
});
test('Language metadata and detail links preserve the matching page',()=>{
  const helper=moduleOf('src/lib/locale.ts');const result=helper.localeAlternates('/en/portfolio/geoclick-capture');
  assert.equal(result.canonical,'/en/portfolio/geoclick-capture');assert.equal(result.languages['pt-MZ'],'/portfolio/geoclick-capture');
  const layout=read('src/app/en/layout.tsx');assert.match(layout,/<html lang="en"/);assert.match(layout,/metadataBase: new URL\("https:\/\/nexovibe.netlify.app"\)/);
  const card=read('src/generated/en/components/ui/ProjectCard.tsx');assert.match(card,/\/en\/portfolio\/\$\{project.caseStudy\}/);
  assert.match(read('src/generated/en/components/ui/Navbar.tsx'),/href="\/en"/);
});
test('English commercial components contain no untranslated catalog entries',()=>{
  const catalog=JSON.parse(read('locales/en.json'));
  const paths=[];function walk(dir){for(const e of fs.readdirSync(dir,{withFileTypes:true})){const p=dir+'/'+e.name;if(e.isDirectory())walk(p);else if(/\.tsx?$/.test(p))paths.push(p);}}
  walk('src/generated/en');walk('src/app/en');
  for(const file of paths){
    if(file.includes('/xlsform-translator/'))continue; // Bilingual source props; the English renderer only displays En fields.
    const ast=ts.createSourceFile(file,read(file),ts.ScriptTarget.Latest,true,file.endsWith('tsx')?ts.ScriptKind.TSX:ts.ScriptKind.TS);
    function visit(n){if(ts.isJsxText(n)||ts.isStringLiteral(n)){const key=n.text.replace(/\s+/g,' ').trim();assert.ok(!catalog[key]||catalog[key]===key,`${file}: ${key}`);}ts.forEachChild(n,visit);}visit(ast);
  }
});
