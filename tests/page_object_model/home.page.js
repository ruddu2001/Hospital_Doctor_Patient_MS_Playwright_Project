class HomePage{
    constructor(page){
        this.createTicketOption=page.getByRole("link",{name:" Create Ticket"});
        this.viewTicketOption=page.getByRole("link",{name:" View Ticket"});
    }
}
export default HomePage