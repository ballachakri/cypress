describe('Hooks ', () => {
    // before() - executes only once before starting all tests(it blocks)
    // beforEach() - executes multiple times before each test( before every it block)
    // AfterEach() - executes multiple times after each test( after every it block)
    // After() - executes only once after completing all tests(it blocks)

    before(() => {
        cy.log(" ========== Launch App");
    });
    
    after(() => {
        cy.log(" ========== Closing App");
    });

    beforeEach(() => {
        cy.log(" ========== Before Each");
    });

    afterEach(() => {
        cy.log(" ========== After Each");
    });

    it('Search ', () => {
        cy.log("Search");
    });

    it('Advanced Search', () => {
        cy.log("Advanced Search");
    });


    it('Listing Products', () => {
        cy.log("Listing products");
    });

})