import * as iframe from 'cypress-iframe'

import * as prtKA from '../../pages/commands/prtKeywordExplorer'
import * as prtSOF from '../../pages/commands/prtShareOfVoice'
import * as prtTA from '../../pages/commands/PrtTopicalAuthority'
import { prtKeywordExplorer } from '../../pages/page-selectors/PrtKeywordExplorerPage'


describe('As a PRT user', () => {
    before(() => {
        cy.loginUser('Iquanti Inc', 1)
    })
    beforeEach(() => {
        cy.restoreLocalStorage()
    })
    afterEach(() => {
        cy.saveLocalStorage()
    })
    it('AL-T:1075:Verify Sub modules under PRT section', () => {
        cy.wait(7000)
        prtKA.clickPlanningAndResearch()

        // validation of sub modules in 
        prtKA.dispValidateKeywordExplorerSection()
        prtSOF.dispShareOfVoice()
        prtTA.disptopicalAuthority()
    })

    it('AL-T:1076:Verify for a given tenant PRT is enanble', () => {
        cy.wait(7000)
        prtKA.dispPlanningAndResearchTab()
    })
})
