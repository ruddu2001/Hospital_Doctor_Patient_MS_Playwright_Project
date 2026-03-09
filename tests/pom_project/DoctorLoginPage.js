class DoctorLogin{
    constructor(page){
        this.doct_username_textfield=page.getByPlaceholder("Username");
        this.doct_password_textfield=page.getByPlaceholder("Password");
        this.forgot_pass_link=page.getByRole("link",{name:"Forgot Password ?"});
        this.login_btn=page.getByRole("button",{name:"Login"});
    }
}
export default DoctorLogin