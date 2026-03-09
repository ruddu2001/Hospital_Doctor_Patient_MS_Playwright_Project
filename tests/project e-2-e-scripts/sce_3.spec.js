import {test} from "@playwright/test"
import logindata from "../../project_testdata/login_data.json"
import loginuser from "../../project_testdata/login_user.json"
import HomePage from "../pom_project/HomePage.js"
import PatientLogin from "../pom_project/PatientLoginPage.js"
import UserDashboard from "../pom_project/UserDashboard.js"
import BookAppointment from "../pom_project/BookAppointmentPage.js"
test("sce3",async({page})=>{
    let url=logindata.url;
    let email=loginuser.username;
    let password=loginuser.password;
    
    let homepage=new HomePage(page);
   // page.on("dialog", async dialog => {
      // console.log("Dialog message:", dialog.message());
      // await dialog.accept();
   // })
    await page.goto(url);
    let [newPage]=await Promise.all([
       page.waitForEvent("popup"),
       homepage.patient_login_link.click()]);
    newPage.on("dialog", async (dialog) => {
       console.log("Dialog message", dialog.message());
       await dialog.accept();
    });
    let patientlogin=new PatientLogin(newPage);
    await patientlogin.username_textfield.fill(email);
    await patientlogin.password_textfield.fill(password);
    await patientlogin.login_btn.click();
    let userdashboard=new UserDashboard(newPage);
    await userdashboard.book_appoint_link.click();
    let bookappointment=new BookAppointment(newPage);
    await bookappointment.doctor_specia_drop.selectOption("Orthopedics2.0");
    await bookappointment.select_doctor_drop.selectOption("Narayan Rao");
    await bookappointment.date_drop.fill("2026-02-26");
    await bookappointment.time_drop.fill("6:00 PM");
    await bookappointment.submit_btn.click();
}) 