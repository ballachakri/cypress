import LoginPage from "../PageObjects/LoginPage.js"

describe('', ()=> {
    // 1. Simple type
    // it('User Login', ()=>{
    //     cy.visit("https://tutorialsninja.com/demo/");
    //     const login = new LoginPage();
    //     login.clcikMyAccount();
    //     login.clickLiginTab();
    //     login.setEmail('email123@email.com');
    //     login.setUserPassword('Auto123@');
    //     login.clickSubmit();
    //     login.verifyLogin();
    // })

    // //2. Normal type
    // it('User Login', ()=>{
    //     cy.visit("https://tutorialsninja.com/demo/");
    //     const login = new LoginPage();
    //     login.clcikMyAccount();
    //     login.clickLiginTab();
    //     login.setEmail('email123@email.com');
    //     login.setUserPassword('Auto123@');
    //     login.clickSubmit();
    //     login.verifyLogin();
    // })

        // //2. Enhanced type
    it('User Login', ()=>{
        cy.visit("https://tutorialsninja.com/demo/");
        const login = new LoginPage();
        login.clcikMyAccount();
        login.clickLiginTab();
        cy.fixture('user.json').then( (data)=>{
        login.setEmail(data.email);
        login.setUserPassword(data.password);
        })
        login.clickSubmit();
        login.verifyLogin();
    })

})