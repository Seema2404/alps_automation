import * as prtKA from '../../pages/commands/prtKeywordExplorer'
import * as iframe from 'cypress-iframe'

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
    it('verify Share Of Voice homepage', () => {
        cy.wait(7000)
        prtKA.clickPlanningAndResearch()
        // prtKA.clickKeywordExplorer()
        cy.get('a').contains('SHARE OF VOICE').click()
        prtKA.waitForIframeLoad()
        cy.get('#breadcrumb + div + div div div div:nth-child(1) span').should('have.text','Search engine')
        cy.enter(prtKeywordExplorer.elements.iFrame, prtKeywordExplorer.elements.iFrameUrl).then(getBody => {
            cy.wait(7000)
            getBody().find('.scrollWrapper div p span').contains('FILTERS').should('be.visible')
            getBody().find('h3.preTextWithEllipsis').contains('Search Volume').should('be.visible')
            getBody().find('h3.preTextWithEllipsis').contains('Keyword Count').should('be.visible')
            getBody().find('.scrollWrapper div p span').contains('Share of Voice by Business Type').should('be.visible')
            getBody().find('.scrollWrapper div p span').contains('Share of Voice by Domain').should('be.visible')
            getBody().find('svg.cartesianChart').should('be.visible')
            getBody().find('div.tableExContainer').should('be.visible')
        })
        cy.get('#share-of-voice-category-url').click()
        prtKA.waitForIframeLoad()
        cy.get('#breadcrumb + div + div div div div:nth-child(1) span').should('have.text','Search engine')
        cy.enter(prtKeywordExplorer.elements.iFrame, prtKeywordExplorer.elements.iFrameUrl).then(getBody => {
            cy.wait(7000)
            getBody().find('.scrollWrapper div p span').contains('FILTERS').should('be.visible')
            getBody().find('h3.preTextWithEllipsis').contains('Search Volume').should('be.visible')
            getBody().find('h3.preTextWithEllipsis').contains('Keyword Count').should('be.visible')
            getBody().find('h3.preTextWithEllipsis').contains('Traffic').should('be.visible')
            getBody().find('h3.preTextWithEllipsis').contains('Share of Voice').should('be.visible')
            getBody().find('.scrollWrapper div p span').contains('Share of Voice by Category').should('be.visible')
            getBody().find('div.pivotTableContainer').should('be.visible')
        })
        cy.get('#share-of-voice-trends-url').click()
        prtKA.waitForIframeLoad()
        cy.get('#breadcrumb + div + div div div div:nth-child(1) span').should('have.text','Search engine')
        cy.enter(prtKeywordExplorer.elements.iFrame, prtKeywordExplorer.elements.iFrameUrl).then(getBody => {
            cy.wait(7000)
            getBody().find('.scrollWrapper div p span').contains('FILTERS').should('be.visible')
            getBody().find('button.themableBackgroundColor span').contains('SELECT THE METRIC').should('be.visible')
            getBody().find('.scrollWrapper div p span').contains('Share of Voice Trends').should('be.visible')
            getBody().find('svg.cartesianChart').should('be.visible')
            getBody().find('button.themableBackgroundColor span').contains('Traffic').click({force: true})
            cy.wait(5000)
            getBody().find('.scrollWrapper div p span').contains('Traffic Trends').should('be.visible')
            getBody().find('svg.cartesianChart').should('be.visible')
        })
    })
})