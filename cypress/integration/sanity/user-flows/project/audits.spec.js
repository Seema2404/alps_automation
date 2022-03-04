import * as kgaAction from '../../../../pages/commands/kgahomepage'
import * as auditsAction from '../../../../pages/commands/audits'

/* eslint-disable cypress/no-unnecessary-waiting */
describe('As a Project user', () => {
    beforeEach(() => {
        cy.loginUser()
        cy.restoreLocalStorage()
    })
    afterEach(() => {
        cy.saveLocalStorage()
    })
    it('verify Audits homepage - Content Gap Analysis', () => {
        cy.wait(7000)
        kgaAction.clickProjectTab()
        cy.wait(2000)
        kgaAction.clickAuditsMenuOption()
        auditsAction.validateCgaTitle()
        auditsAction.validateCgaLeftToolbar()
        auditsAction.validateCgaRightToolbar()
        auditsAction.validateCgaDownloadButton()
        auditsAction.validateCgaTableHead()
        auditsAction.validateCgaMainTable()
        auditsAction.validateCgaTableColumn1()
        auditsAction.validateCgaTableColumn2()
        auditsAction.validateCgaTableColumn3()
        auditsAction.validateCgaTableColumn4()
        auditsAction.validateCgaTableColumn5()
    })
    it('verify Audits homepage - Backlink Analysis', () => {
        cy.wait(7000)
        kgaAction.clickProjectTab()
        cy.wait(2000)
        kgaAction.clickAuditsMenuOption()
        auditsAction.clickBaTab()
        auditsAction.validateBaTitle()
        auditsAction.validateBaPerformanceAnalysisLabel()
        auditsAction.validateBaSelectDomainDropdown()
        auditsAction.validateBaAnalyzeButton()
    })
    it('verify Audits homepage - Tech Audit', () => {
        cy.wait(7000)
        kgaAction.clickProjectTab()
        cy.wait(2000)
        kgaAction.clickAuditsMenuOption()
        auditsAction.clickTaTab()
        auditsAction.validateTaTitle()
        auditsAction.validateTaMyDomainDropdown()
        // auditsAction.validateTaPageCrawledLabel()
        // auditsAction.validateTaIssuesFoundLabel()
        // auditsAction.validateTaImportantTechnicalChecksLabel()
    })
})
