class ContactUsPage{
    constructor(page){
        this.full_name=page.locator("//input[@name='fullname']");
        this.email=page.locator("//input[@name='emailid']");
        this.mobile_no=page.locator("//input[@name='mobileno']");
        this.message=page.locator("//textarea[@name='description']");
        this.submit_btn=page.locator("//button[@name='submit']");
    }
}
export default ContactUsPage