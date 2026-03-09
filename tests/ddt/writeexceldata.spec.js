import {test} from "@playwright/test"
import excel from "exceljs"
import path from "path"

test("write data",async({page})=>{
    let book=new excel.Workbook();
    await book.xlsx.readFile(path.join(__dirname,"../../test_data/exceldata.xlsx"));
    let sheet=book.getWorksheet("Sheet4");
    if(!sheet){
        sheet=book.addWorksheet("Sheet4");
    }
    sheet.getRow(1).getCell(1).value="Hii";
    await book.xlsx.writeFile(path.join(__dirname,"../../test_data/exceldata.xlsx"));
})

test.only("write data 2",async({page})=>{
    let book=new excel.Workbook();
    await book.xlsx.readFile(path.join(__dirname,"../../test_data/exceldata.xlsx"));
    let sheet=book.getWorksheet("Sheet5");
    if(!sheet){
        sheet=book.addWorksheet("Sheet5");
    }
    await page.goto("https://www.amazon.in/");
    await page.locator("input#twotabsearchtextbox").fill("shoes");
    await page.locator(".s-suggestion-container").first().waitFor();
    let allopt=await page.locator(".s-suggestion-container").allTextContents();
    
    for(let text of allopt){
        let index=allopt.indexOf(text);
        sheet.getRow(1).getCell(index+1).value=text; //for single row multiple column data entry
        //sheet.getRow(index+1).getCell(1).value=text; //for multiple row single column data entry
    }
    await book.xlsx.writeFile(path.join(__dirname,"../../test_data/exceldata.xlsx"));
})