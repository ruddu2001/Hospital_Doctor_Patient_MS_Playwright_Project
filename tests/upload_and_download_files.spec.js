import {test} from "@playwright/test"
import path from "path";
import fs from "fs";
test("upload files",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    
    /*console.log(__dirname);
    await page.locator("#singleFileInput").setInputFiles(path.join(__dirname,"../uploadfiles/data.xlsx"))
    //await page.locator("#singleFileInput").setInputFiles("D:/playwright/uploadfiles/resume.txt");
    await page.getByRole("button",{name:"Upload Single File"}).click();
    await page.waitForTimeout(2000);
    //await page.locator("#multipleFilesInput").setInputFiles(["D:/playwright/uploadfiles/data.xlsx","D:/playwright/uploadfiles/resume.txt"]);
    await page.locator("#multipleFilesInput").setInputFiles([path.join(__dirname,"../uploadfiles/data.xlsx"),path.join(__dirname,"../uploadfiles/resume.txt")]);
    await page.getByRole("button",{name:"Upload Multiple Files"}).click();
    await page.waitForTimeout(2000);*/

    //upload files from the system
    await page.locator("#singleFileInput").setInputFiles("C:/Users/dell/OneDrive/Desktop/Rudransh123.txt");
    //await page.locator("#singleFileInput").setInputFiles([]);
    await page.getByRole("button",{name:"Upload Single File"}).click();
    await page.waitForTimeout(2000);
    await page.locator("#multipleFilesInput").setInputFiles(["C:/Users/dell/OneDrive/Desktop/Organization_Contacts.xlsx","C:/Users/dell/OneDrive/Desktop/Rudransh123.txt"]);
    await page.locator("#multipleFilesInput").setInputFiles([]);
    //await page.getByRole("button",{name:"Upload Multiple Files"}).click();
    await page.waitForTimeout(2000);
})

test.only("download files",async({page})=>{
    await page.goto("https://demoapps.qspiders.com/ui/download?sublist=0");
    await page.getByPlaceholder("Enter text here").fill("Hello! I am Rudransh.");
    await page.locator("#fileName").fill("newfile.txt");
    let [download_file]=await Promise.all([
    page.waitForEvent("download"),
    page.getByRole("button",{name:"Download"}).click()])
    //let downloadfolder="D:/playwright/downloadfiles"
    let downloadfolder="C:/Users/dell/OneDrive/Desktop/downloadfiles";
    let filename=download_file.suggestedFilename();
    let fullpath=path.join(downloadfolder,filename);
    //await download_file.saveAs(path.join(downloadfolder,filename));
    //await download_file.saveAs(path.join(__dirname,"../downloadfiles",filename));
    await download_file.saveAs(path.join(downloadfolder,filename));
    //console.log(await download_file.path());
    await page.waitForTimeout(2000);

    //verify if saved
    if(fs.existsSync(fullpath)){
        console.log(`file exists : ${fullpath}`);
    }
    else{
        console.log(`no such file exists`);
    }
})