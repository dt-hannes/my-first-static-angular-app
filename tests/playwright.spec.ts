import { test, expect } from '@playwright/test';

test('basic test', async ({ page }) => {
  await page.goto('/');

  await page.waitForSelector('div .app-message');
  await page.waitForSelector('div .api-message');

  await expect(page.locator('div .app-message')).toContainText('Hello, Azure Static Web Apps');
  await expect(page.locator('div .api-message')).toContainText('Hello from the API');
})