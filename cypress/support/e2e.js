// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

require("cypress-xpath")
require("cypress-iframe")
require("@4tw/cypress-drag-drop")
require("cypress-file-upload")
import 'cypress-mochawesome-reporter/register'

afterEach(() => {
  const testName = Cypress.currentTest.title.replace(/\s+/g, '-').toLowerCase();
  
  // Take full-page screenshot & attach directly to the report
  cy.screenshot(`end-of-test--${testName}`, {
    capture: 'fullPage',
    overwrite: true
  });
});
