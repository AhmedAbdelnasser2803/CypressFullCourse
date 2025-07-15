const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'zrcgqj',
  e2e: {
    baseUrl:"http://127.0.0.1:8080/index.html",
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
