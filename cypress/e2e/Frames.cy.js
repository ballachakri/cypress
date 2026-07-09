describe('Handling frames', () => {
    it.skip("using method", () => {

        cy.visit("https://the-internet.herokuapp.com/iframe");

        const iframe = cy.get("iframe[id='mce_0_ifr']")
            .its('0.contentDocument.body')
            .should('be.visible')
            .then(cy.wrap);

        cy.get("div[aria-label='Close']").click();
        iframe.clear().type("Hello World ! {ctrl+a}");
    });

    it.only("Using Custom command", () => {

        cy.visit("https://the-internet.herokuapp.com/iframe");

        const iframe = cy.getIframe("iframe[id='mce_0_ifr']");

        cy.get("div[aria-label='Close']").click();
        iframe.clear().type("Hello World ! {ctrl+a}");
    })

    // npm install -D cypress-iframe
    it.skip("Using iframe plug in", () => {
        cy.visit("https://the-internet.herokuapp.com/iframe");
        cy.frameLoaded("iframe[id='mce_0_ifr']")
        cy.get("div[aria-label='Close']").click();
        cy.iframe("iframe[id='mce_0_ifr']").clear().type("Hello World ! {ctrl+a}");
    })

});