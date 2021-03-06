import * as kgaAction from '../../pages/commands/kgahomepage'
import * as simAction from '../../pages/commands/simulation'
import * as loginAction from '../../pages/commands/login'
import { kga } from '../../pages/page-selectors/KGAHomePage'

describe('As a KGA user', () => {
    let data
    before(() => {
        // Clear downloads folder
        cy.exec('del /q "cypress\\downloads\\*.*"', { log: true, failOnNonZeroExit: false })
        cy.exec('rm cypress/downloads/*', { log: true, failOnNonZeroExit: false })

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
    it('AL-T413:Verify the behavior of download button when Keyword Crawl status is 100 percent', () => {
        loginAction.clickAlpsLogo()
        kgaAction.enterURL(data.kgaURL)
        kgaAction.enterKeyword(data.kgaKeyword)
        kgaAction.clickGo()
        cy.wait(2000)
        kgaAction.clickSerpKgaButton()
        kgaAction.clickDownloadButton()
    })

    it('AL-T503:Verify the presence of info icon for SV on Serp page', () =>{
        loginAction.clickAlpsLogo()
        kgaAction.enterURL(data.kgaURL)
        kgaAction.enterKeyword(data.kgaKeyword)
        kgaAction.clickGo()
        cy.wait(2000)
        kgaAction.verifySearchVolumeText()
        kgaAction.verifySVGIconSerpResultInfo()
    })

    it('AL-T504:Verify the presence of info icon for SV on KGA page', () => {
        loginAction.clickAlpsLogo()
        kgaAction.enterURL(data.kgaURL)
        kgaAction.enterKeyword(data.kgaKeyword)
        kgaAction.clickGo()
        cy.wait(2000)
        kgaAction.clickSerpKgaButton()
        kgaAction.verifyKgaSvgIcon()
        kgaAction.verifyKgaSearchVolumeText()
    })

    it('AL-T505:Verify the presence of info icon for SV on Simulation page inside the keyword-level impact pop-up', () => {
        loginAction.clickAlpsLogo()
        kgaAction.enterURL(data.kgaURL)
        kgaAction.enterKeyword(data.kgaKeyword)
        kgaAction.clickGo()
        cy.wait(2000)
        kgaAction.clickSerpSimulationButton()
        kgaAction.verifySimulationSvgIcon()
        kgaAction.verifyPageSimulationSvgInfoText()
    })

    it('AL-T506:Verify the presence of info icon for SV In the Simulation page in Zoom mode next to the Keyword impact.', () => {
        loginAction.clickAlpsLogo()
        kgaAction.enterURL(data.kgaURL)
        kgaAction.enterKeyword(data.kgaKeyword)
        kgaAction.clickGo()
        cy.wait(2000)
        kgaAction.clickSerpSimulationButton()
        kgaAction.clickPageSimulationModifyButton()
        kgaAction.clickPageSimulationZoomButton()
        kgaAction.verifyZoomKeywordImpactSvgIcon()
        kgaAction.verifyZoomKeywordImpactSvgText()
    })

    it('AL-1208:Verify the scenario when user type keyword(any special character)and url with # characters', () =>{
        loginAction.clickAlpsLogo()
        kgaAction.enterKeyword(data.kgaKeyword)
        kgaAction.enterURL(data.kgaUrlSpecialChar)
        //verify entred url with special character error on Home page
        kgaAction.verifyKgaHomePageUrlError()
        //verify error message text
        kgaAction.verifyKgaHomePageUrlErrorText()
    })

    it('AL-T1209:Verify the scanario when user enter any invalid url with # in it', () => {
        loginAction.clickAlpsLogo()
        kgaAction.enterKeyword(data.kgaKeyword)
        kgaAction.enterURL(data.kgaInvalidUrl)
        //verify url error message
        kgaAction.verifyUrlError()
        kgaAction.verifyUrlErrorText()
        kgaAction.clickGo()
        //verify Invalid URL message
        kgaAction.verifyInvalidUrlText()
    })
    
    it('AL-T1214:Verify the scenario when user enters url with # in it and it doesn???t rank', () => {
        loginAction.clickAlpsLogo()
        kgaAction.enterKeyword(data.kgaKeyword)
        kgaAction.enterURL(data.kgaUrlSpecialChar)
        kgaAction.clickGo()
        kgaAction.verifyKgaUrlRank()
    })

    it('AL-T1268:verify the page heading in KGA page', () =>{
        loginAction.clickAlpsLogo()
        kgaAction.enterKeyword(data.kgaKeyword)
        kgaAction.enterURL(data.kgaURL)
        kgaAction.clickGo()
        //verfiy the page heading on KGA
        kgaAction.validateResultsPage()
    })

    it('AL-T1270:Verify the content parameter and score separately in KGA page', () =>{
        loginAction.clickAlpsLogo()
        kgaAction.enterKeyword(data.kgaKeyword)
        kgaAction.enterURL(data.kgaURL)
        kgaAction.clickGo()
        kgaAction.clickSerpKgaButton()
        kgaAction.clickKgaKeywordPageRelevance()
        //verify All content parameter score in KW page relevance
        kgaAction.verifyKgaContentParameterH2Score()
        kgaAction.verifyKgaContentParameterH1Score()
        kgaAction.verifyKgaContentParameterMetaDisScore()
        kgaAction.verifyKgaContentParameterBodyConScore()
        kgaAction.verifyKgaContentParameterUrlScore()
        kgaAction.verifyKgaContentParameterTitleScore()
    })

    it('AL-T1271:Verify the TECHNICAL parameter and score separately in KGA page', () =>{
        loginAction.clickAlpsLogo()
        kgaAction.enterKeyword(data.kgaKeyword)
        kgaAction.enterURL(data.kgaURL)
        kgaAction.clickGo()
        kgaAction.clickSerpKgaButton()
        cy.wait(3000)
        kgaAction.clickKgaTechnicalTab()
        //verify all technical parameter in KGA page 
        kgaAction.verifyKgaTechnicalParameterOptimal()
        kgaAction.verifyKgaTechnicalParameterCoreWeb()
        kgaAction.verifyKgaTechnicalParameterOtherWeb()
    })

    it('AL-T1272:Verify the AUTHORITY parameter and score separately in KGA page', () =>{
        loginAction.clickAlpsLogo()
        kgaAction.enterKeyword(data.kgaKeyword)
        kgaAction.enterURL(data.kgaURL)
        kgaAction.clickGo()
        kgaAction.clickSerpKgaButton()
        cy.wait(3000)
        kgaAction.clickKgaAuthorityTab()
        //verify all technical parameter in KGA page
        kgaAction.verifyKgaAuthorityParameterPage()
        kgaAction.verifyKgaAuthorityParameterDomain()
        kgaAction.verifyKgaAuthorityParameterKeyword()
    })

    it('AL-T1273:verify the accordian section in KGA page.',() =>{
        loginAction.clickAlpsLogo()
        kgaAction.enterKeyword(data.kgaKeyword)
        kgaAction.enterURL(data.kgaURL)
        kgaAction.clickGo()
        kgaAction.clickSerpKgaButton()
        kgaAction.clickKgaAccordianPage()
        //verify KW and URL allow to change on accordian page
        kgaAction.verifyKgaAccordianPageUrlSearch(data.dummyUrl)
        kgaAction.verifyKgaAccordianPageKeywordSearch(data.dummyKeyword)
    })

    it('AL-T1277:verify the high low medium ,very high, very low value based on check box section in KGA page under Authority page',() =>{
        loginAction.clickAlpsLogo()
        kgaAction.enterKeyword(data.kgaKeyword)
        kgaAction.enterURL(data.kgaURL)
        kgaAction.clickGo()
        kgaAction.clickSerpKgaButton()
        cy.wait(2000)
        //active very high filter option
        kgaAction.clickVerifyHighFilterOption()
        kgaAction.clickKgaKeywordPageRelevance()
        //verify value base on very high filter option check box
        kgaAction.verifyKgaContentParameterBodyConScore()
        kgaAction.verifyKgaContentParameterTitleScore()
        //deactive very high filter option
        kgaAction.clickVerifyHighFilterOption()
        //active high filter option
        kgaAction.clickHighFilterOption()
        kgaAction.clickKgaKeywordPageRelevance()
        //verify value base on high filter option check box
        kgaAction.verifyKgaContentParameterH1Score()
        //deactive high filter option
        kgaAction.clickHighFilterOption()
        //active medium filter option
        kgaAction.clickMediumFilterOption()
        kgaAction.clickKgaKeywordPageRelevance()
        //verify value base on medium filter option check box
        kgaAction.verifyKgaContentParameterH2Score()
        kgaAction.verifyKgaContentParameterMetaDisScore()
        //deactive medium filter option
        kgaAction.clickMediumFilterOption()
        //active low filter option
        kgaAction.clickLowFilterOption()
        kgaAction.clickKgaKeywordPageRelevance()
        //verfiy value base on low filter option check box
        kgaAction.verifyKgaContentParameterUrlScore()
        //deactive low filter option
        kgaAction.clickLowFilterOption()
        //active very low filter option
        kgaAction.clickVeryLowFilterOPtion()
        //verify value base on very low filter option
        kgaAction.verifyKgaKeywordPageRelevance()
    })

    it('AL-T1278: verify the high low medium ,very high, very low value based on check box section in KGA page under technical page',() =>{
        loginAction.clickAlpsLogo()
        kgaAction.enterKeyword(data.kgaKeyword)
        kgaAction.enterURL(data.kgaURL)
        kgaAction.clickGo()
        kgaAction.clickSerpKgaButton()
        cy.wait(2000)
        kgaAction.clickKgaTechnicalTab()
        //active very high filter option
        kgaAction.clickVerifyHighFilterOption()
        //verify value based on very high filter option
        kgaAction.notVisibleKgaTechnicalParameterOptimal()
        kgaAction.notVisibleKgaTechnicalParameterCoreWeb()
        kgaAction.notVisibleKgaTechnicalParameterOtherWeb()
        //deactive very high filter option
        kgaAction.clickVerifyHighFilterOption()
        //active high filter option
        kgaAction.clickHighFilterOption()
        //verify value based on high filter option
        kgaAction.verifyKgaTechnicalParameterOptimal()
        kgaAction.verifyKgaTechnicalParameterOtherWeb()
        //deactive high filter option
        kgaAction.clickHighFilterOption()
        //active medium filter option
        kgaAction.clickMediumFilterOption()
        //verify value based on medium filter option
        kgaAction.notVisibleKgaTechnicalParameterOptimal()
        kgaAction.notVisibleKgaTechnicalParameterCoreWeb()
        kgaAction.notVisibleKgaTechnicalParameterOtherWeb()
        //deactive medium filter option
        kgaAction.clickMediumFilterOption()
        //active low filter option
        kgaAction.clickLowFilterOption()
        //verify value based on low filter option
        kgaAction.notVisibleKgaTechnicalParameterOptimal()
        kgaAction.notVisibleKgaTechnicalParameterCoreWeb()
        kgaAction.notVisibleKgaTechnicalParameterOtherWeb()
        //deactive low filter option
        kgaAction.clickLowFilterOption()
        //active very low filter option
        kgaAction.clickVeryLowFilterOPtion()
        //verify value based on low filter option
        kgaAction.verifyKgaTechnicalParameterOptimal()
    })

    it('AL-T1280:validate the Traffic and CTR value in KGA page', () => {
        loginAction.clickAlpsLogo()
        kgaAction.enterKeyword(data.kgaKeyword)
        kgaAction.enterURL(data.kgaURL)
        kgaAction.clickGo()
        kgaAction.clickSerpKgaButton()
        kgaAction.clickKgaKeywordPerformanceLabel()
        //verify Traffic and CRT valaue on KGA page
        kgaAction.verifyKgaKeywordPerformanceTrafficValue()
        kgaAction.verifyKgaKeywordPerformanceCrtValue()
    })

    it('AL-T1281:Verify the Scenario when User clicks on Simulation button in KGA/SERP page', () => {
        loginAction.clickAlpsLogo()
        kgaAction.enterKeyword(data.kgaKeyword)
        kgaAction.enterURL(data.kgaURL)
        kgaAction.clickGo()
        kgaAction.clickSerpSimulationButton()
        //verify able to see simulation page
        kgaAction.validateSimulationPage()

    })
})