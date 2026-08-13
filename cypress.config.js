const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
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
    reportDir: 'cypress/reports', // ✅ KEEP SIMPLE — NO trailing slash, NO /html
    reportName: 'index',
    overwrite: true,
    html: true,
    json: true,
    charts: true,
    inlineAssets: true // ✅ HELPS — embeds CSS/JS so report works on GitHub Pages!
  },

  screenshotsOnRunFailure: true,
  video: true
});