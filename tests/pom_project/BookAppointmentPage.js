class BookAppointment{
    constructor(page){
        this.doctor_specia_drop=page.locator("//select[@name='Doctorspecialization']");
        this.select_doctor_drop=page.locator("//select[@id='doctor']");
        this.date_drop=page.locator("//input[@name='appdate']");
        this.time_drop=page.locator("//input[@name='apptime']");
        this.submit_btn=page.locator("//button[@name='submit']");
    }
}
export default BookAppointment