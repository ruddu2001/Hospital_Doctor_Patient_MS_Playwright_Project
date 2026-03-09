class AddPatienttoDoctor{
    constructor(page){
        this.patient_name=page.locator("//input[@name='patname']");
        this.patient_contact_no=page.locator("//input[@name='patcontact']");
        this.patient_email=page.locator("//input[@name='patemail']");
        this.gender_female=page.locator("//label[@for='rg-female']");
        this.gender_male=page.locator("//label[@for='rg-male']");
        this.patient_address=page.locator("//textarea[@name='pataddress']");
        this.patient_age=page.locator("//input[@name='patage']");
        this.medical_history=page.locator("//textarea[@name='medhis']");
        this.add_button=page.locator("//button[@name='submit']");
    }
}
export default AddPatienttoDoctor