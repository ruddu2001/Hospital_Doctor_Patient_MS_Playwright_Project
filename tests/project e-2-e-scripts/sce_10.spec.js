import {test,expect} from "@playwright/test"
import HomePage from "../pom_project/HomePage";
import ContactUsPage from "../pom_project/ContactUsPage";
import logindata from "../../project_testdata/login_data.json";
import contactdetails from "../../project_testdata/contact_details.json";
test("sce10",async({page})=>{
   let url=logindata.url;
   let name=contactdetails.name;
   let mobile_no=contactdetails.mobile_no;
   let email_address=contactdetails.email_address;
   let message=contactdetails.message;

   await page.goto(url);
   let homepage=new HomePage(page);
   await homepage.contact_us_link.click();
   let contactus=new ContactUsPage(page);
   await contactus.full_name.fill(name);
   await contactus.email.fill(email_address);
   await contactus.mobile_no.fill(mobile_no);
   await contactus.message.fill(message);
   await contactus.submit_btn.click();
   page.once("dialog",async(dialog)=>{
      console.log(dialog.message);
      await dialog.accept();
   })
})
