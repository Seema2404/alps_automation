/* eslint-disable cypress/no-unnecessary-waiting */
import * as iframe from 'cypress-iframe'

import * as prtKA from '../../../../pages/commands/prtKeywordExplorer'
import { prtKeywordExplorer } from '../../../../pages/page-selectors/PrtKeywordExplorerPage'

describe('As a PRT user', () => {
    before(() => {
        cy.loginUser('Iquanti Inc', 2)
    })
    beforeEach(() => {
        cy.restoreLocalStorage()
    })
    afterEach(() => {
        cy.saveLocalStorage()
    })
    it('verify Topical Authority homepage', () => {
        cy.wait(7000)
        prtKA.clickPlanningAndResearch()
        cy.get('a').contains('TOPICAL AUTHORITY').click()
        prtKA.waitForIframeLoad()
        cy.get('#breadcrumb + div + div div div div:nth-child(1) span').should('have.text', 'Search engine')
        cy.enter(prtKeywordExplorer.elements.iFrame, prtKeywordExplorer.elements.iFrameUrl).then(getBody => {
            cy.wait(7000)
            getBody().find('.scrollWrapper div p span').contains('FILTERS')
                .should('be.visible')
            getBody().find('h3.preTextWithEllipsis').contains("Topical Authority report for category 'Balance Transfer'")
                .should('be.visible')
            getBody().find('div.tableExContainer').should('be.visible')
        })
        cy.get('#topical-authority-domain-tab').click()
        prtKA.waitForIframeLoad()
        cy.get('#breadcrumb + div + div div div div:nth-child(1) span').should('have.text', 'Search engine')
        cy.enter(prtKeywordExplorer.elements.iFrame, prtKeywordExplorer.elements.iFrameUrl).then(getBody => {
            cy.wait(7000)
            getBody().find('.scrollWrapper div p span').contains('FILTERS')
                .should('be.visible')
            getBody().find('h3.preTextWithEllipsis').contains('Topical Authority report for domain')
                .should('be.visible')
            getBody().find('div.tableExContainer').should('be.visible')
        })
    })
})
