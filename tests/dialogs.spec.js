import {test,expect} from "@playwright/test"
test("dialogs handling",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    /*await page.locator("//button[text()='Simple Alert']").click();
    await page.waitForTimeout(3000);
    await page.locator("//button[text()='Confirmation Alert']").click();
    await page.waitForTimeout(3000);
    await page.locator("//button[text()='Prompt Alert']").click();
    await page.waitForTimeout(3000);*/
    
    /*
    page.on("dialog",(dialog)=>{dialog.accept()});
    await page.getByRole("button",{name:"Simple Alert"}).click();
    await page.getByRole("button",{name:"Confirmation Alert"}).click();
    await page.getByRole("button",{name:"Prompt Alert"}).click();*/

    page.on("dialog",async(dialog)=>{
        if(dialog.type()=='alert'){
            await dialog.accept();
        }
        else if(dialog.type()=='confirm'){
            await dialog.accept();
        }
        else if(dialog.type()=='prompt'){
            if(dialog.defaultValue=="tom"){
                console.log(await dialog.defaultValue());
            }
            else{
              await dialog.accept("tom");
            }
        }
    })
    await page.getByRole("button",{name:"Simple Alert"}).click();
    await page.waitForTimeout(2000);
    await page.getByRole("button",{name:"Confirmation Alert"}).click();
    await page.waitForTimeout(2000);
    await expect(page.locator("#demo")).toContainText("OK");
    await page.getByRole("button",{name:"Prompt Alert"}).click();
    await page.waitForTimeout(2000);
    await expect(page.locator("#demo")).toContainText("tom");
})

test.only("dialogs using page.once",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.getByRole("button",{name:"Simple Alert"}).click();
    await page.waitForTimeout(2000);
    await page.getByRole("button",{name:"Confirmation Alert"}).click();
    await page.waitForTimeout(2000);
    page.once("dialog",async(dialog)=>{
        dialog.accept("tommy");
    })
    await page.getByRole("button",{name:"Prompt Alert"}).click();
    await page.waitForTimeout(2000);
    await page.reload();
    await page.getByRole("button",{name:"Prompt Alert"}).click();
    await page.waitForTimeout(2000);
})