import {chromium, test, expect } from '@playwright/test';
import {HomePage} from "../DemoQA/DemoQA_objects/demoqa_homepage_object"
import {BookstorePage} from "../DemoQA/DemoQA_objects/demoqa_bookstorepage_object"
import fs from "fs";
 
const playwright = require('playwright'); 
// Random number generator
function generateRandomNumber(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min; 

}
console.log("Random Number: " + generateRandomNumber(1,100)); 
const readBookTitle = 'Git Pocket Guide'; 


test('has title', async ({}) => {
  const browserType =  ['chomium'];
  const browser = await chromium.launch();
  const context = await browser.newContext(); 
  const page = await context.newPage();
  const homePage = new HomePage(page);  
  
  try{

  await homePage.navigate(); 
  const pageTitle = await page.title();

  console.log("The Current page is: " + pageTitle); 
  console.log("Home Page is loaded");  

      // Attempt to navigate to the Bookstore Page
      await homePage.demoqa_bookStore_button.click();
      homePage.page.close; 

  await test.step('Step - Validate that Bookstore Page appears', async () => {
  
    //const bookStorePage_page = await context.newPage(); 
    const bookStorePage = new BookstorePage(page, readBookTitle);  
 

  await expect(page).toHaveURL(bookStorePage.demoqa_header_href);

  try{ // Search for bookTitle
  await bookStorePage.demoqa_bookStore_search.fill(readBookTitle);
  

  const pageTitle_book = await page.title();
  console.log("The Current Bookstore page is: " + pageTitle_book); 
  console.log("Bookstore Page is loaded"); 

 await expect (bookStorePage.demoqa_bookStore_book_title).toBeVisible();
 await expect (bookStorePage.demoqa_bookStore_book_title.click)

  await page.waitForTimeout(10000);  

  }catch (error){
    console.error("Book was not found: ", error); 
    expect(error).toBeUndefined(); 
  }
  });

}catch(error){
  console.error('Error when trying to run test on ' + browserType + 'Error: ' + error);
}finally {
  await browser.close(); 
}
  });


