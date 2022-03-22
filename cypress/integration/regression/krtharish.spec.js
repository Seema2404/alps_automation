import * as loginAction from '../../pages/commands/login'
import * as krtHome from '../../pages/commands/KRT-HomePage'
import * as krtSearch from '../../pages/commands/KRT-SearchPage'
import { krtHomePg } from '../../pages/page-selectors/krtHomePage'

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

    it('AL-T1306,AL-T1307 : Verify Search button is disabled till all the data is loaded on the Suggested Keyword for a Keyword', () => {
        loginAction.clickAlpsLogo()
        krtHome.clickPlanningAndResearch()
        krtHome.clickKeywordResearch()
        krtHome.clickSelectorLocaleDdn()
        krtHome.enterLocale(data.locale)
        krtHome.enterRelatedKeyword(data.url)
        krtHome.clickSearch()

        // validate the disable of the search button

        krtHome.dispsearchBtn()
        // krtHome.dispexportIcon()
       
    })

    it('AL-T1308 :Verify that no Relevance score calculated notification is displayed if no relevance is calculated', () => {
        loginAction.clickAlpsLogo()
        krtHome.clickPlanningAndResearch()
        krtHome.clickKeywordResearch()
        krtHome.clickSelectorLocaleDdn()
        krtHome.enterLocale(data.locale)
        krtHome.enterRelatedKeyword(data.invalidKWKrt)
        krtHome.clickSearch()

        // validate the disabalement of the search button

        krtHome.dispnotificationversion(data.NoKWSuggestionNotification)
       
    })

    it('AL-T1309 :Verify that user is able to close the No Relevance score calculation notification', () => {
        loginAction.clickAlpsLogo()
        krtHome.clickPlanningAndResearch()
        krtHome.clickKeywordResearch()
        krtHome.clickSelectorLocaleDdn()
        krtHome.enterLocale(data.locale)
        krtHome.enterRelatedKeyword(data.invalidKWKrt)
        krtHome.clickSearch()
        krtHome.clickcloseNotificationVersion()

        // validate the disabalement of the search button
        krtHome.NtificationShouldnotVisibleVersion()
        
       
    })

    

    it('AL-T1310,Al-T1311 :Verify user is able to sort the table with Keyword,Search volume', () => {
        loginAction.clickAlpsLogo()
        krtHome.clickPlanningAndResearch()
        krtHome.clickKeywordResearch()
        krtHome.clickSelectorLocaleDdn()
        krtHome.enterLocale(data.locale)
        krtHome.enterRelatedKeyword(data.sovProduct)
        krtHome.clickSearch()
        cy.wait(2000)
        krtHome.clickKeywordSortingIcon()
        
        // Validate the search vlume and keyword sorting order
        krtHome.validateSortingOfKW() 
        cy.wait(2000)
        krtHome.clickSearchVolumeIcon()
        krtHome.validateSortingOfsearchVolume()

        cy.wait(2000)

        krtHome.clickkeywordRelevanceIconIcon()
        krtHome.validatekeywordRelevanceValue()

       
    })
	
	
	
})