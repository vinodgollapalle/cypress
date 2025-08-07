const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  // cypress.config.js

  e2e: {
    baseUrl: 'https://practice.expandtesting.com/', // replace with your app's URL
  },
})




