const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: "cypress-mochawesome-reporter",
  reporterOptions: {
    reportDir: "cypress/reports",
    overwrite: true, // ✅ Ensures single index.html per run
    html: true,      // ✅ Auto-generates HTML
    json: true,
    embeddedScreenshots: true,
    inlineAssets: true,
    charts: true,
    saveAllAttempts: false
  },

  e2e: {
    setupNodeEvents(on, config) {
      require("cypress-mochawesome-reporter/plugin")(on); // ✅ Required
      return config;
    }
  }
});