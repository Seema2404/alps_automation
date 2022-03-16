import * as loginAction from '../../pages/commands/login'
import * as krtHome from '../../pages/commands/KRT-HomePage'
import * as krtSearch from '../../pages/commands/KRT-SearchPage'

describe ('As KRT user', () => {
    let data
    before(() => {
        cy.loginUser('Iquanti Inc', 1)
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

    it('AL-T1288 :  Verify user is able to search related Keywords for a URL', () => {
        loginAction.clickAlpsLogo()
        krtHome.clickPlanningAndResearch()
        krtHome.clickKeywordResearch()
        krtHome.enterRelatedKeyword(data.url)
        krtHome.clickSearch()
    })
})