const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: "cypress-mochawesome-reporter",
  reporterOptions: {
    reportDir: "cypress/reports",
    overwrite: true, // ✅ Ensures one report per run
    html: true,      // ✅ Auto-generates single HTML at end
    json: true,
    embeddedScreenshots: true,
    inlineAssets: true,
    charts: true,
    saveAllAttempts: false
  },

  e2e: {
    setupNodeEvents(on, config) {
      require("cypress-mochawesome-reporter/plugin")(on);
      return config;
    }
  }
});