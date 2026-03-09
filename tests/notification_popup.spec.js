import {test} from "@playwright/test"
test("notifications",async({browser})=>{
    //let context=await browser.newContext();
    let context=await browser.newContext({permissions:["notifications"]});
    //let context=await browser.newContext({permissions:["notifications","microphone","geolocation","camera"]})
    let page=await context.newPage();
    await page.goto("https://demoapps.qspiders.com/ui/browserNot?sublist=0");
    await page.locator("#browNotButton").click();
    //Validation of permission status
    let result1=await page.evaluate(()=>{return Notification.requestPermission()});
    console.log(`permissions:${result1}`);
    //revoke all permissions
    await context.clearPermissions();
    let result2=await page.evaluate(()=>{return Notification.requestPermission()});
    console.log(`permissions:${result2}`);
})