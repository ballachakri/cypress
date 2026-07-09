describe('Alerts', () => {

    it('Simple alert', () => {
        cy.visit("https://www.selenium.dev/selenium/web/alerts.html#")
        cy.get("a[id='alert']").click()
    })

    it('Alert ', () => {
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.get("button[onclick='jsAlert()']").click()
        cy.on('window:alert', (text) => {
            expect(text).to.contains('I am a JS Alert')
        })
        // cypress automatically closed alert by clicking ok
        cy.get("p[id='result']").should('have.text', 'You successfully clicked an alert')
    })

    it('Confirm Ok button', () => {
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.get("button[onclick='jsConfirm()']").click()
        cy.on('window:confirm', (text) => {
            expect(text).to.contains('I am a JS Confirm')
        })
        // cypress automatically closed alert by clicking ok
        cy.get("p[id='result']").should('have.text', 'You clicked: Ok')

    })


    it('Confirm Cancel button', () => {
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.get("button[onclick='jsConfirm()']").click()
        cy.on('window:confirm', (text) => {
            expect(text).to.contains('I am a JS Confirm');
        })
        cy.on('window:confirm', () => false) // to click cancel

        cy.get("p[id='result']").should('have.text', 'You clicked: Cancel')
    })


    it('Prompt Ok button', () => {
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")

        cy.window().then((win) => {
            cy.stub(win, 'prompt').returns('welcome');
        })
        cy.get("button[onclick='jsPrompt()']").click();

        cy.get("p[id='result']").should('have.text', 'You entered: welcome');
    })

    it('Prompt cancel button', () => {
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")

        cy.window().then((win) => {
            cy.stub(win, 'prompt').returns('welcome');
        })
        cy.get("button[onclick='jsPrompt()']").click();

        cy.on('window:prompt', () => false); // to click cancel
        cy.get("p[id='result']").should('have.text', 'You entered: null');

    })

    //https://the-internet.herokuapp.com/basic_auth

    it('Basic Auth', () => {
        cy.visit("https://the-internet.herokuapp.com/basic_auth",
            { auth: { username: "admin", password: "admin" } }
        );

        cy.get("div[class='example'] p").should('have.contain', 'Congratulations! ');

        // //or

        // cy.visit("https://admin:admin@the-internet.herokuapp.com/basic_auth");
        // cy.get("div[class='example'] p").should('have.contain', 'Congratulations! ');

    })
}
)