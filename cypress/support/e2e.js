import 'cypress-mochawesome-reporter/register';

afterEach(() => {
  const testName = Cypress.currentTest.title.replace(/\s+/g, '-').toLowerCase();
  cy.screenshot(`end-of-test--${testName}`, {
    capture: 'fullPage',
    overwrite: true
  });
});