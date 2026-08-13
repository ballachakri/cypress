import 'cypress-mochawesome-reporter/register';
import 'cypress-xpath';

afterEach(() => {
  const testName = Cypress.currentTest.title.replace(/\s+/g, '-').toLowerCase();
  cy.screenshot(`end-of-test--${testName}`, {
    capture: 'fullPage',
    overwrite: true
  });
});