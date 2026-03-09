import {test} from "@playwright/test"
import Landingpg from "./page_object_model/landing.page"
import Signuppg from "./page_object_model/signup.page"
import Signinpg from "./page_object_model/signin.page"
import Homepg from "./page_object_model/home.page"
import Createticketpg from "./page_object_model/createticket.page"
import userdet from "../test_data/e2e1.json"
test("End-to-End-Script1",async({page})=>{
    page.on("dialog",async(dialog)=>{
        console.log(dialog.message());
        dialog.accept();
    })
    let landingpg=new Landingpg(page);
    let signuppg=new Signuppg(page);
    let signinpg=new Signinpg(page);
    let homepg=new Homepg(page);
    let createticketpg=new Createticketpg(page);
    //Launch the url.
    await page.goto(userdet.url);
    //Click on Signup Link.
    await landingpg.signupLink.click();
    //Fill all the details in Signup Page.
    await signuppg.usernameTF.fill(userdet.name);
    await signuppg.emailTF.fill(userdet.email);
    await signuppg.passwordTF.fill(userdet.password);
    await signuppg.cpasswordTF.fill(userdet.conf_password);
    await signuppg.conNumberTF.fill(userdet.mob_no);
    await signuppg.genderMRB.click();
    await signuppg.submitBTN.click();
    //Login with same credentials in Signin Page.
    await signinpg.emailTF.fill(userdet.email);
    await signinpg.passwordTF.fill(userdet.conf_password);
    await signinpg.loginBTN.click();
    //Click on Create Ticket link on Home Page.
    await homepg.createTicketOption.click();
    //Fill all the details in Create Ticket Page.
    await createticketpg.subjectTF.fill(userdet.subject);
    await page.waitForTimeout(2000);
    await createticketpg.tasktypeDD.selectOption({value:"ot2"});
    await page.waitForTimeout(2000);
    await createticketpg.priorityDD.selectOption({value:"non-urgent"});
    await page.waitForTimeout(2000);
    await createticketpg.descriptionTA.fill(userdet.description);
    await page.waitForTimeout(3000);
    await createticketpg.sendBTN.click();
    //Click on View Ticket link.
    await homepg.viewTicketOption.click();
    await page.screenshot({path:"/screenshot/ticketss1.png"});
    await page.waitForTimeout(3000);
})