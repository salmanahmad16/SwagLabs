const { defineConfig } = require("cypress");

module.exports = defineConfig({
  defaultCommandTimeout: 4000, // 4 seconds
  requestTimeout: 4000,
   ageLoadTimeout: 4000,
   screenshotOnRunFailure: true,
   reporter: 'cypress-mochawesome-reporter',
    reporterOptions: {
      reportDir: 'cypress/reports',
      overwrite: true,
      screenshotOnRunFailure: true,
      embeddedScreenshots: true,
      html: true,
      json: false,
    
    },
  e2e: {
    baseUrl: 'https://www.saucedemo.com/v1/',
    env:{
      username: 'standard_user',
      password: 'secret_sauce',
    },
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    
  },
});
