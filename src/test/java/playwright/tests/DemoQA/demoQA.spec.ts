import {chromium, test, expect } from '@playwright/test';
import {HomePage} from "../DemoQA/DemoQA_objects/demoqa_homepage_object"
import {BookStorePage} from "../DemoQA/DemoQA_objects/demoqa_bookstorepage_object"
import fs from "fs";
 
const playwright = require('playwright'); 
// Random number generator
function generateRandomNumber(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min; 

}
console.log("Random Number: " + generateRandomNumber(1,100)); 


test('has title', async ({}) => {
  let context; 
  let browser; 
  let browserType; 

  for (const browserType of  ['chomium']){
    const browser = await chromium.launch();

  try{
  context = await browser.newContext(); 
  const page = await context.newPage();
  const homePage = new HomePage(page);  
  
  await homePage.navigate(); 
  await page.waitForLoadState('networkidle'); 
  await homePage.pageTitle(); 

  console.log("The Current page is: " + await homePage.pageTitle()); 
  console.log("Bookstore Page is loaded"); 

  // Attempt to navigate to the Bookstore Page
  expect (homePage.demoqa_bookStore_text);  
  await homePage.demoqa_bookStore_click.click(); 
  await homePage.pageTitle(); 

}catch(error){
  console.error('Error when trying to run test on ' + browserType + 'Error: ' + error);
}finally {
  await browser.close(); 
}
  }

  await test.step('Step - Validate that Bookstore Page appears', async () => {

  const page = await context.newPage();
  const bookStorePage = new BookStorePage(page);  
  await expect(bookStorePage).toHaveURL(bookStorePage.demoqa_header_href(), {exact: true}).toBeVisible();

    console.log("Bookstore Page is loaded"); 

    try{
      // Validate headerText appears
      const headerText = expect(bookStorePage.pageTitle()); 
    }catch(error){
      console.error('Error when trying to run test on ' + browserType + 'Error: ' + error);
    }finally {
      await browser.close(); 
    }
  })
  
});

