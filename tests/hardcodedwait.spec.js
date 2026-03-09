import {test} from "@playwright/test"
test("hardcoded_wait",async({page})=>{
    await page.goto("https://practicetestautomation.com/practice-test-login/");
    await page.waitForTimeout(2000);
    await page.locator("//input[@id='username']").fill("student");
    await page.waitForTimeout(2000);
    await page.locator("//input[@id='password']").fill("Password123");
    await page.waitForTimeout(2000);
    await page.locator("//button[@id='submit']").click();
})