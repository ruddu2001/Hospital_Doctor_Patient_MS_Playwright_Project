/*import {test} from "@playwright/test"
test("using_getBy",async({page})=>{
    await page.goto("https://demo.nopcommerce.com/login");
    //await page.getByLabel("Email:").fill("abcd@gmail.com");
    //await page.getByLabel("Email",{exact:true}).fill("abcd@gmail.com");
    await page.getByLabel("Email",{exact:false}).fill("abcd@gmail.com");
})*/

/*import {test} from "@playwright/test"
test("using_getBy",async({page})=>{
    await page.goto("https://demo.nopcommerce.com/login");
    await page.getByPlaceholder("Search store").fill("Shoes");
    await page.getByPlaceholder("Search ",{exact:false}).fill("Shoes");
})*/

/*import {test} from "@playwright/test"
test("using_getBy",async({page})=>{
    await page.goto("https://demo.nopcommerce.com/login");
    await page.getByText("Electronics").click();
})*/

/*import {test} from "@playwright/test"
test("using_getByAltText",async({page})=>{
    await page.goto("https://demo.nopcommerce.com/login");
    //await page.getByAltText("nopCommerce demo store").click();
    await page.getByAltText("nopCommerce de",{exact:false}).click();
})*/

/*import {test} from "@playwright/test"
test("using getByTitle",async({page})=>{
    await page.goto("https://demo.nopcommerce.com/login");
    await page.getByText("Electronics").click();
    await page.getByTitle("Show products in category",{exact:false}).first().click();
})*/

import {test} from "@playwright/test"
test("using_getByRole",async({page})=>{
    await page.goto("https://demo.nopcommerce.com/login");
    await page.getByText("Electronics").click();
    await page.getByRole("link",{name:" Camera & photo "}).first().click();
})

 
