const { defineConfig } = require("cypress");

module.exports = defineConfig({
  // Video recording settings
  video: true,
  videosFolder: "cypress/reports/videos",
  videoCompression: 32,
  videoUploadOnPasses: true, // ✅ Record videos for ALL tests (pass + fail)

  // Screenshot settings
  screenshotsFolder: "cypress/reports/screenshots",
  screenshotOnRunFailure: true,

  reporter: "cypress-mochawesome-reporter",
  reporterOptions: {
    reportDir: "cypress/reports",
    overwrite: true,
    html: true,
    json: true,
    embeddedScreenshots: true, // ✅ Inline screenshots inside the HTML
    inlineAssets: true,        // ✅ Embed videos/assets directly into report
    charts: true,
    saveAllAttempts: false,
    // ✅ Auto-attach screenshot at end of EVERY test
    screenshotsOverwrite: true,
    autoAttachScreenshots: true,
    // ✅ Attach video links/embeds to report
    attachVideos: true
  },

  e2e: {
    setupNodeEvents(on, config) {
      require("cypress-mochawesome-reporter/plugin")(on);
      return config;
    }
  }
});