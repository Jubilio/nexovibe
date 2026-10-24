// Runs against a production build: `npm run build && npm run test:responsive`.
const {test,before,after}=require('node:test');
const assert=require('node:assert/strict');
const {spawn}=require('node:child_process');
const {chromium}=require('playwright');
const port=3107, base=`http://localhost:${port}`;
const pages=['/','/sobre','/portfolio','/portfolio/xlsform-translator','/formacao','/convites','/privacidade','/relatorio-exemplo','/xlsform-translator/user-guide','/en','/en/portfolio','/en/convites'];
const widths=[360,768,1440];
let server, browser;
before(async()=>{
  server=spawn(process.execPath,['node_modules/next/dist/bin/next','start','-p',String(port)],{stdio:'ignore'});
  for(let i=0;i<60;i++){try{if((await fetch(base)).ok)break;}catch{} await new Promise(r=>setTimeout(r,500));}
  browser=await chromium.launch();
});
after(async()=>{await browser?.close();server?.kill();});
for(const width of widths) test(`no page scrolls sideways at ${width}px`,async()=>{
  const context=await browser.newContext({viewport:{width,height:900},isMobile:width<1000,hasTouch:width<1000});
  const page=await context.newPage();
  const wide=[];
  for(const path of pages){
    await page.goto(base+path,{waitUntil:'networkidle'});
    const scrollWidth=await page.evaluate(()=>document.documentElement.scrollWidth);
    if(scrollWidth>width) wide.push(`${path} (${scrollWidth}px)`);
  }
  await context.close();
  assert.deepEqual(wide,[],`pages wider than ${width}px`);
});
test('mobile menu opens, closes on Escape and on a tap outside',async()=>{
  const context=await browser.newContext({viewport:{width:390,height:844},isMobile:true,hasTouch:true});
  const page=await context.newPage();
  await page.goto(base+'/',{waitUntil:'networkidle'});
  const menu=page.locator('#mobile-navigation');
  await page.click('.menu-toggle');
  assert.equal(await menu.isVisible(),true);
  await page.keyboard.press('Escape');
  assert.equal(await menu.isHidden(),true);
  await page.click('.menu-toggle');
  await page.mouse.click(200,700);
  assert.equal(await menu.isHidden(),true);
  await context.close();
});
