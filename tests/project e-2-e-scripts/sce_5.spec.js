import {test} from "@playwright/test"
import HomePage from "../pom_project/HomePage"
import PatientLogin from "../pom_project/PatientLoginPage"
import UserDashboard from "../pom_project/UserDashboard"
import DoctorLogin from "../pom_project/DoctorLoginPage"
import DoctorDashboard from "../pom_project/DoctorDashboard"
import BookAppointment from "../pom_project/BookAppointmentPage"
import userlogin from "../../project_testdata/login_user.json"
import doctorlogin from "../../project_testdata/login_doctor.json"
import logindata from "../../project_testdata/login_data.json"

test("sce5",async({page})=>{
    let url=logindata.url;
    let patient_username=userlogin.username;
    let patient_password=userlogin.password;
    let doctor_username=doctorlogin.doctor_username;
    let doctor_password=doctorlogin.doctor_password;

    await page.goto(url);
    let homepage=new HomePage(page);
    let [newPage]=await Promise.all([
      page.waitForEvent("popup"),
      homepage.patient_login_link.click()]);
    let patientlogin=new PatientLogin(newPage);
    await patientlogin.username_textfield.fill(patient_username);
    await patientlogin.password_textfield.fill(patient_password);
    await patientlogin.login_btn.click();
    let userdashboard=new UserDashboard(newPage);
    await userdashboard.book_appoint_link.click();
    let bookappointment=new BookAppointment(newPage);
    /*page.on("dialog",async(dialog)=>{
      console.log(dialog.message());
      await dialog.accept();
    })*/
    await bookappointment.doctor_specia_drop.selectOption("Internal Medicine");
    await bookappointment.select_doctor_drop.selectOption("Kapil Kumar Singh");
    await newPage.waitForSelector("//input[@name='appdate']");
    //await bookappointment.date_drop.click();
    await bookappointment.date_drop.fill("2026-02-27");
    await bookappointment.submit_btn.click();
    //await newPage.waitForTimeout(2000);
    /*page.once("dialog",async(dialog)=>{
      console.log(dialog.message());
      await dialog.accept();
    })*/
    await newPage.waitForSelector("//span[@class='username']");
    await userdashboard.user_profile.click();
    await userdashboard.logout_link.click();
    let [newPage1]=await Promise.all([
      page.waitForEvent("popup"),
      homepage.doctor_login_link.click()]);
    let doctor_login=new DoctorLogin(newPage1);
    await doctor_login.doct_username_textfield.fill(doctor_username);
    await doctor_login.doct_password_textfield.fill(doctor_password);
    await doctor_login.login_btn.click();
    let doctor_dashboard=new DoctorDashboard(newPage1);
    await doctor_dashboard.appointment_history_link.click();
    await newPage1.screenshot({path:"screenshot_project/appoint_patient.jpeg"});
})