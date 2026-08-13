const { defineConfig } = require('cypress');
const { generateMochawesomeReport } = require('cypress-mochawesome-reporter/plugin'); // ✅ ADD THIS

module.exports = defineConfig({
  e2e: {
    specPattern: 'cypress/e2e/**/*.cy.js',
    supportFile: 'cypress/support/e2e.js',
    setupNodeEvents(on, config) {
      // ✅ THIS LINE GENERATES THE HTML REPORT!
      generateMochawesomeReport(on, config);
      
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
    inlineAssets: true
  },

  screenshotsOnRunFailure: true,
  video: true
});