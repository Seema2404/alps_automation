import * as kgaAction from '../../pages/commands/kgahomepage'
import * as loginAction from '../../pages/commands/login'

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

    it('AL-T1206 : Verify the scenario when user enter keyword with special character and url without # special character', () => {
        loginAction.clickAlpsLogo()
        kgaAction.enterURL(data.kgaUrl)
        kgaAction.enterKeyword(data.kgaKeywordSpecChar)
        kgaAction.clickGo()
        cy.wait(2000)
        //verify navigate to SERP page when enter kw is specChar
        kgaAction.verifySerpResultURL(data.urlPath)
    })

    it('AL-T1207 : Verify the scenario when user start typing the url with # character', () => {
        loginAction.clickAlpsLogo()
        kgaAction.enterURL(data.kgaUrlSpecCharAtStart)
        kgaAction.enterKeyword(data.kgaKeyword)
        kgaAction.clickGo()
        cy.wait(2000)
        //verify error message while enter # 
        kgaAction.VerifyErrorMsg()
    })

    it('AL-T1210 : Verify the scenario for different multiple loacales and url with #', () => {
        loginAction.clickAlpsLogo()
        kgaAction.enterURL(data.kgaUrlSpecCharAtStart)
        kgaAction.enterKeyword(data.kgaKeyword)
        //verify url error message dispay while different locale change
        kgaAction.verifyErrorMsgWhenChangeLocale()
    })

    it('AL-T1211 : Verify the scenario when user paste url with # and goes to serp page', () => {
        loginAction.clickAlpsLogo()
        kgaAction.enterURL(data.kgaUrlSpecChar)
        kgaAction.enterKeyword(data.kgaKeyword)
        kgaAction.clickGo()
        cy.wait(2000)
        //verify the url in Top 10 rank
        kgaAction.verifyURLInTopRanking()
    })

    it('AL-T1212 : Verify the scenario when user paste url with # and matching domain ranks in top 10', () => {
        loginAction.clickAlpsLogo()
        kgaAction.enterURL(data.kgaUrlSpecChar)
        kgaAction.enterKeyword(data.kgaKeyword)
        kgaAction.clickGo()
        cy.wait(2000)
        //verify the domain in Top 10 rank
        kgaAction.verifyDomainInTopRanking()
    })
    
    it('AL-T1215 : Verify the scenario when user enter the url with SV as null', () => {
        loginAction.clickAlpsLogo()
        kgaAction.enterURL(data.kgaUrlSplCharAtMiddle)
        kgaAction.enterKeyword(data.invalidKgaKw)
        kgaAction.clickGo()
        cy.wait(6000)
        //verify url without # in it
        kgaAction.verifyKgaUrlHeader(data.kgaUrlSplCharAtMiddle)
        //verify null Search Volume 
        kgaAction.verifyNullSV()     
    })

})

