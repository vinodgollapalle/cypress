// const { defineConfig } = require('cypress');

// module.exports = defineConfig({
//   e2e: {
//     baseUrl: 'https://practice.expandtesting.com/',

//     setupNodeEvents(on, config) {
//       // implement node event listeners here
//     },

//     reporter: 'mochawesome',
//     reporterOptions: {
//       overwrite: false,
//       html: false,
//       json: true,
//       reportDir: 'reports/mochawesome', 
//     },
//   },
// });



const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
     baseUrl: 'https://practice.expandtesting.com/',
    setupNodeEvents(on, config) {
      // implement node event listeners here if needed
    },
    reporter: 'mochawesome',
    reporterOptions: {
      reportDir: 'reports',
      overwrite: false,
      html: false,
      json: true
    }
  }
});
