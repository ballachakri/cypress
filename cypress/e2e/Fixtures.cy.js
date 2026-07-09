describe('Fixture files Demo', () => {

    // it('Login', () => {

    //     cy.visit("https://opensource-demo.orangehrmlive.com");

    //     cy.fixture('orangehrm.json').then((data) => {
    //         cy.get("input[name='username']").type(data.username);
    //         cy.get("input[name='password']").type(data.password);
    //         cy.get("button[class$='orangehrm-login-button']").click();
    //     })
    // });

    //or 

    let userdata;

    before('Access test data - for multiple it blocks', () => {
        cy.fixture('orangehrm.json').then((data) => {
            userdata = data;
        })
    });

    it('Login', () => {

        cy.visit("https://opensource-demo.orangehrmlive.com");
        cy.get("input[name='username']").type(userdata.username);
        cy.get("input[name='password']").type(userdata.password);
        cy.get("button[class$='orangehrm-login-button']").click();
    })
});


