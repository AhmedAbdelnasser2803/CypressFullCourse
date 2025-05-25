const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'zrcgqj',
  e2e: {
    viewportHeight: 750,
    viewportWidth:550,
    baseUrl:"https://www.google.com/",
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
