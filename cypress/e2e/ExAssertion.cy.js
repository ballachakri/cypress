
describe('Explicit Assertions', () => {
    it('Explicit', () => {
        cy.visit("https://opensource-demo.orangehrmlive.com")

        cy.get("input[name='username']").type('Admin')
        cy.get("input[name='password']").type('admin123')
        cy.get("button[type='submit']").click

        let expName = 'xyz';

        cy.get(".oxd-userdropdown-name").then( (x)=> {
            let actName = x.text()
            
            //BDD style
            expect(actName).to.equal(expName)
            expect(actName).to.not.equal(expName)

            //TDD style
            assert.equal(actName,expName)
        })
    })
}
)