import {test,expect} from "@playwright/test"

//toBeAttached() method
/*test("using_toBeAttached",async({page})=>{
    await page.goto("https://demoapps.qspiders.com/ui?scenario=1");
    await expect(page.locator("#name")).toBeAttached();
})*/

//toBeChecked() method 
/*test("using_toBeChecked",async({page})=>{
    await page.goto("https://demoapps.qspiders.com/ui/checkbox?sublist=0");
    //await page.locator("//input[@id='domain_a']").click();
    //await expect(page.locator("//input[@id='domain_a']")).toBeChecked();
    await expect(page.locator("//input[@id='domain_a']")).not.toBeChecked();
})*/

//toBeDisabled() method
/*test("using_toBeDisabled",async({page})=>{
    await page.goto("https://demoapps.qspiders.com/ui");
    //await expect(page.locator("//input[@id='domain_a']")).toBeDisabled();
    //await expect(page.locator("//input[@id='domain_a']")).not.toBeDisabled();
})*/

//toBeEditable() method
/*test("using_toBeEditable",async({page})=>{
    await page.goto("https://demoapps.qspiders.com/ui");
    //await expect(page.locator("#name")).toBeEditable();
    await expect(page.locator("#name")).not.toBeEditable();
})*/

//toBeEmpty() method
/*test("using_toBeEmpty",async({page})=>{
    await page.goto("https://demoapps.qspiders.com/ui");
    await page.locator("#name").fill("adbc");
    await expect(page.locator("#name")).toBeEmpty();
})*/

//toBeEnabled() method
/*test("using_toBeEnabled",async({page})=>{
    await page.goto("https://demoapps.qspiders.com/ui");
    await expect(page.locator("#name")).toBeEnabled();
})*/

//toBeFocussed() method
/*test("using_toBeFocussed",async({page})=>{
    await page.goto("https://demoapps.qspiders.com/ui");
    await page.locator("#name").click();
    await expect(page.locator("#name")).toBeFocused();
})*/

//toBeInViewport() method
/*test("using_toBeInViewport",async({page})=>{
    await page.goto("https://demoapps.qspiders.com/ui");
    await expect(page.locator("#name")).toBeInViewport();
})*/

//toBeVisible() method
/*test("using_toBeVisible",async({page})=>{
    await page.goto("https://demoapps.qspiders.com/ui");
    await expect(page.locator("#name")).toBeVisible();
})*/

//toContainText() method
/*test("using_toContainText",async({page})=>{
    await page.goto("https://demoapps.qspiders.com/ui");
    await expect(page.getByText("Name")).toContainText("Name")
})*/

//toContainClass() method
/*test("using_toContainClass",async({page})=>{
    await page.goto("https://demoapps.qspiders.com/ui");
    await expect(page.locator("#name")).toContainClass("bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:placeholder-gray-400 focus:bg-[rgb(240,240,240)] disabled:opacity-50 disabled:cursor-not-allowed");
})*/

//toHaveAccessibleName() method
/*test("using_toContainClass",async({page})=>{
    await page.goto("https://demoapps.qspiders.com/ui");
    await expect(page.locator("#name")).toHaveAccessibleName("Name");
})*/

//toHaveAttribute() method
/*test("using_toContainClass",async({page})=>{
    await page.goto("https://demoapps.qspiders.com/ui");
    await expect(page.locator("#name")).toHaveAttribute("type","text");
})*/

//toHaveId() method
/*test("using_toContainClass",async({page})=>{
    await page.goto("https://demoapps.qspiders.com/ui");
    await expect(page.locator("#name")).toHaveId("name");
})*/

//toHaveRole() method
/*test("using_toHaveRole",async({page})=>{
    await page.goto("https://demoapps.qspiders.com/ui/button?sublist=0");
    await expect(page.locator("#btn")).toHaveRole("button");
})*/

//toHaveScreenshot() method
/*test("using_toHaveScreenshot",async({page})=>{
    await page.goto("https://demoapps.qspiders.com/ui/button?sublist=0");
    await expect(page.locator("#btn")).toHaveScreenshot();
})*/

//toHaveText() method
/*test("using_toHaveText",async({page})=>{
    await page.goto("https://demoapps.qspiders.com/ui?scenario=1");
    await expect(page.locator("//label[@for='email']")).toHaveText("Email Id");
})*/

