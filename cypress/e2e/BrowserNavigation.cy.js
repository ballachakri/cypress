describe('Browser navigation', () => {

    // cy.go('back') or (-1) and cy.go('forward') or (1) and cy.reload()
    it('Navigate back', () => {
        cy.visit("https://tutorialsninja.com/demo/");

        cy.title().should('eq', 'Your Store');
        cy.xpath("(//a[contains(text(),'Tablets')])[1]").click();

        cy.xpath("(//a[contains(text(),'Tablets')])[2]").should('have.text','Tablets')
        cy.go('back');
        cy.title().should('eq', 'Your Store');
        
        cy.go('forward');
        cy.xpath("(//a[contains(text(),'Tablets')])[2]").should('have.text','Tablets')

        cy.reload()
    })

})