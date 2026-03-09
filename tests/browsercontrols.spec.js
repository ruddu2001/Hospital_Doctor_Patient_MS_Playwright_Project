//page.setViewportSize()
/*import {test} from "@playwright/test"
test("browser controls",async({page})=>{
    await page.goto("https://www.google.com");
    await page.setViewportSize({width:1000,height:500});
})*/

//page.viewportSize()
/*import {test} from "@playwright/test"
test("browser controls",async({page})=>{
    await page.goto("https://www.google.com");
    let size=await page.viewportSize();
    console.log(size);
    await page.setViewportSize({width:1000,height:500});
    let size1=await page.viewportSize();
    console.log(size1);
})*/

//page.title()
/*import {test} from "@playwright/test"
test("browser controls",async({page})=>{
    await page.goto("https://www.google.com");
    let title=await page.title();
    console.log(title);
    console.log(page.url());
})*/

//context.cookies()
/*import {test} from "@playwright/test"
test("browser controls",async({browser})=>{
    let context=await browser.newContext();
    let page=await context.newPage();
    console.log(await context.cookies());

    await page.goto("https://www.google.com");
    console.log(await context.cookies());
})*/

//chromium.launch(),firefox.launch(),webkit.launch()
/*import {test,firefox} from "@playwright/test"
test("browser controls",async({})=>{
    let browser=await firefox.launch();
    let context=await browser.newContext();
    let page=await context.newPage();
    await page.goto("https://www.google.com");
})*/

//page.screenshot({path})
/*import {test} from "@playwright/test"
test("Taking_Screenshot",async({browser})=>{
    let context=await browser.newContext();
    let page=await context.newPage();
    await page.goto("https://www.google.com");
    // await page.screenshot({path:"screenshot/google.png"});

    let time=new Date().getTime();
    await page.screenshot({path:`screenshot/google-${time}.png`});
})*/

