import {test} from "@playwright/test"
test("mmts1",async({page})=>{
    await page.goto("https://www.makemytrip.com/");
    await page.locator("//span[@data-cy='closeModal']").click();
    await page.locator("//img[@alt='minimize']").click();
    await page.locator("//span[text()='From']").click();
    await page.getByPlaceholder("From").fill("Bengaluru");
    await page.getByText("Bengaluru, India").click();
    await page.locator("//span[text()='To']").click();
    await page.locator("//input[@placeholder='To']").fill("Nagpur");
    await page.getByText("Nagpur, India").click();
    await page.locator("//span[text()='Departure']").click();
    await page.locator("//div[@aria-label='Fri Feb 20 2026']").click();
    await page.locator("//span[text()='Return']").click();
    await page.locator("//div[@aria-label='Mon Feb 23 2026']").click();
    await page.locator("//a[text()='Search']").click();
    await page.locator("//span[@class='boldFont blackText']").first().waitFor();
    let flightnames=await page.locator("//span[@class='boldFont blackText']").allTextContents();
    console.log(flightnames);
    await page.locator("//p[@class='blackText fontSize16 blackFont']").first().waitFor();
    let price=await page.locator("//p[@class='blackText fontSize16 blackFont']").allTextContents();
    console.log(price);
})