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
        kgaAction.enterURL(data.kgaUrl)
        kgaAction.enterKeyword(data.kgaKeyword)
        kgaAction.clickGo()
        cy.wait(2000)
        kgaAction.clickSerpKgaButton()
        kgaAction.verifyDownloadButton()
    })
})