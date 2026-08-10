const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://reqres.in/api',
    specPattern: 'cypress/e2e/**/*.cy.js',
    supportFile: 'cypress/support/e2e.js',
    
    setupNodeEvents(on, config) {
      // ✅ SIMPLIFIED — removed problematic beforeRun() call
      config.screenshotsFolder = 'cypress/reports/screenshots';
      config.videosFolder = 'cypress/reports/videos';
      return config;
    },
  },

 reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir: 'cypress/reports/html', // ✅ MUST match workflow path!
    reportName: 'index',
    overwrite: true,
    html: true,
    json: true,
    charts: true
  },

  screenshotsOnRunFailure: true,
  screenshotQuality: 80,
  video: true,
  videoCompression: 32
});