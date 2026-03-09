import {test,expect} from "@playwright/test"
import HomePage from "../pom_project/HomePage";
import AdminLogin from "../pom_project/AdminLoginPage";
import AdminHome from "../pom_project/AdminHomePage";
import AddDoctor from "../pom_project/AddDoctorPage";
import PatientLogin from "../pom_project/PatientLoginPage";
import PatientHome from "../pom_project/UserDashboard";
import logindata from "../../project_testdata/login_data.json";
import loginuser from "../../project_testdata/login_user.json";
import admin_login from "../../project_testdata/admin_data.json";
import new_doctor_data from "../../project_testdata/new_doc_data_reg1.json";
import patient_book_app from "../../project_testdata/patient_book_appointment.json";
import BookAppointment from "../pom_project/BookAppointmentPage";

test("sce9",async({page})=>{
   let url=logindata.url;
   let admin_username=admin_login.admin_username;
   let admin_password=admin_login.admin_password;
   let doctor_name=new_doctor_data.doctor_name;
   let doctor_clinic_address=new_doctor_data.doctor_clinic_address;
   let doctor_consultancy_fees=new_doctor_data.doctor_consultancy_fees;
   let doctor_contact_no=new_doctor_data.doctor_contact_no;
   let doctor_email=new_doctor_data.doctor_email;
   let doctor_password=new_doctor_data.doctor_password;
   let doctor_conf_password=new_doctor_data.doctor_conf_password;
   let patient_username=loginuser.username;
   let patient_password=loginuser.password;
   let patient_app_date=patient_book_app.appointment_date;
   let patient_app_time=patient_book_app.appointment_time;
   
   await page.goto(url);
   let homepage=new HomePage(page);
   let [newPage]=await Promise.all([
       page.waitForEvent("popup"),
       homepage.admin_login_link.click()
   ]);
   let adminlogin=new AdminLogin(newPage);
   await adminlogin.adm_username_textfield.fill(admin_username);
   await adminlogin.adm_password_textfield.fill(admin_password);
   await adminlogin.login_btn.click();
   let admin_home=new AdminHome(newPage);
   await newPage.waitForSelector("//span[text()=' Doctors ']");
   await admin_home.doctors_link.click();
   await admin_home.add_doctor.click();
   let add_doctor=new AddDoctor(newPage);
   await add_doctor.doctor_specialization.selectOption("ENT");
   await add_doctor.doctor_name.fill(doctor_name);
   await add_doctor.doctor_clinic_address.fill(doctor_clinic_address);
   await add_doctor.doctor_consultancy_fees.fill(doctor_consultancy_fees);
   await add_doctor.doctor_contact_no.fill(doctor_contact_no);
   await add_doctor.doctor_email.fill(doctor_email);
   await add_doctor.doctor_password.fill(doctor_password);
   await add_doctor.doctor_conf_password.fill(doctor_conf_password);
   //await add_doctor.submit_btn.click();
   await newPage.waitForSelector("//span[@class='username']");
   await admin_home.admin_tab.click();
   await admin_home.logout.click();
   let [newPage1]=await Promise.all([
       page.waitForEvent("popup"),
       homepage.patient_login_link.click()
   ]);
   let patientlogin=new PatientLogin(newPage1);
   await patientlogin.username_textfield.fill(patient_username);
   await patientlogin.password_textfield.fill(patient_password);
   await patientlogin.login_btn.click();
   let patienthome=new PatientHome(newPage1);
   await patienthome.book_appoint_link.click();
   let bookappointment=new BookAppointment(newPage1);
   await bookappointment.doctor_specia_drop.selectOption("ENT");
   await bookappointment.select_doctor_drop.selectOption("Mitansh Thakur");
   await bookappointment.date_drop.fill(patient_app_date);
   await bookappointment.time_drop.fill(patient_app_time);
   await bookappointment.submit_btn.click();
   await newPage1.waitForSelector("//span[@class='username']");
   await patienthome.user_profile.click();
   await patienthome.logout_link.click();
})
