import * as kgaAction from '../../../../pages/commands/kgahomepage'
import * as opAction from '../../../../pages/commands/oppurtunityPlanning'

/* eslint-disable cypress/no-unnecessary-waiting */
describe('As a Project user', () => {
    beforeEach(() => {
        cy.loginUser()
        cy.restoreLocalStorage()
    })
    afterEach(() => {
        cy.saveLocalStorage()
    })
    it('verify Oppurtunity Planning homepage', () => {
        cy.wait(7000)
        kgaAction.clickProjectTab()
        cy.wait(2000)
        kgaAction.clickOpMenuOption()
        opAction.validateOpSummaryTitle()
        opAction.validateOpLeftToolbar()
        opAction.validateOpRightToolbar()
        opAction.validateOpDownloadButton()
        opAction.validateOpEditThemesButton()
        opAction.validateOpSummaryContainers()
        opAction.validateOpResetButtons()
        opAction.validateOpForecastButtons()
        opAction.validateOpTableHead()
        opAction.validateOpMainTable()
        opAction.validateOpTableColumn1()
        opAction.validateOpTableColumn2()
        opAction.validateOpTableColumn3()
        opAction.validateOpTableColumn4()
    })
})
