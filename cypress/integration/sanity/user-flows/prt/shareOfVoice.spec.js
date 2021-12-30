/* eslint-disable cypress/no-unnecessary-waiting */
import * as iframe from 'cypress-iframe'

import * as prtSOF from '../../../../pages/commands/prtShareOfVoice'
import { prtShareOfVoice } from '../../../../pages/page-selectors/PrtShareOfVoicePage'

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
    it('verify Share Of Voice homepage', () => {
        cy.wait(7000)
        prtSOF.clickPlanningAndResearch()
        prtSOF.clickShareOfVoice()
        prtSOF.waitForIframeLoad()
        prtSOF.validateSearchEngineLabel()
        cy.enter(prtShareOfVoice.elements.iFrame, prtShareOfVoice.elements.iFrameUrl).then(getBody => {
            cy.wait(7000)
            prtSOF.validateFiltersContainer(getBody)
            prtSOF.validateSearchVolumeSection(getBody)
            prtSOF.validateKeywordCountSection(getBody)
            prtSOF.validateShareOfVoiceByDomain(getBody)
        })
    })
})
