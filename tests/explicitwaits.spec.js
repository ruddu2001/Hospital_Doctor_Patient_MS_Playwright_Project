import {test} from "@playwright/test"
/*test("explicit wait 1",async({page})=>{
    await page.goto("https://www.amazon.in/");
    await page.locator("//input[@id='twotabsearchtextbox']").fill("apple");
    await page.locator("//div[@role='row']",{hasText:" earphones wired"}).waitFor({timeout:5000});
    let autosugg=await page.locator("//div[@role='row']").allTextContents();
    console.log(autosugg);
})*/

/*test("explicit wait 2",async({page})=>{
    await page.goto("https://www.amazon.in/");
    await Promise.all([
        page.waitForNavigation(),
        page.click("#nav-cart-count-container"),
        await page.waitForLoadState('networkidle',{timeout:3000})
    ])
})*/

/*test("explicit wait 3",async({page})=>{
    await page.goto("https://demoapps.qspiders.com/ui/download?sublist=0");
    await page.fill("#writeArea","fkdnvkdfkvdzk");
    let [downloadfile]=await Promise.all([
        page.waitForEvent('download'),
        page.click("#downloadButton")
    ])
    console.log(await downloadfile.path());
})*/

test("explicit wait 4",async({page})=>{
    await page.goto("https://www.amazon.in/");
    await page.waitForFunction(()=>{return document.readyState==='complete'});
    //await page.locator("//input[@id='twotabsearchtextbox']").fill("laptops");
    //await page.waitForFunction(()=>{let ele=document.querySelectorAll(".s-suggestion-container")
     //   return ele.length>1
    //})
    //let sugg=await page.locator("//div[@class='s-suggestion-container']").allTextContents();
    //console.log(sugg);
})

