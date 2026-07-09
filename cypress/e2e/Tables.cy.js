describe('Tables', () => {

    beforeEach('Open website', () => {
        cy.visit("https://practice.expandtesting.com/tables")
    })

    it('Check rows and columns', () => {
        cy.get("table[id='table1'] tbody tr").should('have.length', '4');
        cy.get("table[id='table1'] thead tr th").should('have.length', '6');
    })

    it('check cell data from specific row and call', () => {
        cy.get("table[id='table1'] tbody tr:nth-child(4) td:nth-child(3)").contains('tconway@earthlink.net');
    })

    it('Read all data from specific row and call', () => {
        // cy.get("table[id='table1'] tbody tr >td").should('have.length', 24);        

        cy.get("table[id='table1'] tbody tr")
            .each(($row, index, $rows) => {
                cy.wrap($row).within(() => {
                    cy.get("td")
                        .each(($col, index, $cols) => {
                            cy.log($col.text());
                        })
                })
            })
    })

})