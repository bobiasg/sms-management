import percySnapshot from '@percy/playwright';
import { expect, test } from '@playwright/test';

test.describe('Navigation', () => {
  test.describe('Static pages', () => {
    test('should take screenshot of the homepage', async ({ page }) => {
      await page.goto('/');

      await expect(
        page.getByRole('heading', {
          name: 'Khuong Nguyen',
        }),
      ).toBeVisible();

      await percySnapshot(page, 'Homepage');
    });
  });
});
