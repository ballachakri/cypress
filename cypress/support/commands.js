// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

/// <reference types="Cypress" />

/// <reference types="cypress-xpath" />

/// <reference types="cypress-iframe" />

/// <reference types="@4tw/cypress-drag-drop" />

/// <reference types="cypress-file-upload" />

Cypress.Commands.add('getIframe', (iframeLocator) => {
        return cy.get(iframeLocator)
                .its('0.contentDocument.body')
                .should('be.visible')
                .then(cy.wrap);
})

// custum command - click link
Cypress.Commands.add('clicklink', (label) => {
        cy.get('a').contains(label).click();
})

// custom command for login
Cypress.Commands.add('login', (email, password) =>{
        cy.get("input[id='input-email']").type(email);
        cy.get("input[id='input-password']").type(password);
        cy.get("input[class='btn btn-primary']").click();
})



