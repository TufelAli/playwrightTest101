const { test, expect } = require('@playwright/test');

test('Drag and drop slider test', async ({ page }) => {
  // Step 1: Navigate to Selenium Playground page
  await page.goto('https://www.lambdatest.com/selenium-playground');

  // Step 2: Click on "Drag & Drop Sliders" link
  const sliderLink = await page.waitForSelector('#content a[href="#demo"]');
  await sliderLink.click();

  // Step 3: Verify that URL contains "drag-drop-range-sliders"
  await expect(page.url()).toContain('drag-drop-range-sliders');

  // Step 4: Define string variable for message
  const message = 'Welcome to LambdaTest';

  // Step 5: Enter message in "Enter Message" textbox
  const messageInput = await page.waitForSelector('#slider1 input[type="text"]');
  await messageInput.fill(message);

  // Step 6: Drag slider to make it 95
  const sliderHandle = await page.waitForSelector('#slider1 .ui-slider-handle');
  await sliderHandle.drag({ x: 100, y: 0 });

  // Step 7: Verify that range value shows 95
  const rangeValue = await page.waitForSelector('#slider1 .range');
  await expect(rangeValue).toHaveText('95');

  // Step 8: Click "Get Checked Value" button
  const getCheckedButton = await page.waitForSelector('#slider1 button');
  await getCheckedButton.click();

  // Step 9: Verify that message is displayed in right-hand panel
  const messageLabel = await page.waitForSelector('#slider1 #slider-range-max + p');
  await expect(messageLabel).toHaveText(`Your Message: ${message}`);
});