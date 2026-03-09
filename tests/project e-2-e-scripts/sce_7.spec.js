import {test,expect} from "@playwright/test"
import HomePage from "../pom_project/HomePage";
import AdminLogin from "../pom_project/AdminLoginPage";
import AdminHome from "../pom_project/AdminHomePage";
import BetweenDateReports from "../pom_project/BetweenDateReports";
import adminlogin from "../../project_testdata/admin_data.json";
import logindata from "../../project_testdata/login_data.json";
import reportsdate from "../../project_testdata/reports_date.json";
test("sce7",async({page})=>{
    let url=logindata.url;
    let admin_username=adminlogin.admin_username;
    let admin_password=adminlogin.admin_password;
    let report_from=reportsdate.from_date;
    let report_to=reportsdate.to_date;

    await page.goto(url);
    let homepage=new HomePage(page);
    let [newPage]=await Promise.all([
        page.waitForEvent("popup"),
        homepage.admin_login_link.click()
    ])
    let admin_login=new AdminLogin(newPage);
    await admin_login.adm_username_textfield.fill(admin_username);
    await admin_login.adm_password_textfield.fill(admin_password);
    await admin_login.login_btn.click();
    let admin_home=new AdminHome(newPage);
    await newPage.waitForSelector("//span[text()=' Reports ']");
    await admin_home.reports_link.click();
    await admin_home.bw_date_reports.click();
    let bw_date_reports=new BetweenDateReports(newPage);
    await bw_date_reports.from_date.click();
    //await bw_date_reports.from_date.fill(report_from);
    await newPage.keyboard.type(report_from);
    await bw_date_reports.to_date.click();
    await newPage.keyboard.type(report_to)
    await bw_date_reports.submit_btn.click();
    await newPage.screenshot({path:"screenshot_project/patient_details.jpeg"});
    await newPage.waitForSelector("//span[@class='username']");
    await admin_home.admin_tab.click();
    await admin_home.logout.click();
})