import {test,expect} from "@playwright/test"

/*test("flipkart",async({page})=>{
    await page.goto("https://www.flipkart.com/");
    await page.locator('//input[@class="lNPl8b"]').fill("shoes for men");
    await page.keyboard.press();
})*/

test("amazon",async({page})=>{
    await page.goto("https://www.amazon.in/");
    await page.locator("input#twotabsearchtextbox").fill("shoes for men");
    await page.locator("#nav-search-submit-button").click();
    await page.locator("//span[contains(text(),'Men THUNDER-07 Stylish Casual Mid Top Sneaker and Trendy Shoes with Laces for Men & Boys, Perfect, College, Parties and Outings, Lightweight, Comfortable, and Durable for All-Day Use')]").click();
    await page.locator("(//div[@id='addToCart_feature_div'])[1]").click();
    await page.locator("#nav-cart-count-container").click();
    //await expect(page.locator("(//span[contains(text(),'ASIAN Men THUNDER-07 ')])[1]")).toHaveText("ASIAN Men THUNDER-07 Stylish Casual Mid Top Sneaker and Trendy Shoes with Laces for Men & Boys, Perfect, College, Parties and Outings, Lightweight, Comfortable, and…");
    await page.waitForTimeout(3000);
})
