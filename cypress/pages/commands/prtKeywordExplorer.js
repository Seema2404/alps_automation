import * as iframe from 'cypress-iframe'

import { prtKeywordExplorer } from '../page-selectors/PrtKeywordExplorerPage'

export const clickPlanningAndResearch = () => {
    prtKeywordExplorer.elements.planningAndResearch().click()
}

export const clickKeywordExplorer = () => {
    prtKeywordExplorer.elements.keywordExplorer().click()
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
