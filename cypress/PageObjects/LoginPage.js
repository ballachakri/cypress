class LoginPage {

    myAccountTab = "a[title='My Account'";
    loginTab = "a[href$='account/login']";
    emailTextField = "input[id='input-email']";
    passwordTextField = "input[id='input-password";
    submitButton = "input[value='Login";
    myAccountText = "div[id='account-account'] h2:nth-child(1)";

    clcikMyAccount() {
        cy.get(this.myAccountTab).click();
    }

    clickLiginTab() {
        cy.get(this.loginTab).click();
    }

    setEmail(email) {
        cy.get(this.emailTextField).type(email);
    }

    setUserPassword(password) {
        cy.get(this.passwordTextField).type(password);
    }

    clickSubmit() {
        cy.get(this.submitButton).click();
    }

    verifyLogin() {
        cy.get(this.myAccountText).should('have.text', 'My Account');
    }
}

export default LoginPage;