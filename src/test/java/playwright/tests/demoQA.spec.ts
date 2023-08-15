import { test, expect } from '@playwright/test';
import fs from "fs";

//get JSON file and read it
const filePath = 'C:/Users/mstitt/IdeaProjects/Karate_testing_framework/src/test/java/playwright/tests/DemoQA/DemoQA_HomePage/HomePage_JSon/DemoQA_HomePage_Object.json';

let fileContents = fs.readFileSync(filePath, 'utf8');

 const jsonData = JSON.parse(fileContents);
 console.log(jsonData);

const persons= JSON.parse(JSON.stringify(require("C:/Users/mstitt/IdeaProjects/Karate_testing_framework/src/test/java/playwright/tests/DemoQA/DemoQA_HomePage/HomePage_JSon/DemoQA_HomePage_Object.json")))

persons.forEach((item, index) => {
  test(`Some text - Iteration: ${index+1}`, async ({ page }) => {
    await page.locator('#element').fill(persons[index].name);
    await page.locator('#element2').fill(persons[index].lastname);
    console.log(persons.demoqa_bookStore_text);
  });
})
test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects the URL to contain intro.
  await expect(page).toHaveURL(/.*intro/);
});

