import * as loginAction from '../../pages/commands/login'

describe('SignIn as a user', () => {
    before(() => {
        cy.visitWithBaseAuth('')
    })
    beforeEach(() => {
        cy.restoreLocalStorage()
    })
    afterEach(() => {
        cy.saveLocalStorage()
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
        loginAction.selectTenant('Testing')
        loginAction.clickContinue()
        loginAction.validateHomepage()
    })
})
