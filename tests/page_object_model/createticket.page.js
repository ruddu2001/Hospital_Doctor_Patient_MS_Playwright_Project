class CreateTicket{
    constructor(page){
        this.subjectTF=page.locator("#subject");
        this.tasktypeDD=page.locator("//select[@name='tasktype']");
        this.priorityDD=page.locator("//select[@name='priority']");
        this.descriptionTA=page.locator("//textarea[@name='description']");
        this.sendBTN=page.locator("//input[@value='Send']");
    }
}
export default CreateTicket