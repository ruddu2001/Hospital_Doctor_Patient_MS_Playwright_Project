import {test,expect} from "@playwright/test"
test("handling tabs",async({browser})=>{
    let context=await browser.newContext();
    let page1=await context.newPage();
    await page1.goto("https://www.flipkart.com/");
    let page2=await context.newPage();
    await page2.goto("https://www.amazon.in/");
})

test("handling multiple tabs",async({browser})=>{
    let context=await browser.newContext();
    let page=await context.newPage();
    await page.goto("https://www.amazon.in/");
    await page.locator("input#twotabsearchtextbox").fill("iphone 17 pro");
    await page.keyboard.press("Enter");
    let [page2]=await Promise.all([
     page.waitForEvent("popup"),
     page.locator("(//span[contains(text(),'iPhone 17 Pro 256 GB: 15.93 cm (6.3″) Display with Promotion up to 120Hz, A19 Pro Chip, Breakthrough Battery Life, Pro Fusion Camera System with Center Stage Front Camera; Cosmic Orange')])[1]").click()
    ])
    await page.waitForTimeout(3000);
    console.log(page.url());
    console.log(page2.url());
})

test.only("handling multiple windows",async({browser})=>{
    let context=await browser.newContext();
    let page=await context.newPage();
    await page.goto("https://demoapps.qspiders.com/ui/browser/multipleWindow?sublist=2");
    let [window]=await Promise.all([
        page.waitForEvent("popup"),
        page.locator("//button[text()='Shop Now']").click(),
    ])
    await window.locator("//button[text()='Add to Cart']").click();
    console.log(window.title());
    console.log(page.title());
    let title1=await page.title();
    await expect(await window.title()).not.toBe(title1);
})