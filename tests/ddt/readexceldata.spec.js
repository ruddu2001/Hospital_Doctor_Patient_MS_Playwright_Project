import {test} from "@playwright/test"
import excel from "exceljs"
import path from "path"
test("read single data",async({page})=>{
    let book=new excel.Workbook();
    await book.xlsx.readFile(path.join(__dirname,"../../test_data/exceldata.xlsx"));
    let sheet=await book.getWorksheet("Sheet1");
    let data=await sheet.getRow(1).getCell(1).toString();
    let data2=await sheet.getRow(1).getCell(1).value;
    console.log(data);
    console.log(data2);
})
test("read multiple data",async({page})=>{
    let book=new excel.Workbook();
    await book.xlsx.readFile(path.join(__dirname,"../../test_data/exceldata.xlsx"));
    let sheet=await book.getWorksheet("Sheet2");
    for(let row=1;row<=sheet.actualRowCount;row++){
        for(let column=1;column<=sheet.actualColumnCount;column++){
            let data=sheet.getRow(row).getCell(column).toString();
            console.log(data);
        }
    }
    for(let column=1;column<=sheet.actualColumnCount;column++){
        for(let row=1;row<=sheet.actualColumnCount;row++){
            let data=sheet.getRow(row).getCell(column).toString();
            console.log(data);
        }
    }
})

test.only("actual ddt",async({page})=>{
    let book=new excel.Workbook();
    await book.xlsx.readFile(path.join(__dirname,"../../test_data/exceldata.xlsx"));
    let sheet=await book.getWorksheet("Sheet3");

    /*let url=await sheet.getRow(1).getCell(1).toString();
    let username=await sheet.getRow(1).getCell(2).toString();
    let password=await sheet.getRow(1).getCell(3).toString();*/
    let alldata=[]
    for(let r=1;r<=sheet.actualRowCount;r++){
        let row=sheet.getRow(r);
        let url=row.getCell(1).toString();
        let username=row.getCell(2).toString();
        let password=row.getCell(3).toString();
        alldata.push({url:url,username:username,password:password});
    }
    console.log(alldata);
   
    for(let d of alldata){
        await page.goto(d.url);
        await page.waitForTimeout(2000);
        let [window]=await Promise.all([
        page.waitForEvent("popup"),
        page.getByText("Small CRM").click()]);
        let page2=await window;
        await page2.locator("//a[text()='Admin']").click();
        await page2.locator("#txtusername").fill(d.username);
        await page2.locator("#txtpassword").fill(d.password);
        await page2.getByRole("button",{name:"login"}).click();
        await page2.close();
        await page.waitForTimeout(3000);
    }
    
})