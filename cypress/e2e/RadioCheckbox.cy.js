describe('Radio button', () => {
    it('Radio', () => {
        // selecting radio button
        cy.visit("https://www.selenium.dev/selenium/web/formPage.html")
        cy.get("input[id='cheese']").should('be.visible')
        cy.get("input[id='peas']").should('be.visible')
        cy.get("input[id='cheese']").check().should('be.checked')
        cy.get("input[id='peas']").should('not.be.checked')
    })

    it('Checkbox', () => {
        // selecting check box
        cy.visit("https://www.selenium.dev/selenium/web/formPage.html")
        cy.get("input[id='checky']").should('be.visible')
        cy.get("input[id='checky']").check()
        cy.get("input[id='checky']").should('be.checked')
        cy.get("input[id='checky']").uncheck()
        cy.get("input[id='checky']").should('not.be.checked')

        // To select first and last checkbox
        cy.get("form > input[type='checkbox']").first().check().should('be.checked')
        cy.get("form > input[type='checkbox']").last().check().should('be.checked')
        // cy.get("form > input[type='checkbox']").check()
        let checkboxes = cy.get("form > input[type='checkbox']").should('have.length', 4);
     })
})