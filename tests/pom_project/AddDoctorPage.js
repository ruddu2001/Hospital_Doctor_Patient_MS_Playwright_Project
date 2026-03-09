class AddDoctorPage{
    constructor(page){
        this.doctor_specialization=page.locator("//select[@name='Doctorspecialization']");
        this.doctor_name=page.locator("//input[@name='docname']");
        this.doctor_clinic_address=page.locator("//textarea[@name='clinicaddress']");
        this.doctor_consultancy_fees=page.locator("//input[@name='docfees']");
        this.doctor_contact_no=page.locator("//input[@name='doccontact']");
        this.doctor_email=page.locator("//input[@name='docemail']");
        this.doctor_password=page.locator("//input[@name='npass']");
        this.doctor_conf_password=page.locator("//input[@name='cfpass']");
        this.submit_btn=page.locator("//button[@name='submit']");
    }
}
export default AddDoctorPage