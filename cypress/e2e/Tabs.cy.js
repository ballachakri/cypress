describe('Child Tabs', () => {

    it('handle tabs 1', () => {
        cy.visit("https://the-internet.herokuapp.com/windows");
        cy.get("a[href='/windows/new']").invoke('removeAttr', 'target');
        cy.get("a[href='/windows/new']").click();
        cy.url().should('include', "/windows/new");
        cy.go('back');  // back to parent

    });

    // it.skip('handle tabs 2', () => {
    //     cy.visit("https://the-internet.herokuapp.com/windows");

    //     cy.get("a[href='/windows/new']").then((e) => {
    //         let newUrl = e.prop('href');
    //         cy.visit(newUrl);
    //     });
    //     cy.url().should('include', "/windows/new");
    //     cy.go('back'); 
    // });
});