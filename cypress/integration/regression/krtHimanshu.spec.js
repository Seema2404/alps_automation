import * as loginAction from '../../pages/commands/login'
import * as krtHome from '../../pages/commands/KRT-HomePage'
import * as krtSearch from '../../pages/commands/KRT-SearchPage'

describe('As a KRT user', () => {
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
    it('AL-T1283: Verify user is able to change the Locale on KRT homepage', () => {
        loginAction.clickAlpsLogo()
        krtHome.clickPlanningAndResearch()
        krtHome.clickKeywordResearch()
        krtHome.changeLocaleButton()
        krtHome.selectLocaleFromList()
        krtHome.verifyChnageLocale()
    })
    it('AL-T1284: Verify a validation message is displayed when user give blank spaces on the Keyword/URL field.', () => {
        loginAction.clickAlpsLogo()
        krtHome.clickPlanningAndResearch()
        krtHome.clickKeywordResearch()
        krtHome.clickSearchButton()
        krtHome.VerifyValidationMessage()
    })
    it('AL-T1285, 86: Verify when user enter a URL/Keyword then selected on the Autoselect Keyword/URL dropdown', () => {
        loginAction.clickAlpsLogo()
        krtHome.clickPlanningAndResearch()
        krtHome.clickKeywordResearch()
        krtHome.clickKeywordAndURLTextBox(data.SimURL)
        krtHome.verifyAutoSelectedKeywordUrlFilter(data.SimURL, data.krtUrlDropDwon)
        //AL-T1285 TC start from blow
        krtHome.clickKeywordAndURLTextBox(data.NonLiveKW)
        cy.wait(2000)
        krtHome.verifyAutoSelectedKeywordUrlFilter(data.NonLiveKW, data.krtKeywordDropDwon)
    })
    it('AL-T1287: Verfiy user is able to search related Keywords for a Keyword', () => {
        loginAction.clickAlpsLogo()
        krtHome.clickPlanningAndResearch()
        krtHome.clickKeywordResearch()
        krtHome.clickSelectorLocaleDdn()
        krtHome.enterLocale(data.locale)
        krtHome.enterRelatedKeyword(data.NonLiveKW)
        krtHome.clickSearch()

        //verify navigate to search page
        krtSearch.verifyKrtSearchPage(data.krtUrlPath)
        //verify same url in search page 
        krtSearch.verifySearchBoxKeyword(data.NonLiveKW)
        //verify same locale in search page
        krtSearch.verifyLocaleText(data.locale)
    })
})