class UserDashboard{
    constructor(page){
        this.dashboard_link=page.locator("//span[text()=' Dashboard ']");
        this.book_appoint_link=page.locator("//span[text()=' Book Appointment ']");
        this.appoint_history_link=page.locator("//span[text()=' Appointment History ']");
        this.medical_history_link=page.locator("//span[text()=' Medical History ']");
        this.my_profile_link=page.locator("//a[contains(text(),'Update Profile')]");
        this.my_appoint_link=page.locator("//a[contains(text(),'View Appointment History')]");
        this.book_appoint_link2=page.locator("//a[contains(text(),'Book Appointment')]");
        this.user_profile=page.locator("//span[@class='username']");
        this.my_profile_link=page.locator("//a[contains(text(),'My Profile')]");
        this.change_password_link=page.locator("//a[contains(text(),'Change Password')]");
        this.logout_link=page.locator("//a[contains(text(),'Log Out')]");
    }
}
export default UserDashboard