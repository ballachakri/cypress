describe('Capture screen shots', ()=>{
    it('screenshot', ()=>{
          cy.visit("https://tutorialsninja.com/demo/");
          cy.screenshot("homepage");
          cy.get("div[id='logo'] a1").screenshot("div[id='logo'] a");

          // Automatically capture screenshot and video on failure, this happen
            // ONLY when we run on CLI
            // npx cypress run --spec cypress\e2e\CaptureScreenshots.cy.js
    })
})