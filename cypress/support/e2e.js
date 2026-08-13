import 'cypress-mochawesome-reporter/register';
import 'cypress-xpath';
import 'cypress-file-upload';
import 'cypress-iframe';
import '@4tw/cypress-drag-drop';

afterEach(() => {
  const testName = Cypress.currentTest.title.replace(/\s+/g, '-').toLowerCase();
  cy.screenshot(`end-of-test--${testName}`, {
    capture: 'fullPage',
    overwrite: true
  });
});