import * as iframe from 'cypress-iframe'

import { prtShareOfVoice } from '../page-selectors/PrtShareOfVoicePage'

export const clickPlanningAndResearch = () => {
    prtShareOfVoice.elements.planningAndResearch().click()
}

export const clickShareOfVoice = () => {
    prtShareOfVoice.elements.shareOfVoice().click({ force: true })
}

export const waitForIframeLoad = () => {
    cy.frameLoaded(prtShareOfVoice.elements.iFrame, prtShareOfVoice.elements.iFrameUrl)
}

export const validateSearchEngineLabel = () => {
    prtShareOfVoice.elements.searchEngineLabel().should('be.visible')
}

export const validateFiltersContainer = (getBody) => {
    prtShareOfVoice.elements.filtersContainer(getBody).should('be.visible')
}

export const validateSearchVolumeSection = (getBody) => {
    prtShareOfVoice.elements.searchVolumeSection(getBody).should('be.visible')
}

export const validateKeywordCountSection = (getBody) => {
    prtShareOfVoice.elements.keywordCountSection(getBody).should('be.visible')
}

export const validateShareOfVoiceByBusinessType = (getBody) => {
    prtShareOfVoice.elements.shareOfVoiceByBusinessType(getBody).should('be.visible')
}

export const validateShareOfVoiceByDomain = (getBody) => {
    prtShareOfVoice.elements.shareOfVoiceByDomain(getBody).should('be.visible')
}
