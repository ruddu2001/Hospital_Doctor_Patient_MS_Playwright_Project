class SignIn{
    constructor(page){
         this.emailTF=page.locator("#txtusername");
         this.passwordTF=page.locator("#txtpassword");
         this.loginBTN=page.getByRole("button",{name:"Login"});
    }
}
export default SignIn