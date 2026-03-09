import {expect, test} from "@playwright/test"
/*test("radio buttons",async({page})=>{
    await page.goto("https://demoapps.qspiders.com/ui/radio?sublist=0");
    //await page.locator("//input[@id='attended']").click();
    await page.locator("//input[@id='attended']").check();
    
    //assertions
    console.log(await page.locator("//input[@id='attended']").isChecked());
    await expect(page.locator("//input[@id='attended']")).toBeChecked();
    await expect(page.locator("//input[@id='attended']")).not.toBeChecked();
    await expect(page.locator("//input[@id='attended']").isChecked()).toBeFalsy();    

})*/

test("checkboxes",async({page})=>{
    await page.goto("https://demoapps.qspiders.com/ui/checkbox?sublist=0");
    //await page.locator("#domain_a").click();
    await page.locator("#domain_a").check();
    await page.waitForTimeout(3000);

    //verify checked
    await expect(page.locator("#domain_a")).toBeChecked();
    
    //await page.locator("#domain_a").click();
    await page.locator("#domain_a").uncheck();
    await page.waitForTimeout(3000);
    //verify unchecked
    //await expect(page.locator("#domain_a")).not.toBeChecked();
    await expect(page.locator("#domain_a").toBeChecked).toBeFalsy();
})