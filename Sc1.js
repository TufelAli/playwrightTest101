const { test, expect } = require('@playwright/test');

test('Test Scenario 1: Enter Message and Verify', async ({ page }) => {
  // Navigate to Selenium Playground
  await page.goto('https://www.lambdatest.com/selenium-playground');

  // Click "Simple Form Demo" link
  const link = await page.waitForSelector('a[href="#simpleForm"]');
  await link.click();

  // Verify that the URL contains "simple-form-demo"
  expect(page.url()).toContain('simple-form-demo');

  // Enter message in "Enter Message" text box
  const message = 'Welcome to LambdaTest';
  const input = await page.waitForSelector('#get-input > input[type=text]');
  await input.type(message);

  // Click "Get Checked Value" button
  const button = await page.waitForSelector('#get-input > button');
  await button.click();

  // Verify that the same text message is displayed in the right-hand panel
  const output = await page.waitForSelector('#display');
  expect(await output.innerText()).toContain(message);
});
