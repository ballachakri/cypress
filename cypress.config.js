const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    // ✅ baseUrl REMOVED — each test uses its own full URL
    specPattern: 'cypress/e2e/**/*.cy.js',
    supportFile: 'cypress/support/e2e.js',
    setupNodeEvents(on, config) {
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
    charts: true
  },

  screenshotsOnRunFailure: true,
  screenshotQuality: 80,
  video: true,
  videoCompression: 32
});