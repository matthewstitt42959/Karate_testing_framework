import { defineConfig, devices } from '@playwright/test';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  //testDir: '../src/test/playwright/',
  //timeout: 5 * 60 * 1000, //this is five minutes

  reporter: [['list', {printSteps: true}]],
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    headless: false,
    viewport: {width: 1280, height: 720},
    actionTimeout: 10000, 
    screenshot: 'only-on-failure', 
    ignoreHTTPSErrors: true,
    trace: 'on-first-retry',
  },

  /* Configure projects for major browsers */
  projects: [
    {name: 'setup', testMatch: /.*\login.spec\.ts/},
    {
      name: 'Google Chrome',
      use: { ...devices['Desktop Chrome'], channel: 'chrome', 
        storageState: '.auth/user.json', 
       },
       dependencies: ['setup'], 
    },

    //{
   //   name: 'firefox',
   //   use: { ...devices['Desktop Firefox'] },
   // },

   // {
   //  name: 'webkit',
   //   use: { ...devices['Desktop Safari'] },
   // },

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },

  ],

});
