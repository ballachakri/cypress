describe('Mouse Events', () => {
    it('Mouse over', () => {
        cy.visit("https://tutorialsninja.com/demo/");
        cy.get("ul[class='nav navbar-nav']>li:nth-child(1)").trigger('mouseover').click();
    });

    it('Right click', () => {
        cy.visit("https://www.selenium.dev/selenium/web/mouse_interaction.html");
        //cy.get("input[id='clickable']").trigger('contextmenu');
        //or
        cy.get("input[id='clickable']").rightclick();
        cy.get("strong[id='click-status']").should('contain', 'context-clicked');
    });
    it('Double click', () => {a
        cy.visit("https://www.selenium.dev/selenium/web/mouse_interaction.html");
        cy.get("input[id='clickable']").dblclick();
        cy.get("strong[id='click-status']").should('contain', 'double-clicked');
    });

    // drag and drop plugin
    // npm install --save-dev @4tw/cypress-drag-drop
    it('Drag and drop using plugin', () => {
        cy.visit("https://www.selenium.dev/selenium/web/mouse_interaction.html");
        cy.get("div[id='draggable']").drag("div[id='droppable']",{force:true});
    });

    it('Scrolling  ', () => {
        cy.visit("https://www.selenium.dev/selenium/web/scroll3.html").sc;
        cy.get("button[id='button2']").scrollIntoView({duration:2000});
        cy.get("button[id='button1']").scrollIntoView({duration:2000});
    });
})