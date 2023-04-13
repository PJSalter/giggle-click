// import { chromium, test, expect } from "@playwright/test";

// test("Button component is visible on multiple pages", async () => {
//   const browser = await chromium.launch({
//     headless: false,
//     slowMo: 3000,
//   });
//   const context = await browser.newContext();
//   const page = await context.newPage();
//   // Next button goes to Joke Randomiser page
//   await page.goto("http://localhost:5173/");
//   await page.isVisible("_react=NextButton");
//   await page.locator('button[class="next-button"]').click();
//   // Next button goes to Card Flip Game page
//   await page.goto("http://localhost:5173/joke-randomiser");
//   await page.isVisible("_react=NextButton");
//   await page.locator('button[class="next-button"]').click();
//   // Next button goes to Rate Joke page
//   await page.goto("http://localhost:5173/card-flip-game");
//   await page.isVisible("_react=NextButton");
//   await page.locator('button[class="next-button"]').click();
//   // Next button goes back to home page
//   await page.goto("http://localhost:5173/rate-joke");
//   await page.isVisible("_react=NextButton");
//   await page.locator('button[class="next-button"]').click();
//   await page.goto("http://localhost:5173");
// });

import { chromium, expect, Page } from "@playwright/test";
import { describe, it } from "mocha";

// describe("Button component is visible on multiple pages", () => {
//   let browser;
//   let page: Page;

test("Button component is visible on multiple pages", async () => {
  // Simualte a chromium browser with an attribute to slow the running time down by 3 seconds so that you can visually see the test going through each step.
  let browser = await chromium.launch({
    headless: false,
    slowMo: 3000,
  });

  beforeAll(async () => {
    browser = await chromium.launch({ headless: false });
  });

  beforeEach(async () => {
    const pageNew = await browser.newPage();
    await pageNew.goto("http://localhost:5173/");
  });

  afterAll(async () => {
    await browser.close();
  });

  it("should be visible on the home page", async (pageNew) => {
    await expect(pageNew.locator('button[class="next-button"]')).toBeVisible();
  });

  it("should go to the Joke Randomiser page when clicked on home page", async () => {
    await page.click('button[class="next-button"]');
    await page.waitForLoadState();
    await expect(page.locator('button[class="next-button"]')).toBeVisible();
  });

  it("should go to the Card Flip Game page when clicked on Joke Randomiser page", async (pageNew) => {
    await page.click('button[class="next-button"]');
    await page.waitForLoadState();
    await page.click('button[class="next-button"]');
    await page.waitForLoadState();
    await expect(page.locator('button[class="next-button"]')).toBeVisible();
  });

  it("should go to the Rate Joke page when clicked on Card Flip Game page", async () => {
    await page.click('button[class="next-button"]');
    await page.waitForLoadState();
    await page.click('button[class="next-button"]');
    await page.waitForLoadState();
    await page.click('button[class="next-button"]');
    await page.waitForLoadState();
    await expect(page.locator('button[class="next-button"]')).toBeVisible();
  });

  it("should go back to the home page when clicked on Rate Joke page", async () => {
    await page.click('button[class="next-button"]');
    await page.waitForLoadState();
    await page.click('button[class="next-button"]');
    await page.waitForLoadState();
    await page.click('button[class="next-button"]');
    await page.waitForLoadState();
    await page.click('button[class="next-button"]');
    await page.waitForLoadState();
    await expect(page.locator('button[class="next-button"]')).toBeVisible();
  });
});

function beforeAll(arg0: () => Promise<void>) {
  throw new Error("Function not implemented.");
}

function beforeEach(arg0: () => Promise<void>) {
  throw new Error("Function not implemented.");
}

function afterAll(arg0: () => Promise<void>) {
  throw new Error("Function not implemented.");
}
// import { chromium, test, expect } from "@playwright/test";
// import describe from "@playwright/test";

// describe("BackButtonWrapper", () => {
//   test("clicking the button navigates to the specified route", async () => {
//     // Launch a new Chromium browser instance
//     const browser = await chromium.launch();

//     // Create a new page in the browser
//     const page = await browser.newPage();

//     // Navigate to the page with the BackButtonWrapper component
//     await page.goto("http://localhost:5173/back-button-wrapper");

//     // Click the button
//     await page.click("button");

//     // Get the URL of the current page
//     const url = await page.url();

//     // Assert that the URL is equal to the specified route
//     expect(url).toBe("http://localhost:5173/next-page");

//     // Close the browser
//     await browser.close();
//   });
// });
