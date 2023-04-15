const { test, expect } = require('@playwright/test');

test('Submit input form with validations', async ({ page }) => {
  // Step 1: Open the page and click "Input Form Submit"
  await page.goto('https://www.lambdatest.com/selenium-playground');
  await page.click('text=Input Form Submit');

  // Step 2: Click "Submit" without filling in any information in the form
  await page.click('button:has-text("Submit")');

  // Step 3: Assert "Please fill in the fields" error message
  await expect(page.locator('text=Please fill in the fields')).toBeVisible();

  // Step 4: Fill in Name, Email, and other fields
  await page.fill('#contact_form input[name="first_name"]', 'John');
  await page.fill('#contact_form input[name="last_name"]', 'Doe');
  await page.fill('#contact_form input[name="email"]', 'johndoe@example.com');
  await page.fill('#contact_form input[name="phone"]', '1234567890');
  await page.fill('#contact_form textarea[name="address"]', '123 Main St');
  await page.fill('#contact_form input[name="city"]', 'Anytown');
  await page.selectOption('#contact_form select[name="state"]', { label: 'Texas' });
  await page.fill('#contact_form input[name="zip"]', '12345');

  // Step 5: From the Country drop-down, select "United States" using the text property
  await page.selectOption('#contact_form select[name="country"]', { label: 'United States' });

  // Step 6: Fill all fields and click "Submit"
  await page.click('button:has-text("Submit")');

  // Step 7: Once submitted, validate the success message "Thanks for contacting us, we will get back to you shortly."
  await expect(page.locator('text=Thanks for contacting us, we will get back to you shortly.')).toBeVisible();
});