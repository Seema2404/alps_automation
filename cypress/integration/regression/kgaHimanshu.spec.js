// This is a test comment
import * as kgaAction from '../../pages/commands/kgahomepage'
import * as loginAction from '../../pages/commands/login'
import { kga } from '../../pages/page-selectors/KGAHomePage'

describe('As a KGA user', () => {
    let kgaData, data
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
    it('AL-T412: Verify the behavior of download button when Keyword Crawl status is not 100 percent', () => {
        loginAction.clickAlpsLogo()
        kgaAction.enterURL(data.simHeadingValidationURl)
        kgaAction.enterKeyword(data.sovProduct)
        kgaAction.clickGo()
        kgaAction.clickSerpKgaButton()
        kgaAction.verifyDownloadButton()
    })
    it('AL-T1269: verify the CAT score in KGA page', () => {
        loginAction.clickAlpsLogo()
        kgaAction.enterURL(data.SimURL)
        kgaAction.enterKeyword(data.NonLiveKW)
        kgaAction.clickGo()
        kgaAction.clickSerpKgaButton()
        kgaAction.validateKgaContentScoreLabel()
        kgaAction.validateKgaAuthorityScoreLabel()
        kgaAction.validateKgaTechnicalScoreLabel()
    })
    it('AL-T1274: Verify the score of target and compitator Url in kga page By selecting/ changing the compitator Url in dropdown', () => {
        loginAction.clickAlpsLogo()
        kgaAction.enterURL(data.SimURL)
        kgaAction.enterKeyword(data.NonLiveKW)
        kgaAction.clickGo()
        kgaAction.clickSerpKgaButton()
        cy.wait(3000)
        kgaAction.retriveScoreCompetitorFromKga()
        kgaAction.changeCompetitorUrlFromKga()
        kgaAction.verifyRetriveScoreCompetitorFromKga()
    })
})