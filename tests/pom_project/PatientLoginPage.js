class PatientLogin{
    constructor(page){
        this.username_textfield=page.locator("//input[@name='username']");
        this.password_textfield=page.locator("//input[@name='password']");
        this.login_btn=page.locator("//button[@name='submit']");
        this.forgot_pass_link=page.locator("//a[contains(text(),'Forgot Password ?')]");
        this.create_acc_link=page.locator("//a[contains(text(),'Create an account')]");
    }
}
export default PatientLogin