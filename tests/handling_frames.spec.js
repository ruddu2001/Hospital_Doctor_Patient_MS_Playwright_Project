import {test,expect} from "@playwright/test"
test("handling frames",async({page})=>{
    await page.goto("https://ui.vision/demo/webtest/frames/");
    /*let frames=await page.frames();
    console.log(frames.length);
    for(let frame of frames){
        console.log(await frame.title());
    }

    //Approach1 frame()-
    let frame1=await page.frame({url:"https://ui.vision/demo/webtest/frames/frame_1.html"});
    await frame1.locator("//input[@name='mytext1']").fill("aaaaa");
    await expect(await frame1.locator("//input[@name='mytext1']").inputValue()).toContain("aaa");*/

    //Approach2 frameLocator()-
   /* let elframe2=await page.frameLocator("//frame[@src='frame_2.html']").locator("//input[@name='mytext2']");
    await elframe2.fill("Rudransh");
    await page.waitForTimeout(3000);*/

    //Approach3 contentFrame()-
    /*let frame2=await page.locator("//frame[@src='frame_2.html']").contentFrame();
    frame2.locator("//input[@name='mytext2']").fill("Rudransh");
    await page.waitForTimeout(3000);*/

    //handling iframe inside a frame-
    let frame3=await page.frameLocator("//frame[@src='frame_3.html']");
    let radiobtn=await frame3.frameLocator("//iframe").locator("#i6");
    radiobtn.click();
    await page.waitForTimeout(3000);
})