import {test,expect} from "@playwright/test"
import AdminLogin from "../pom_project/AdminLoginPage"
import AdminHome from "../pom_project/AdminHomePage"
import AddDoctor from "../pom_project/AddDoctorPage"
import HomePage from "../pom_project/HomePage"
import doctordata from "../../project_testdata/new_doctor_data_reg.json"
import logindata from "../../project_testdata/login_data.json"
import admindata from "../../project_testdata/admin_data.json"
import doctorlogin from "../../project_testdata/login_doctor.json"
test("sce4",async({page})=>{
    let url=logindata.url;
    let admin_username=admindata.admin_username;
    let admin_password=admindata.admin_password;
    let doctor_name=doctordata.doctor_name;
    let doctor_clinic_address=doctordata.doctor_clinic_address;
    let doctor_cons_fees=doctordata.doctor_consultancy_fees;
    let doctor_cont_no=doctordata.doctor_contact_no;
    let doctor_email=doctordata.doctor_email;
    let doctor_pass=doctordata.doctor_password;
    let doctor_conf_pass=doctordata.doctor_conf_password;
    let doctor_username=doctorlogin.doctor_username;
    let doctor_password=doctorlogin.doctor_password;
    let homepage=new HomePage(page);

    await page.goto(url);
    let[newPage]=await Promise.all([
       page.waitForEvent("popup"),
       homepage.admin_login_link.click()]);
    let adminlogin=new AdminLogin(newPage);
    await adminlogin.adm_username_textfield.fill(admin_username);
    await adminlogin.adm_password_textfield.fill(admin_password);
    await adminlogin.login_btn.click();
    let adminhome=new AdminHome(newPage);
    // await newPage.waitForLoadState('domcontentloaded')
    await newPage.waitForSelector("//span[text()=' Doctors ']");
    await adminhome.doctors_link.click();
    await adminhome.add_doctor.click();
    let add_doctor=new AddDoctor(newPage);
    await add_doctor.doctor_specialization.selectOption("Internal Medicine");
    await add_doctor.doctor_name.fill(doctor_name);
    await add_doctor.doctor_clinic_address.fill(doctor_clinic_address);
    await add_doctor.doctor_consultancy_fees.fill(doctor_cons_fees);
    await add_doctor.doctor_contact_no.fill(doctor_cont_no);
    await add_doctor.doctor_email.fill(doctor_email);
    await add_doctor.doctor_password.fill(doctor_pass);
    await add_doctor.doctor_conf_password.fill(doctor_conf_pass);
    await add_doctor.submit_btn.click();
    newPage.once("dialog",async(dialog)=>{
        console.log(dialog.message());
    })
})