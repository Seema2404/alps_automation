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
            logo: () => cy.get('#logo',{timeout : 60000}),
            kwLandingPage : () => cy.get('#home_keywordSearch_keyword')
            
        }
    }
}

export const login = new LoginPage()
