/* eslint-disable cypress/no-unnecessary-waiting */
import * as iframe from 'cypress-iframe'

import * as prtTA from '../../../../pages/commands/PrtTopicalAuthority'
import { prtTopicalAuthority } from '../../../../pages/page-selectors/PrtTopicalAuthorityPage'

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
    it('verify Topical Authority homepage', () => {
        cy.wait(7000)
        prtTA.clickPlanningAndResearch()
        prtTA.clickTopicalAuthority()
        prtTA.waitForIframeLoad()
        prtTA.validateSearchEngineLabel()
        cy.enter(prtTopicalAuthority.elements.iFrame, prtTopicalAuthority.elements.iFrameUrl).then(getBody => {
            cy.wait(7000)
            prtTA.validateFiltersContainer(getBody)
            prtTA.validateTableTitleCategory(getBody)
            prtTA.validateTableContainer(getBody)
        })
        prtTA.clickDomainTab()
        prtTA.waitForIframeLoad()
        prtTA.validateSearchEngineLabel()
        cy.enter(prtTopicalAuthority.elements.iFrame, prtTopicalAuthority.elements.iFrameUrl).then(getBody => {
            cy.wait(7000)
            prtTA.validateFiltersContainer(getBody)
            prtTA.validateTableTitleDomain(getBody)
            prtTA.validateTableContainer(getBody)
        })
    })
})
