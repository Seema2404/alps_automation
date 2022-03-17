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

    it('AL-T1288 : Verify user is able to search related Keywords for a URL', () => {
        loginAction.clickAlpsLogo()
        krtHome.clickPlanningAndResearch()
        krtHome.clickKeywordResearch()
        krtHome.clickSelectorLocaleDdn()
        krtHome.enterLocale(data.locale)
        krtHome.enterRelatedKeyword(data.Url)
        krtHome.clickSearch()

        //verify navigate to search page
        krtSearch.verifyKrtSearchPage(data.krtUrlPath)
        //verify same url in search page 
        krtSearch.verifySearchBoxKeyword(data.Url)
        //verify same locale in search page
        krtSearch.verifyLocaleText(data.locale)
    })

    it('AL-T1289 : Verify user is able to change the locale on KRT search page', () => {
        loginAction.clickAlpsLogo()
        krtHome.clickPlanningAndResearch()
        krtHome.clickKeywordResearch()
        krtHome.enterRelatedKeyword(data.keyword)
        krtHome.clickSearch()
        krtSearch.clickSelectorLocaleDdn()
        krtSearch.updateLocale(data.locale)

        //verify updated Locale in search page
        krtSearch.verifyLocaleText(data.locale)
    })

    it('AL-T1290 : Verify user is able to change the URL on the KRT search page', () => {
        loginAction.clickAlpsLogo()
        krtHome.clickPlanningAndResearch()
        krtHome.clickKeywordResearch()
        krtHome.enterRelatedKeyword(data.Url)
        krtHome.clickSearch()
        krtSearch.updateKeywordOrURL(data.SimURL)

        //verify updated URL in search page
        krtSearch.verifyUpdateKeywordOrURL(data.SimURL)
    })

    it('AL-T1291 : Verify when user enter a URL then  URL is selected on the Autoselect Keyword/URL dropdown', () => {
        loginAction.clickAlpsLogo()
        krtHome.clickPlanningAndResearch()
        krtHome.clickKeywordResearch()
        krtHome.enterRelatedKeyword(data.Url)

        //verify autoselected URL dropdown when enter complete URL
        krtHome.verifyKeywordUrlDdnText(data.Url)
        krtHome.clickSearch()
        krtSearch.verifyKeywordUrlDdnText(data.Url)

    })

    it('AL-T1292 : Verify when user enters a Keyword then Keyword is selected on the Autoselect Keyword/URL dropdown', () => {
        loginAction.clickAlpsLogo()
        krtHome.clickPlanningAndResearch()
        krtHome.clickKeywordResearch()
        krtHome.enterRelatedKeyword(data.keyword)

        //verify autoselected Keyword dropdown when enter keyword
        krtHome.verifyKeywordUrlDdnText(data.keyword)
        krtHome.clickSearch()
        krtSearch.verifyKeywordUrlDdnText(data.keyword)
    })

    it('AL-T1293 : Verify user is able to search related keywords after changing the already existing Keyword on the input URL/Keyword field', () => {
        loginAction.clickAlpsLogo()
        krtHome.clickPlanningAndResearch()
        krtHome.clickKeywordResearch()
        krtHome.enterRelatedKeyword(data.keyword)
        krtHome.clickSearch()
        krtSearch.updateKeywordOrURL(data.searchKeyword)
        krtSearch.clickSearch()
        //verify fetch result for given keyword
        krtSearch.verifySearchResultByKeyword(data.searchKeyword)
    })

    it('AL-T1294 : Verify user is able to search related keywords after changing the already existing URL on the input URL/Keyword field', () => {
        loginAction.clickAlpsLogo()
        krtHome.clickPlanningAndResearch()
        krtHome.clickKeywordResearch()
        krtHome.enterRelatedKeyword(data.Url)
        krtHome.clickSearch()
        krtSearch.updateKeywordOrURL(data.SimURL)
        krtSearch.clickSearch()
        cy.wait(2000)
        krtSearch.verifySearchResultByURL(data.SimURL)
    })

})