class BetweenDateReports{
    constructor(page){
        this.from_date=page.locator("//input[@id='fromdate']");
        this.to_date=page.locator("//input[@name='todate']");
        this.submit_btn=page.locator("//button[@name='submit']");
    }
}
export default BetweenDateReports