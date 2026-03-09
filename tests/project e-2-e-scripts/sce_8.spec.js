import {test,expect} from "@playwright/test";
import HomePage from "../pom_project/HomePage";
import AdminLogin from "../pom_project/AdminLoginPage";
import AdminHome from "../pom_project/AdminHomePage";
import AddDoctorPage from "../pom_project/AddDoctorPage";
import DoctorLogin from "../pom_project/DoctorLoginPage";
import DoctorDashboard from "../pom_project/DoctorDashboard";
import logindata from "../../project_testdata/login_data.json";
import admin_login from "../../project_testdata/admin_data.json";
import doctor_data from "../../project_testdata/new_doctor_data_reg+login.json";
test("sce8",async({page})=>{
    let url=logindata.url;

    let admin_username=admin_login.admin_username;
    let admin_password=admin_login.admin_password;

    let doctor_name=doctor_data.doctor_name;
    let doctor_clinic_address=doctor_data.doctor_clinic_address;
    let doctor_consultancy_fees=doctor_data.doctor_consultancy_fees;
    let doctor_contact_no=doctor_data.doctor_contact_no;
    let doctor_email=doctor_data.doctor_email;
    let doctor_password=doctor_data.doctor_password;
    let doctor_conf_password=doctor_data.doctor_conf_password;

    await page.goto(url);
    let homepage=new HomePage(page);
    let [newPage]=await Promise.all([
        page.waitForEvent("popup"),
        homepage.admin_login_link.click()]);
    let adminlogin=new AdminLogin(newPage);
    await adminlogin.adm_username_textfield.fill(admin_username);
    await adminlogin.adm_password_textfield.fill(admin_password);
    await adminlogin.login_btn.click();
    let admin_home=new AdminHome(newPage);
    await newPage.waitForSelector("//span[text()=' Doctors ']");
    await admin_home.doctors_link.click();
    await admin_home.add_doctor.click();
    let add_doctor_page=new AddDoctorPage(newPage);
    await add_doctor_page.doctor_specialization.selectOption("Radiology");
    await add_doctor_page.doctor_name.fill(doctor_name);
    await add_doctor_page.doctor_clinic_address.fill(doctor_clinic_address);
    await add_doctor_page.doctor_consultancy_fees.fill(doctor_consultancy_fees);
    await add_doctor_page.doctor_contact_no.fill(doctor_contact_no);
    await add_doctor_page.doctor_email.fill(doctor_email);
    await add_doctor_page.doctor_password.fill(doctor_password);
    await add_doctor_page.doctor_conf_password.fill(doctor_conf_password);
    await add_doctor_page.submit_btn.click();
    await newPage.waitForSelector("//span[@class='username']");
    await admin_home.admin_tab.click();
    await admin_home.logout.click();
    let [newPage1]=await Promise.all([
        page.waitForEvent("popup"),
        homepage.doctor_login_link.click()
    ]);
    let doctor_login=new DoctorLogin(newPage1);
    await doctor_login.doct_username_textfield.fill(doctor_email);
    await doctor_login.doct_password_textfield.fill(doctor_password);
    await doctor_login.login_btn.click();
    let doctor_dashboard=new DoctorDashboard(newPage1);
    await newPage1.waitForSelector("//i[@class='ti-angle-down']");
    await doctor_dashboard.slidebar.click();
    await doctor_dashboard.doctor_logout.click();
})
