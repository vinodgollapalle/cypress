const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://practice.expandtesting.com/',

    setupNodeEvents(on, config) {
      // implement node event listeners here
    },

    reporter: 'mochawesome',
    reporterOptions: {
      overwrite: false,
      html: false,
      json: true,
      reportDir: 'reports/mochawesome', 
    },
  },
});

// const { defineConfig } = require("cypress");

// module.exports = defineConfig({
//   e2e: {
//     setupNodeEvents(on, config) {
//       require("cypress-mochawesome-reporter/plugin")(on);
//       return config;
//     },
//     specPattern: "cypress/e2e/**/*.cy.{js,ts}",
//   },
//   reporter: "cypress-mochawesome-reporter",
//   reporterOptions: {
//     reportDir: "reports/mochawesome", // Save reports in the `reports` folder
//     overwrite: false,
//     html: false,
//     json: true,
//   },
// });






