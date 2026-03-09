import {test} from "@playwright/test"
test("dropdown handling",async({page})=>{
    //await page.goto("https://demoapps.qspiders.com/ui/dropdown?sublist=0");
    //await page.waitForTimeout(3000);

    //selectOption()
    //await page.locator("#select3").selectOption({value:"India"}); //selection by value.
    //await page.locator("#select3").selectOption({label:"India"}); //selection by label or visible text.
    //await page.locator("#select3").selectOption({index:7}); //  //selection by index.
    //await page.locator("#select3").selectOption("India");
    //await page.waitForTimeout(3000);

    //selecting multiple options
    /*await page.goto("https://demoapps.qspiders.com/ui/dropdown/multiSelect?sublist=1");
    await page.waitForTimeout(3000);
    //await page.locator("#select-multiple-native").selectOption([{value:"Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"},{value:"Mens Cotton Jacket"}]);
    await page.locator("#select-multiple-native").selectOption([{index:1},{index:3}]);
    await page.waitForTimeout(3000);
    await page.locator("//button[text()='Add']").click();
    await page.waitForTimeout(3000);*/

    //custom dropdowns
    /*await page.goto("https://www.amazon.in/");
    await page.locator("input#twotabsearchtextbox").fill("shoes for men");
    await page.keyboard.press("Enter");
    await page.locator("//label[text()='Sort by:']").click({force:true});
    await page.locator(".a-dropdown-link").first().waitFor();
    let options=await page.locator(".a-dropdown-link").all();
    for(let option of options){
        let text=await option.textContent();
        if(text.includes("Newest ")){
            await option.click();
        }
    }
    await page.waitForTimeout(3000);*/

    //xpath
    await page.goto("https://www.amazon.in/");
    await page.locator("input#twotabsearchtextbox").fill("shoes for men");
    await page.keyboard.press("Enter");
    await page.locator("#s-result-sort-select_3").click();
})

test("autosuggestions",async({page})=>{
    await page.goto("https://www.amazon.in/");
    await page.locator("input#twotabsearchtextbox").fill("shoes for men");
    await page.waitForSelector("(//div[@role='row'])[1]")
    let options=await page.locator("//div[@role='row']").all();
    for(let option of options){
        let text=await option.textContent();
        if(text.includes("  skechers sports")){
            await option.click();
            break;
        }
    }
    await page.waitForTimeout(3000);
})

test.only("autosuggestions1",async({page})=>{
    await page.goto("https://www.amazon.in/");
    await page.locator("input#twotabsearchtextbox").fill("shoes for men");
    await page.waitForSelector("(//div[@role='row'])[1]")
    await page.keyboard.press("ArrowDown");
    await page.keyboard.press("Enter");
    await page.waitForTimeout(3000);
})