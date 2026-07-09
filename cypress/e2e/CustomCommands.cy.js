describe('Custom commands', () => {

    it('Handling links', () => {
        cy.visit("https://tutorialsninja.com/demo/");
        cy.clicklink('iPhone');
    })

    it('Overwriting existing commands', () => {
        cy.visit("https://tutorialsninja.com/demo/");
        cy.clicklink('MacBook')
    })

    it('Login commands', () => {
        cy.visit("https://tutorialsninja.com/demo/index.php?route=account/login");
        cy.login('email123@email.com','Auto123@');
        cy.get("div[id='account-account'] >ul li:nth-child(2)").should('have.text','Account');


    })
})





