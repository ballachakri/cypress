
describe('Implicit Assertions', () => {
    it('Implicit Assertions', () => {
        cy.visit("https://opensource-demo.orangehrmlive.com")

        // should   and         // Implicit Assertions
        // cy.url().should('include','/auth/login')
        // cy.url().should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        // cy.url().should('contain', 'orangehrmlive')
        // or
        // cy.url().should('include','/auth/login').should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        // .should('contain', 'orangehrmlive')
        // or
        cy.url().should('include', '/auth/login').and('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
            .and('contain', 'orangehrmlive')
            .and('not.contain', 'hello')

        cy.title().should('include', 'Orange').and('eq', 'OrangeHRM')
        cy.get("img[src*='ohrm_branding']").should('be.visible').and('exist')
        cy.get("a[href]").should('have.length', '5')

        cy.get("input[name='username']").type('Admin')
        cy.get("input[name='username']").should('have.value', 'Admin')
    })
}
)