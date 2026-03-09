import {test} from "@playwright/test"
import loginpage from "./page_object_model/loginpage.page.js"
import logindata from "../test_data/logindata.json"
test("login page pom",async({page})=>{
    let loginpg=new loginpage(page);
    let url=logindata.url;
    let username=logindata.username;
    let password=logindata.password;
    //launch URL
    await page.goto(url);
    //Pass Username
    await loginpg.usernameTextfield.fill(username);
    //Pass Password
    await loginpg.passwordTextfield.fill(password);
    //Click on Submit Button
    await loginpg.submitButton.click();
    await page.waitForTimeout(3000);
})