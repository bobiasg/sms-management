import { expect, test } from '@playwright/test';

// Checkly is a tool used to monitor deployed environments, such as production or preview environments.
// It runs end-to-end tests with the `.check.spec.ts` extension after each deployment to ensure that the environment is up and running.
// With Checkly, you can monitor your production environment and run `*.check.spec.ts` tests regularly at a frequency of your choice.
// If the tests fail, Checkly will notify you via email, Slack, or other channels of your choice.
// On the other hand, E2E tests ending with `*.spec.ts` are only run before deployment.
// You can run them locally or on CI to ensure that the application is ready for deployment.

const targetUrl = process.env.ENVIRONMENT_URL || process.env.PRODUCTION_URL;

if (!targetUrl) {
  throw new Error(
    'Please set the ENVIRONMENT_URL or PRODUCTION_URL environment variable',
  );
}

test.describe('Sanity', () => {
  test.describe('Static pages', () => {
    test('should display the homepage', async ({ page }) => {
      await page.goto(targetUrl);

      await expect(
        page.getByRole('heading', {
          name: 'Khuong Nguyen',
        }),
      ).toBeVisible();
    });

    test('should navigate to the about', async ({ page }) => {
      await page.goto(targetUrl);

      await page.getByRole('link', { name: 'About' }).click();

      await expect(page).toHaveURL(targetUrl);

      await expect(
        page.locator('#about').getByRole('heading', { name: 'About Me' }),
      ).toBeVisible();

      // // After clicking the "About" link and waiting for navigation if necessary
      // const aboutSectionY = await page.evaluate(() => {
      //   const aboutSection = document.querySelector('#about');
      //   return aboutSection?.getBoundingClientRect().top + window.scrollY;
      // });

      // const currentScrollY = await page.evaluate(() => window.scrollY);

      // // Assert that the current scroll position is at the "about" section
      // await expect(currentScrollY).toBeCloseTo(aboutSectionY, -1); // Using -1 for precision to account for fractional pixels in some browsers
    });

    test('should navigate to the work', async ({ page }) => {
      await page.goto(targetUrl);

      await page.getByRole('link', { name: 'Work' }).click();
      await expect(page).toHaveURL(targetUrl);

      await expect(
        page.locator('#work').getByRole('heading', { name: 'Latest Products' }),
      ).toBeVisible();

      await expect(
        page.locator('#work').getByRole('link', {
          name: /^Read More/,
        }),
      ).toHaveCount(3);
    });
  });
});
