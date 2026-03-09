import {test} from "@playwright/test"
import fs from "fs"
let datafile=fs.readFileSync("D:/playwright/test_data/singlesetdata1.json");
let data=JSON.parse(datafile);
test("get data from json 1",async({page})=>{
    await page.goto(data.url);
    await page.locator("input#username").fill(data.username);
    await page.locator("input#password").fill(data.password);
    await page.locator("#submit").click();

    let title=await page.title();
    if(title=="Logged In Successfully | Practice Test Automation"){
        console.log("Valid Credentials");
    }
    else{
        console.log("Invalid Credentials");
    }
})

test.only("multiple set of data",async({page})=>{
    for(let d of data){
        let url=d.url;
        let username=d.username;
        let password=d.password;

        await page.goto(url);
        await page.locator("input#username").fill(username);
        await page.locator("input#password").fill(password);
        await page.locator("#submit").click();

        let title=await page.title();
        if(title=="Logged In Successfully | Practice Test Automation"){
           console.log("Valid Credentials");
        }
        else{
           console.log("Invalid Credentials");
        }
        await page.waitForTimeout(3000);
    }
})