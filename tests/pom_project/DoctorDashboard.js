class DoctorDashboard{
    constructor(page){
        this.dashboard_link=page.locator("//span[text()=' Dashboard ']");
        this.appointment_history_link=page.locator("//span[text()=' Appointment History ']");
        this.patients_link=page.locator("//span[text()=' Patients ']");
        this.add_patient=page.locator("//span[text()=' Add Patient']");
        this.manage_patient=page.locator("//span[text()=' Manage Patient ']");
        this.search_link=page.locator("//span[contains(text(),'Search')]");
        this.slidebar=page.locator("//i[@class='ti-angle-down']");
        this.doctor_profile=page.locator("//a[contains(text(),'My Profile')]");
        this.doctor_change_password=page.locator("//a[contains(text(),'Change Password')]");
        this.doctor_logout=page.locator("//a[contains(text(),'Log Out')]");
    }
}
export default DoctorDashboard