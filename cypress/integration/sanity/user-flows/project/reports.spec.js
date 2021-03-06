import * as kgaAction from '../../../../pages/commands/kgahomepage'
import * as reportsAction from '../../../../pages/commands/reports'

/* eslint-disable cypress/no-unnecessary-waiting */
describe('As a Project user', () => {
    beforeEach(() => {
        cy.loginUser()
        cy.restoreLocalStorage()
    })
    afterEach(() => {
        cy.saveLocalStorage()
    })
    it('verify Reports homepage - Dashboard', () => {
        cy.wait(7000)
        kgaAction.clickProjectTab()
        cy.wait(2000)
        kgaAction.clickReportsMenuOption()
        reportsAction.validateReportsLeftToolbar()
        reportsAction.validateReportsRightToolbar()
        reportsAction.validateReportsDownloadButton()
        reportsAction.validateEditKeywordsButton()
        reportsAction.validateRankDistributionHeading()
        reportsAction.clickBrandedTab()
        cy.wait(2000)
        reportsAction.clickAllKeywordsTab()
        cy.wait(2000)
        reportsAction.validateShareOfSearchHeading()
        reportsAction.validateOrganicKeywordTrafficHeading()
        reportsAction.validateTopGainingKeywordsContainer()
        reportsAction.validateTopLosingKeywordsContainer()
        reportsAction.validateTrafficContainer()
        reportsAction.validateConversationsContainer()
        reportsAction.validateSalesCompletionContainer()
        reportsAction.validateTrafficTreandContainer()
    })
    it('verify Reports homepage - Keywords', () => {
        cy.wait(7000)
        kgaAction.clickProjectTab()
        cy.wait(2000)
        kgaAction.clickReportsMenuOption()
        reportsAction.clickKeywordsTab()
        reportsAction.validateReportsLeftToolbar()
        reportsAction.validateReportsRightToolbar()
        reportsAction.validateReportsDownloadButton()
        reportsAction.validateEditKeywordsButton()
        reportsAction.validateKeywordsTitle()
        reportsAction.validateKeywordsMainTable()
        reportsAction.validateKeywordsTableColumn1()
        reportsAction.validateKeywordsTableColumn2()
        reportsAction.validateKeywordsTableColumn3()
        reportsAction.validateKeywordsTableColumn4()
        reportsAction.validateKeywordsTableColumn5()
    })
    it('verify Reports homepage - Themes', () => {
        cy.wait(7000)
        kgaAction.clickProjectTab()
        cy.wait(2000)
        kgaAction.clickReportsMenuOption()
        reportsAction.clickThemesTab()
        reportsAction.validateReportsLeftToolbar()
        reportsAction.validateReportsRightToolbar()
        reportsAction.validateReportsDownloadButton()
        reportsAction.validateEditKeywordsButton()
        reportsAction.validateThemesTitle()
        reportsAction.validateThemesMainTable()
        reportsAction.validateThemesMainTableHeader()
        reportsAction.validateThemesTableColumn1()
        reportsAction.validateThemesTableColumn2()
        reportsAction.validateThemesTableColumn3()
        reportsAction.validateThemesTableColumn4()
        reportsAction.validateThemesTableColumn5()
        reportsAction.validateThemesTableColumn6()
    })
    it('verify Reports homepage - Competition', () => {
        cy.wait(7000)
        kgaAction.clickProjectTab()
        cy.wait(2000)
        kgaAction.clickReportsMenuOption()
        reportsAction.clickCompTab()
        reportsAction.validateReportsLeftToolbar()
        reportsAction.validateReportsRightToolbar()
        reportsAction.validateReportsDownloadButton()
        reportsAction.validateCompTitle()
        reportsAction.validateCompareCompetitonAcrossThemesButton()
        reportsAction.validateThemesMainTable()
        reportsAction.validateCompTableHeader()
        reportsAction.validateCompTableHeaderTab()
        reportsAction.validateCompTableColumn1()
        reportsAction.validateCompTableColumn2()
        reportsAction.validateCompTableColumn3()
    })
})
