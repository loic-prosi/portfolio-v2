import { test, expect } from "@playwright/test";

test.describe("navigation", () => {
  test.beforeEach(async ({ page }) => {
    // Go to the starting url before each test.
    await page.goto(
      "http://localhost:6006/iframe.html?id=layout-navbar--default"
    );
  });

  test("has title", async ({ page }) => {
    await expect(page).toHaveTitle(/Loïc Prosi/);
  });

  test("has 'Accueil' link", async ({ page }) => {
    const link = await page.getByRole("link", { name: "Accueil" });
    await expect(link).toBe(true);
  });

  test("has 'Projets' link", async ({ page }) => {
    const link = await page.getByRole("link", { name: "Projets" });
    await expect(link).toBe(true);
  });
});
