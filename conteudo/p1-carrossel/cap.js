const {chromium}=require('/opt/node22/lib/node_modules/playwright');
(async()=>{
 const dir='/home/user/Main/conteudo/p1-carrossel';
 const b=await chromium.launch(); const p=await b.newPage({viewport:{width:1080,height:1350}});
 await p.goto('file://'+dir+'/slides.html'); await p.evaluate(()=>document.fonts.ready); await p.waitForTimeout(400);
 for(let i=1;i<=9;i++){ await p.locator('#s'+i).screenshot({path:`${dir}/slide-0${i}.png`}); }
 await b.close();
})();
