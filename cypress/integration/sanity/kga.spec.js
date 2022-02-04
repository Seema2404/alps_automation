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
})