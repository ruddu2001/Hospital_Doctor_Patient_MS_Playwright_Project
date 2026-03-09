class Landing{
    constructor(page){
        this.signupLink=page.getByRole("link",{name:"User Signup"});

    }
}
export default Landing