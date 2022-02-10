/* eslint-disable cypress/no-unnecessary-waiting */
import * as iframe from 'cypress-iframe'

import * as prtKA from '../../../../pages/commands/prtKeywordExplorer'
import { prtKeywordExplorer } from '../../../../pages/page-selectors/PrtKeywordExplorerPage'

describe('As a PRT user', () => {
    before(() => {
        cy.loginUser()
    })
    beforeEach(() => {
        cy.restoreLocalStorage()
    })
    afterEach(() => {
        cy.saveLocalStorage()
    })
    it('verify Keyword Explorer homepage', () => {
        cy.wait(7000)
        prtKA.clickPlanningAndResearch()
        prtKA.clickKeywordExplorer()
        prtKA.waitForIframeLoad()
        prtKA.validateSearchEngineLabel()
        cy.enter(prtKeywordExplorer.elements.iFrame, prtKeywordExplorer.elements.iFrameUrl).then(getBody => {
            cy.wait(7000)
            prtKA.validateFiltersContainer(getBody)
            prtKA.validateKeywordExplorerSection(getBody)
            prtKA.validateSearchVolumeSection(getBody)
            prtKA.validateKeywordCountSection(getBody)
        })
    })
})
