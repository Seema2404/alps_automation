export class LoginPage {
    constructor () {
        this.elements = {
            loginPageLogo: () => cy.get('.login_page_logo'),
            username: () => cy.get('input[type="email"]'),
            password: () => cy.get('input[type="password"]'),
            loginButton: () => cy.get('.btn-primary'),
            errorMessage: () => cy.get('.login-err-msg').contains('Invalid credentials'),
            selectAccount: () => cy.get('#menu1'),
            continueButton: () => cy.get('.multiple_bttn'),
            logo: () => cy.get('#logo'),
            
        }
    }
}

export const login = new LoginPage()
