import {test} from "@playwright/test"
test("Element_Control",async({page})=>{
    //await page.goto("https://demoapps.qspiders.com/ui?scenario=1");

    //fill() method
    //await page.locator("#name").fill("Rahul Singh");
    //await page.fill("#name","Rahul Singh");

    //inputValue() method
    // let name=await page.locator("#name").inputValue();
    //console.log(name);

    //type() method
    //await page.locator("#email").type("rahul123singh@gmail.com");
    //let email=await page.locator("#email").inputValue();
    //console.log(email);

    //click() method
    //await page.locator("//button[text()='Register']").click();
    //await page.getByRole("button",{name:"Register"}).click();

    //pause() method
    //await page.pause(2000);

    //innerText() method
    //let text=await page.locator("//section[text()='Check Box']").innerText();
    //console.log(text);

    //textContent() method
    //let text2=await page.locator("//section[text()='Toggle']").textContent();
    //console.log(text2);

    //allTextContent() method
    //let texts=await page.locator("//section[@class='poppins text-[14px]']").allTextContents();
    //console.log(texts);
    
    //getAttribute() method
    //let value=await page.locator("//input[@name='email']").getAttribute("type");
    //console.log(value);

    //all() method
    //await page.goto("https://www.flipkart.com/");
    // a=await page.locator("//div[@class='yQdBY2']").all();
    //console.log(a);
    //let b=await page.locator("//div[@class='yQdBY2']").first();
    //console.log(b);
    //let c=await page.locator("//div[@class='yQdBY2']").last();
    //console.log(c);
    //let d=await page.locator("//div[@class='yQdBY2']").nth(1);
    //console.log(d);
    //await page.locator("//div[@class='yQdBY2']").first().waitFor();
    //let a=await page.locator("//div[@class='yQdBY2']").all();
    //console.log(a);

    //isVisible() method
    //await page.goto("https://demoapps.qspiders.com/ui/dropdown?sublist=0");
    //await page.locator("//input[@id='phone']").waitFor();
    //let v=await page.locator("//input[@id='phone']").isVisible();
    //console.log(v);
    //await page.locator("//input[@id='phone']").fill("8722712987");
    //let v=await page.locator("//input[@id='phone']").isVisible();
    //console.log(v);

    //isEnabled() method
    //await page.goto("https://demoapps.qspiders.com/ui/dropdown?sublist=0");
    //await page.locator("//input[@id='phone']").waitFor();
    //let v=await page.locator("//input[@id='phone']").isEnabled();
    //console.log(v);

    //isDisabled() method
    //await page.goto("https://demoapps.qspiders.com/ui/dropdown?sublist=0");
    //await page.locator("//input[@id='phone']").waitFor();
    //let v=await page.locator("//input[@id='phone']").isDisabled();
    //console.log(v);

    //isEditable() method
    //await page.goto("https://demoapps.qspiders.com/ui");
    //await page.locator("#name").waitFor();
    //let v=await page.locator("#name").isEditable();
    //console.log(v);

    //isChecked() method
    await page.goto("https://demoapps.qspiders.com/ui/checkbox?sublist=0");
    //await page.locator("#domain_a").waitFor();
    await page.locator("#domain_a").click();
    let v=await page.locator("#domain_a").isChecked();
    console.log(v);
    


})