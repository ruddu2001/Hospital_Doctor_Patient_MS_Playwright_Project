import {test,expect} from "@playwright/test"
test("using_toBe",async({page})=>{
    const sum=5+5;
    await expect(sum).toBe(10);
})