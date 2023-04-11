import { chromium, test } from "@playwright/test";

test("Typing a joke and pun should only appear on the page after clicking the Submit Joke button", async ({
  page,
}) => {
  // 1. user enters page.
  await page.goto("http://localhost:5173");
  // 2. user inputs text with placeholder.
  await page
    .getByPlaceholder("Type something funny")
    .fill("I used to be addicted to soap, but I'm clean now.");
  // 3. user clicks addjoke button.
  // 4. joke displayed on page.
  // 5. user inputs text with placeholder whats the pun?
  // 6. user clicks addpun button.
  // 7. pun displayed next to joke on page.
});
