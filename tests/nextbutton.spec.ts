import { chromium, test, expect } from "@playwright/test";

test("Button component is visible on multiple pages", async () => {
  const browser = await chromium.launch({
    headless: false,
    slowMo: 3000,
  });
  const context = await browser.newContext();
  const page = await context.newPage();
  // Next button goes to Joke Randomiser page
  await page.goto("http://localhost:5173/");
  await page.isVisible("_react=NextButton");
  await page.locator('button[class="next-button"]').click();
  // Next button goes to Card Flip Game page
  await page.goto("http://localhost:5173/joke-randomiser");
  await page.isVisible("_react=NextButton");
  await page.locator('button[class="next-button"]').click();
  // Next button goes to Rate Joke page
  await page.goto("http://localhost:5173/card-flip-game");
  await page.isVisible("_react=NextButton");
  await page.locator('button[class="next-button"]').click();
  // Next button goes back to home page
  await page.goto("http://localhost:5173/rate-joke");
  await page.isVisible("_react=NextButton");
  await page.locator('button[class="next-button"]').click();
  await page.goto("http://localhost:5173");
});
