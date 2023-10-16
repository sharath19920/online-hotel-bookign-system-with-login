const puppeteer = require('puppeteer');

(async () => {
  // Launch a headless browser
  const browser = await puppeteer.launch();

  // Create a new page
  const page = await browser.newPage();

  // Test the login page
  await page.goto('http://localhost/WMAD_final/login.php'); // Replace with your login page URL
  await page.waitForSelector('#logemail');
  await page.type('#logemail', 'vtu19909@veltech.edu.in'); // Replace with your login email field selector
  await page.type('#logpass', 'Sathvik@2003'); // Replace with your login password field selector
  await page.click('login'); // Replace with your login submit button selector

  // Wait for some time to see the result (you can replace this with proper assertions)
  await page.waitForTimeout(3000);

  // Test the signup page
  await page.goto('http://your-website.com/signup'); // Replace with your signup page URL
  await page.type('#logname', 'Your Name'); // Replace with your signup name field selector
  await page.type('#logemail', 'new-email@example.com'); // Replace with your signup email field selector
  await page.type('#logpass', 'new-password'); // Replace with your signup password field selector
  await page.click('.btn'); // Replace with your signup submit button selector

  // Wait for some time to see the result (you can replace this with proper assertions)
  await page.waitForTimeout(3000);

  // Close the browser
  await browser.close();
})();
