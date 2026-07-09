describe('Test Driven', () => {

    it('Get user data', () => {

        cy.fixture('orangehrm1.json').then((data) => {

            cy.visit("https://opensource-demo.orangehrmlive.com");

            data.forEach((userdata) => {
                cy.get("input[placeholder='Username']").type(userdata.username);
                cy.get("input[placeholder='Password']").type(userdata.password);
                cy.get("button[class$='orangehrm-login-button']").click();

                if(userdata.username=='Admin' && userdata.password=='admin123'){
                    cy.get("button[class$='upgrade-button']")
                    .should('have.text', ' Upgrade');
                    cy.get("i[class$='userdropdown-icon']").click();
                    cy.get("ul[class='oxd-dropdown-menu'] > li:nth-child(4)").click();
                }
                else{
                    cy.get("p[class='oxd-text oxd-text--p oxd-alert-content-text']")
                    .should('have.text', userdata.expected);
                }
            })

        })
    })
})






