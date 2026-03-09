/*import {test} from "@playwright/test"
test("locators",async({page})=>{
    await page.goto("https://practicetestautomation.com/practice-test-login/");
    
    //username textfield
    await page.locator("input#username").fill("student");
    //password textfield
    await page.locator("input#password").fill("Password123");
    //submit button
    await page.locator("[class='btn']").click();
})*/

import {test} from "@playwright/test"
test("locators 1",async({page})=>{
    await page.goto("https://practicetestautomation.com/practice-test-login/");
    
    //username textfield
    await page.locator("//input[@id='username']").fill("student");
    //password textfield
    await page.locator("//input[@id='password']").fill("Password123");
    //submit button
    await page.locator("//button[@id='submit']").click();
})