import {test,expect} from "@playwright/test";
import HomePage from "../pom_project/HomePage";
import DoctorLogin from "../pom_project/DoctorLoginPage";
import DoctorDashboard from "../pom_project/DoctorDashboard";
import doctor_login from "../../project_testdata/login_doctor.json"
import logindata from "../../project_testdata/login_data.json"
import AddPatienttoDoctor from "../pom_project/AddPatienttoDoctor";
import addpatienttodoctor from "../../project_testdata/add_patient_to_doctor.json"
import PatientInDoctorSearch from "../pom_project/PatientinDoctorSearch";
test("sce6",async({page})=>{
     let url=logindata.url;
     let doctor_username=doctor_login.doctor_username;
     let doctor_password=doctor_login.doctor_password;
     let patient_name=addpatienttodoctor.patient_name;
     let patient_cont_no=addpatienttodoctor.patient_contact_no;
     let patient_email=addpatienttodoctor.patient_email;
     let patient_address=addpatienttodoctor.patient_address;
     let patient_age=addpatienttodoctor.patient_age;
     let patient_med_his=addpatienttodoctor.patient_medical_history;

     await page.goto(url);
     let homepage=new HomePage(page);
     let [newPage]=await Promise.all([
       page.waitForEvent("popup"),
       homepage.doctor_login_link.click()]);
     let doctorlogin=new DoctorLogin(newPage);
     await doctorlogin.doct_username_textfield.fill(doctor_username);
     await doctorlogin.doct_password_textfield.fill(doctor_password);
     await doctorlogin.login_btn.click();
     let doctor_dashboard=new DoctorDashboard(newPage);
     await newPage.waitForSelector("//span[text()=' Patients ']");
     await doctor_dashboard.patients_link.click();
     await doctor_dashboard.add_patient.click();
     let add_patient_doctor=new AddPatienttoDoctor(newPage);
     await add_patient_doctor.patient_name.fill(patient_name);
     await add_patient_doctor.patient_contact_no.fill(patient_cont_no);
     await add_patient_doctor.patient_email.fill(patient_email);
     await add_patient_doctor.gender_male.click();
     await add_patient_doctor.patient_address.fill(patient_address);
     await add_patient_doctor.patient_age.fill(patient_age);
     await add_patient_doctor.medical_history.fill(patient_med_his);
     await add_patient_doctor.add_button.click();
     await doctor_dashboard.search_link.click();
     let patient_doctor=new PatientInDoctorSearch(newPage);
     await patient_doctor.search.fill(patient_name);
     await patient_doctor.search_button.click();
     await newPage.screenshot({path:"screenshot_project/patient_in_doctor_add.jpeg"});
     await newPage.waitForSelector("//i[@class='ti-angle-down']");
     await doctor_dashboard.slidebar.click();
     await doctor_dashboard.doctor_logout.click();
})