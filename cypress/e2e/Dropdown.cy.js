describe('Drop down', () => {

    it("drop down select", () => {
        cy.visit("https://www.selenium.dev/selenium/web/formPage.html")
        cy.get("select[name = 'select_with_spaces']").select('Four')
            .should('have.value', 'Four')
    })

    it("drop down - to enter text input box", () => {
        cy.visit("https://www.dummyticket.com/dummy-ticket-for-visa-application/")
        cy.get("span[id='select2-billing_country-container']").click()
        cy.get("input[class='select2-search__field']").type('Italy').type('{enter}')
        cy.get("span[id='select2-billing_country-container']").should('have.text', 'Italy')
    })

    it("drop down - Auto suggest drop down", () => {
        cy.visit("https://www.wikipedia.org/#")
        cy.get("input[id='searchInput']").type('Delhi')
        cy.get('.suggestion-title').contains('Deilhi University').click()

    })


    it("drop down - Auto suggest drop down", () => {
        cy.visit("https://www.google.com/")
        cy.get("input[id='q']").type('cypress automation')
        cy.get("div[class='wM6W7d'] >span").each(($el, index, $list) => {
            if($el.text() === 'cypress automation tool'){
                cy.wrap($el).click
            }
        })
    })
})