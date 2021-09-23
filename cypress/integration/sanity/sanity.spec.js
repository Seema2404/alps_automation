import * as loginAction from '../../pages/commands/login'
import * as kgaAction from '../../pages/commands/kgahomepage'

describe('As an ALPS user', () => {
    let data

    before(() => {
        cy.visitWithBaseAuth('')
        cy.loginUser()
        cy.fixture('userData').then((userData) => {
            data = userData
        })
    })
    beforeEach(() => {
        cy.restoreLocalStorage()
    })
    afterEach(() => {
        cy.saveLocalStorage()
    })
    it('I should land on proper homepage', () => {
        loginAction.validateHomepage()
    })
    it('I should be able to verify top 10 organic rank URLs on SERP page', () => {
        kgaAction.selectLocale(data.locale)
        kgaAction.enterKeyword(data.keyword)
        kgaAction.enterURL(data.url)
        kgaAction.clickGo()
        kgaAction.validateResultsPage()
        kgaAction.validateRankingURLs()
    })
})
