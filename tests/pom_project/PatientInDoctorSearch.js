class PatientInDoctorSearch{
    constructor(page){
        this.search=page.locator("//input[@name='searchdata']");
        this.search_button=page.locator("//button[@name='search']");
    }
}
export default PatientInDoctorSearch