import * as kgaAction from '../pages/commands/kgahomepage'

describe('As a KGA user', () => {
    let kgaData

    before(() => {
        cy.fixture('userData').then((userData) => {
            kgaData = userData
        })
    })
    beforeEach(() => {
        cy.restoreLocalStorage()
    })
    afterEach(() => {
        cy.saveLocalStorage()
    })
    it('I should be able to select the locale', () => {
        kgaAction.selectLocale(kgaData.locale)
    })
    it('I should be able to enter keyword', () => {
        kgaAction.enterKeyword(kgaData.keyword)
    })
    it('I should be able to enter URL', () => {
        kgaAction.enterURL(kgaData.url)
    })
    it('I should be able to initiate KGA request', () => {
        kgaAction.clickGo()
        kgaAction.validateResultsPage()
    })
})
