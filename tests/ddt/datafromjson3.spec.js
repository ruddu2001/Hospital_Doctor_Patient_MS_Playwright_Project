import {test} from "@playwright/test"
import data from "../../test_data/multiplesetdata.json"
test("multiple data ddt json",async({page})=>{
    for(let d of data.valid){
        await page.goto(d.url);
        await page.locator("input#username").fill(d.username);
        await page.locator("input#password").fill(d.password);
        await page.locator("#submit").click();

        let title=await page.title();
        if(title=="Logged In Successfully | Practice Test Automation"){
          console.log("Valid Credentials");
        }
        else{
          console.log("Invalid Credentials");
        }
    }

    for(let d of data.invalid){
        await page.goto(d.url);
        await page.locator("input#username").fill(d.username);
        await page.locator("input#password").fill(d.password);
        await page.locator("#submit").click();

        let title=await page.title();
        if(title=="Logged In Successfully | Practice Test Automation"){
          console.log("Valid Credentials");
        }
        else{
          console.log("Invalid Credentials");
        } 
    }
})

test.only("multiple data ddt json2",async({page})=>{
    for(let key in data){
        for(let value of data[key]){
            await page.goto(value.url);
            await page.locator("input#username").fill(value.username);
            await page.locator("input#password").fill(value.password);
            await page.locator("#submit").click();

            let title=await page.title();
            if(title=="Logged In Successfully | Practice Test Automation"){
              console.log("Valid Credentials");
            }
            else{
              console.log("Invalid Credentials");
            } 
        }
    }
})