import {test} from "@playwright/test"
test.use({actionTimeout:5000})
/*test("auto-wait",async({page})=>{
    await page.goto("https://demoapps.qspiders.com/ui/radio?sublist=0");
    await page.locator("//input[@value='Up']").check();
})*/
test("auto-wait",async({page})=>{
    //page.setDefaultTimeout(3000);
    await page.goto("https://practicetestautomation.com/practice-test-login/");
    await page.locator("//input[@name='username']").fill("student");
    //await page.locator("//button[@id='submit']").click({timeout:1000});
    await page.locator("//button[@id='submit']").click();
})  
