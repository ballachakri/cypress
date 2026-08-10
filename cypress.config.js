const { defineConfig } = require('cypress');
const { beforeRun } = require('cypress-mochawesome-reporter/plugin');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://reqres.in/api',
    specPattern: 'cypress/e2e/**/*.cy.js',
    supportFile: 'cypress/support/e2e.js', // ✅ Required for mochawesome reporter
    setupNodeEvents(on, config) {
      // ✅ Mochawesome reporter setup
      beforeRun(on, config);
      
      // ✅ Screenshots & Videos go to reports folder
      config.screenshotsFolder = 'cypress/reports/screenshots';
      config.videosFolder = 'cypress/reports/videos';
      return config;
    },
  },

  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir: 'cypress/reports',
    reportName: 'index',
    overwrite: true,
    html: true,
    json: true,
    charts: true,
    reportPageTitle: 'Cypress Test Report'
  },

  screenshotsOnRunFailure: true,
  screenshotQuality: 80,
  video: true,
  videoCompression: 32
});