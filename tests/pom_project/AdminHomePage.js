class AdminHome{
    constructor(page){
        this.dashboard_link=page.locator(" //span[text()=' Dashboard '] ");
        //this.doctors_link=page.locator("(//a[@href='javascript:void(0)'])[1]");
        this.doctors_link =page.locator("//span[text()=' Doctors ']");
        //this.doctor_specialization=page.locator(" //span[text()=' Doctor Specialization '] ");
        this.add_doctor=page.getByText(" Add Doctor",{exact:true});
        //this.manage_doctor=page.locator("//span[text()=' Manage Doctors ']");
        //this.add_doctor=page.locator("//span[text()=' Doctors ']").selectOption(" Add Doctor");
        this.users_link=page.locator(" //span[text()=' Users ']");
        this.manage_users=page.locator(" //span[text()=' Manage Users ']");
        this.patients_link=page.locator(" //span[text()=' Patients ']");
        this.manage_patients=page.locator(" //span[text()=' Manage Patients ']");
        this.appoint_history_link=page.locator(" //span[text()=' Manage Patients ']");
        this.contactus_queries_link=page.locator("//span[text()=' Conatctus Queries ']");
        this.unread_query=page.locator("//span[text()=' Unread Query ']");
        this.read_query=page.locator("//span[text()=' Read Query ']");
        this.doctor_session_logs_link=page.locator("//span[text()=' Doctor Session Logs ']");
        this.user_session_logs_link=page.locator("//span[text()=' User Session Logs ']");
        this.reports_link=page.locator("//span[text()=' Reports ']");
        this.bw_date_reports=page.locator("//span[text()='B/w dates reports ']");
        this.pages_link=page.locator("//span[text()=' Pages ']");
        this.about_us=page.locator("//span[text()='About Us ']");
        this.contact_us=page.locator("//span[text()='Cotnact Us ']");
        this.patient_search_link=page.locator("//span[text()=' Patient Search ']");
        this.admin_tab=page.locator("//span[@class='username']");
        this.change_password=page.locator("//a[contains(text(),'Change Password')]");
        this.logout=page.locator("//a[contains(text(),'Log Out')]");
    }
}
export default AdminHome