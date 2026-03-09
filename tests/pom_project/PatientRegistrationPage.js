class PatientRegistration{
    constructor(page){
        this.full_name=page.locator("//input[@name='full_name']");
        this.address=page.getByPlaceholder("Address");
        this.city=page.getByPlaceholder("City");
        this.gender_female=page.locator("//label[@for='rg-female']");
        //this.gender_male=page.getByText("Male");
        this.gender_male=page.locator("//label[@for='rg-male']");
        this.email=page.getByPlaceholder("Email");
        this.password=page.locator("#password");
        this.conf_password=page.locator("#password_again");
        this.i_agree_checkbox=page.getByLabel("I agree");
        this.already_acc_link=page.getByRole("link",{name:"Log-in"});
        this.submit_btn=page.locator("#submit");
    }
}
export default PatientRegistration