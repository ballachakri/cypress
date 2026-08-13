const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    specPattern: 'cypress/e2e/**/*.cy.js',
    supportFile: 'cypress/support/e2e.js',
    setupNodeEvents(on, config) {
      // ✅ THIS IS THE CORRECT SYNTAX FOR LATEST VERSIONS
      require('cypress-mochawesome-reporter/plugin')(on, config);
      
      config.screenshotsFolder = 'cypress/reports/screenshots';
      config.videosFolder = 'cypress/reports/videos';
      return config;
    },
  },

  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir: 'cypress/reports/html', // ✅ EXPLICIT /html — reporter puts index.html HERE
    reportName: 'index',
    overwrite: true,
    html: true,
    json: true,
    charts: true,
    inlineAssets: true // ✅ Critical for GitHub Pages!
  },

  screenshotsOnRunFailure: true,
  screenshotQuality: 80,
  video: true,
  videoCompression: 32
});