//toHaveValue() method
/*test("using_toHaveValue",async({page})=>{
    await page.goto("https://demoapps.qspiders.com/ui?scenario=1");
    await page.locator("#name").fill("Rudransh Rathore");
    await expect(page.locator("#name")).toHaveValue("Rudransh Rathore");
})*/

//toHaveValues() method
/*test("using_toHaveValues",async({page})=>{
    await page.goto("https://demoapps.qspiders.com/ui/dropdown");
    await page.locator("#select3").selectOption("")
})*/

//toHaveTitle() method
/*test("using_toHaveTitle",async({page})=>{
    await page.goto("https://demoapps.qspiders.com/");
    await expect(page).toHaveTitle("DemoApps | Qspiders");
})*/

//toHaveURL() method
/*test("using_toHaveURL",async({page})=>{
    await page.goto("https://demoapps.qspiders.com/");
    await expect(page).toHaveURL("https://demoapps.qspiders.com/");
})*/

//Non-Retrying Assertions

//toBeCloseTo() method
/*test("using toBeCloseTo method",async({page})=>{
    //console.log(0.1+0.2);
    await expect(0.1+0.2).toBeCloseTo(0.300000000,3);
})*/

//toBeDefined() method
/*test("using toBeDefined method",async({page})=>{
    //let name="Rudransh";
    //await expect(name).toBeDefined();
    //let name1="";
    //await expect(name1).toBeDefined();
    let a=0;
    let b=null;
    let c=false
    await expect(a).toBeDefined();
    await expect(b).toBeDefined();
    await expect(c).toBeDefined();
})*/

//toBeFalsy() method
/*test("using toBeFalsy method",async({page})=>{
    //await expect(0).toBeFalsy();
    //await expect(-0).toBeFalsy();
    //await expect(false).toBeFalsy();
    //await expect(null).toBeFalsy();
    //await expect(undefined).toBeFalsy();
    //await expect(NaN).toBeFalsy();
    await expect("hello").toBeFalsy();
    await expect(1).toBeFalsy();
    await expect({}).toBeFalsy();
    await expect([]).toBeFalsy();
})*/

//toBeGreaterThan() and toBeGreaterThanOrEqual() method
/*test("using toBeGreaterThan method",async({page})=>{
    //await expect(10).toBeGreaterThan(5);
    //await expect(5).toBeGreaterThan(10);
    await expect(5).toBeGreaterThanOrEqual(5);     
})*/

//toBeInstanceOf() method
/*class Animal{}
class Dog extends Animal{}
test("using toBeInstanceOf method",async({page})=>{
    //let dog=new Animal();
    //await expect(dog).toBeInstanceOf(Animal);
    let dog=new Dog();
    await expect(dog).toBeInstanceOf(Dog);
    await expect(dog).toBeInstanceOf(Animal);
})*/

//toBeLessThan() and toBeLessThanOrEqual() method
/*test("using toBeLessThan method",async({page})=>{
    await expect(4).toBeLessThan(5);
    await expect(5).toBeLessThan(4);
    await expect(5).toBeLessThanOrEqual(5);     
})*/

//toBeNaN() method
/*test("using toBeNaN method",async({page})=>{
    let a=0/0;
    await expect(a).toBeNaN();
})*/

//toBeNull() method
/*test("using toBeNull method",async({page})=>{
    let a=null;
    await expect(a).toBeNull();
})*/

//toBeTruthy() method
/*test("using toBeNull method",async({page})=>{
    let a=null;
    await expect(a).toBeNull();
})*/

//toContain() method
/*test("using toContain method",async({page})=>{
    let fruits=["mango","banana","orange"];
    expect(fruits).toContain("banana");
    //expect(fruits).toContain("kiwi");
    //expect(["car","bike"]).toContain("truck");
    expect([{id:1}]).toContain({id:1});//fails
    expect("Hello").toContain("hello");//fails (case-sensitive)
})*/

//toContainEqual() method
/*test("using toContainEqual method",async({page})=>{
    const users=[{id:1,name:"Sarthak"},{id:2,name:"Vaibhav"}];
    await expect(users).toContainEqual({id:1,name:"Sarthak"});
})*/

//to

