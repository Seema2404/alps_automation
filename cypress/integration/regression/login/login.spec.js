import * as loginAction from '../../../pages/commands/login'

describe('SignIn as a user', () => {
    let login

    before(() => {
        cy.log(Cypress.env('baseUrl'))
        cy.visitWithBaseAuth()
        cy.fixture('userData').then((userData) => {
            login = userData
        })
    })
    beforeEach(() => {
        cy.restoreLocalStorage()
    })
    afterEach(() => {
        cy.saveLocalStorage()
    })
    it('I should get error with invalid username and Password', () => {
        loginAction.userLogin({
            email: login.invalidUsername,
            password: login.invalidPassword
        })
        loginAction.verifyFailedLogin()
    })
    it('I should get error with invalid email-Id and Password', () => {
        loginAction.userLogin({
            email: login.invalidUsername,
            password: login.invalidPassword
        })
        loginAction.verifyFailedLogin()
    })
    it('I should be able to login with valid username and Password', () => {
        loginAction.userLogin({
            email: Cypress.env('username'),
            password: Cypress.env('password')
        })
        loginAction.validatingLogin()
    })
    it('I should be able to select the Tenant', () => {
        loginAction.clickSelectAccount()
        loginAction.selectTenant(Cypress.env('tenant'))
        loginAction.clickContinue()
        loginAction.validateHomepage()
    })
})
