class HomePage{
    constructor(page){
        this.home_link=page.locator("//a[text()='Home']");
        this.services_link=page.locator("(//a[text()='Services'])[1]");
        this.about_us_link=page.locator("//a[text()='About Us']");
        this.gallery_link=page.locator("(//a[text()='Gallery'])[1]");
        this.contact_us_link=page.locator("//a[text()='Contact Us']");
        this.login_link=page.locator("(//a[text()='Logins'])[1]");
        this.book_appoint_link=page.getByRole("link",{name:"Book an Appointment"});
        this.patient_login_link=page.locator("//h6[text()='Patient Login']/..//following-sibling::a//button[text()='Click Here']");
        this.doctor_login_link=page.locator("//h6[text()='Doctors login']/..//following-sibling::a//button[text()='Click Here']");
        this.admin_login_link=page.locator("//h6[text()='Admin Login']/..//following-sibling::a//button[text()='Click Here']");
    }
}
export default HomePage