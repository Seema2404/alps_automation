/* eslint-disable cypress/no-unnecessary-waiting */
import * as iframe from 'cypress-iframe'

import * as prtKA from '../../pages/commands/prtKeywordExplorer'
import { prtKeywordExplorer } from '../../pages/page-selectors/PrtKeywordExplorerPage'

describe('As a PRT user', () => {
    before(() => {
        cy.loginUser('Testing')
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
        cy.get('#breadcrumb + div div div div:nth-child(1) span').should('have.text', 'Search engine')
        cy.enter(prtKeywordExplorer.elements.iFrame, prtKeywordExplorer.elements.iFrameUrl).then(getBody => {
            // getBody().find('.value title').should('contains.text', sv)
            cy.wait(7000)
            getBody().find('.scrollWrapper div p span').contains('FILTERS')
                .should('be.visible')
            getBody().find('.scrollWrapper div p span').contains('Keyword Explorer')
                .should('be.visible')
            getBody().find('h3.preTextWithEllipsis').contains('Search Volume')
                .should('be.visible')
            getBody().find('h3.preTextWithEllipsis').contains('Keyword Count')
                .should('be.visible')
        })
    })
})
