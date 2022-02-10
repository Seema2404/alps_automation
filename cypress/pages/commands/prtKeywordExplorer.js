import * as iframe from 'cypress-iframe'

import { prtKeywordExplorer } from '../page-selectors/PrtKeywordExplorerPage'

export const clickPlanningAndResearch = () => {
    prtKeywordExplorer.elements.planningAndResearch().click()
}

export const clickKeywordExplorer = () => {
    prtKeywordExplorer.elements.keywordExplorer().click({ force: true })
}

export const waitForIframeLoad = () => {
    cy.frameLoaded(prtKeywordExplorer.elements.iFrame, prtKeywordExplorer.elements.iFrameUrl)
}

export const verifySearchVolume = (sv) => {
    cy.enter(prtKeywordExplorer.elements.iFrame, prtKeywordExplorer.elements.iFrameUrl).then(getBody => {
        getBody().find('.value title')
            .should('contains.text', sv)
    })
}

export const validateSearchEngineLabel = () => {
    prtKeywordExplorer.elements.searchEngineLabel().should('be.visible')
}

export const validateFiltersContainer = (getBody) => {
    prtKeywordExplorer.elements.filtersContainer(getBody).should('be.visible')
}

export const validateKeywordExplorerSection = (getBody) => {
    prtKeywordExplorer.elements.keywordExplorerSection(getBody).should('be.visible')
}

export const validateSearchVolumeSection = (getBody) => {
    prtKeywordExplorer.elements.searchVolumeSection(getBody).should('be.visible')
}

export const validateKeywordCountSection = (getBody) => {
    prtKeywordExplorer.elements.keywordCountSection(getBody).should('be.visible')
}
