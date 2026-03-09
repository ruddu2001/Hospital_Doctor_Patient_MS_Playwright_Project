import {test} from "@playwright/test"
import fs from "fs"
let datafile=fs.readFileSync("D:/playwright/test_data/singlesetdata.json");
let data=JSON.parse(datafile);
test("get data from json",async({page})=>{
     //console.log(data.greet);
     data.forEach(d=>{
        console.log(d.greet);
     })       
})