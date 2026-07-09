describe('Search functionality', () => {

    it('Search iPhone', () => {
        cy.visit("https://tutorialsninja.com/demo/")
        cy.title().should('eq', 'Your Store') // Assertions

        cy.get("input[name='search']").type("iphone")
        cy.get("button[class='btn btn-default btn-lg']").click()
        cy.xpath("//h1[normalize-space()='Search - iphone']").contains("Search - iphone") // Assertions
        
    })

        it('Search books', () => {
        cy.visit("https://tutorialsninja.com/demo/")
        cy.title().should('eq', 'Your Store') // Assertions

        cy.get("input[name='search']").type("books")
        cy.get("button[class='btn btn-default btn-lg']").click()
        cy.xpath("//h1[normalize-space()='Search - iphone']").contains("Search - iphone") // Assertions
        
    })


})
