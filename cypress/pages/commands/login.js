import { login } from '../page-selectors/LoginPage'

export const userLogin = ({ email, password }) => {
    login.elements.username().clear()
    login.elements.username().type(email)
    login.elements.password().clear()
    login.elements.password().type(password)
    login.elements.loginButton().click()
}

export const verifyLoginPage = () => {
    login.elements.loginPageLogo().should('be.visible')
}

export const verifyFailedLogin = () => {
    login.elements.errorMessage().should('contains.text', 'Invalid credentials')
}

export const validatingLogin = () => {
    login.elements.selectAccount().should('be.visible')
}

export const clickSelectAccount = () => {
    login.elements.selectAccount().click()
}

export const selectTenant = (tenant) => {
    cy.get('li').contains(tenant).click()
}

export const clickContinue = () => {
    login.elements.continueButton().click()
}

export const validateHomepage = () => {
    login.elements.logo().should('be.visible')
}

export const clickAlpsLogo = () => {
    login.elements.logo().click({ force: true })
}