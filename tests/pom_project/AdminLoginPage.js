class AdminLogin{
    constructor(page){
        this.adm_username_textfield=page.locator("//input[@name='username']");
        this.adm_password_textfield=page.locator("//input[@name='password']");
        this.login_btn=page.getByRole("button",{name:"Login"});
    }
}
export default AdminLogin