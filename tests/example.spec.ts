import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://demoqa.com/automation-practice-form');


  await page.getByRole('textbox', { name: 'First Name' }).click();
  await page.getByRole('textbox', { name: 'First Name' }).fill('akhila');
  await page.getByRole('textbox', { name: 'Last Name' }).click();
  await page.getByRole('textbox', { name: 'Last Name' }).fill('gandikota');
  await page.getByRole('textbox', { name: 'name@example.com' }).click();
  await page.getByRole('textbox', { name: 'name@example.com' }).fill('akhigandikota@gmail.com');
  await page.getByRole('radio', { name: 'Female' }).check();
  await page.getByRole('textbox', { name: 'Mobile Number' }).click();
  await page.getByRole('textbox', { name: 'Mobile Number' }).fill('9876498523');
  await page.locator('.subjects-auto-complete__input-container').click();
  await page.locator('#subjectsInput').fill('Hindi');
  await page.getByRole('option', { name: 'Hindi' }).click();
  await page.getByRole('checkbox', { name: 'Music' }).check();
  await page.getByRole('checkbox', { name: 'Reading' }).check();
  await page.getByRole('textbox', { name: 'Current Address' }).click();
  await page.getByRole('textbox', { name: 'Current Address' }).fill('12-6,jkk,leeds');
  await page.locator('.css-hlgwow > .css-19bb58m').click();
  await page.getByRole('option', { name: 'NCR' }).click();
  await page.locator('.css-13cymwt-control > .css-hlgwow > .css-19bb58m').click();
  await page.getByRole('option', { name: 'Delhi' }).click();
 await page.locator('#uploadPicture').setInputFiles('test-data/sample.png');
  await page.getByRole('button', { name: 'Submit' }).click();
});