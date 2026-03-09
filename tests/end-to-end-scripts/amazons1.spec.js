import {test} from "@playwright/test"
test("amazons1",async({page})=>{
    await page.goto("https://www.amazon.in/");
    await page.locator("input#twotabsearchtextbox").fill("iphone 17");
    await page.locator("//div[@aria-label='iphone 17 pro' and text()='iphone 17']").click();
    let [window]=await Promise.all([
        page.waitForEvent("popup"),
        page.locator("(//span[contains(text(),'iPhone 17 Pro 256 GB: 15.93 cm (6.3″) Display with Promotion up to 120Hz, A19 Pro Chip, Breakthrough Battery Life, Pro Fusion Camera System with Center Stage Front Camera; Silver')])[1]").click()
    ])
    //await window.waitForLoadState();
    await window.getByRole("button",{name:"Add to cart"}).click();
    await window.locator("#nav-cart-count-container").click();
    let price=await window.locator("(//span[contains(text(),'₹1,34,900.00')])[1]").textContent();
    console.log(price);
})