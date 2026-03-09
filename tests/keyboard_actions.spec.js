import {test} from "@playwright/test"
test("keyboard actions",async({page})=>{
    await page.goto("https://demoapps.qspiders.com/ui?scenario=1");
    //await page.locator("#name").fill("Rudransh");

    //type()
    //await page.locator("#name").type("Rudransh");
    //await page.type("#name","Rudransh");
    //await page.locator("#name").click();
    //await page.keyboard.type("Rudransh");

    //insertText()
    await page.locator("#name").click();
    await page.keyboard.insertText("Rudransh");
    await page.keyboard.down("Space");
    await page.keyboard.up("Space");
    await page.keyboard.down("R");
    await page.keyboard.up("R");
    await page.keyboard.down("a");
    await page.keyboard.up("a");
    await page.keyboard.down("t");
    await page.keyboard.up("t");
    await page.waitForTimeout(3000);

    //press()
    await page.keyboard.press("Tab");
    await page.keyboard.type("raa123@gmail.com");
    await page.keyboard.press("Control+A");
    await page.keyboard.press("Control+C");
    await page.keyboard.press("Tab");
    await page.keyboard.press("Control+V");
    await page.waitForTimeout(3000);
})

test("scrolling action",async({page})=>{
    await page.goto("https://www.amazon.in/");

    for(let index=1;index<=10;index++){
        await page.keyboard.press("ArrowDown");
    }
    await page.waitForTimeout(3000);
    for(let index=1;index<6;index++){
        await page.keyboard.press("ArrowUp");
    }
    await page.waitForTimeout(3000);
})