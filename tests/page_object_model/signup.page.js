class Signup{
    constructor(page){
        this.usernameTF=page.locator("#name");
        this.emailTF=page.locator("#email");
        this.passwordTF=page.locator("#password");
        this.cpasswordTF=page.locator("#cpassword");
        this.conNumberTF=page.locator("#txtpassword");
        this.genderMRB=page.locator("//input[@value='m']");
        this.genderFRB=page.locator("//input[@value='f']");
        this.submitBTN=page.locator("//input[@value='Submit']");
    }
}
export default Signup