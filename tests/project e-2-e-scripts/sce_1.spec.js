import {test,expect} from "@playwright/test"
import logindata from "../../project_testdata/login_data.json"
import HomePage from "../pom_project/HomePage.js"
import new_user_reg from "../../project_testdata/new_user_data_reg.json"
import PatientLogin from "../pom_project/PatientLoginPage.js"
import PatientRegistration from "../pom_project/PatientRegistrationPage.js"
test("sce_1",async({page})=>{
    let url=logindata.url;
    let full_name=new_user_reg.name;
    let address=new_user_reg.address;
    let city=new_user_reg.city;
    let email=new_user_reg.email;
    let password=new_user_reg.password;
    let conf_password=new_user_reg.conf_password;
    let homepage=new HomePage(page);

    await page.goto(url);
    await expect(url).toBe("http://49.249.28.218:8081/TestServer/Build/Hospital_Doctor_Patient_Management_System/");
    let [newPage]=await Promise.all([
       page.waitForEvent("popup"),
       homepage.patient_login_link.click()]);
    let patientlogin=new PatientLogin(newPage);
    await patientlogin.create_acc_link.click();
    let patientregist=new PatientRegistration(newPage);
    await expect(newPage.locator("//input[@name='full_name']")).toBeVisible();
    await patientregist.full_name.fill(full_name);
    await expect(newPage.getByPlaceholder("Address")).toBeVisible();
    await patientregist.address.fill(address);
    await expect(newPage.getByPlaceholder("City")).toBeVisible();
    await patientregist.city.fill(city);
    await expect(newPage.locator("//label[@for='rg-male']")).toBeVisible();
    await patientregist.gender_male.click();
    await expect(newPage.getByPlaceholder("Email")).toBeVisible();
    await patientregist.email.fill(email);
    await expect(newPage.locator("#password")).toBeVisible();
    await patientregist.password.fill(password);
    await expect(newPage.locator("#password_again")).toBeVisible();
    await patientregist.conf_password.fill(conf_password);
    await Promise.all([
    newPage.waitForEvent("dialog").then(async dialog => {
        console.log("Dialog message:", dialog.message());
        await dialog.accept();
    }),
    patientregist.submit_btn.click()
    ]);
})