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

export const dispDateShareOfVoice = (systemdate) => {
    cy.enter(prtShareOfVoice.elements.iFrame, prtShareOfVoice.elements.iFrameUrl).then(getBody => {
        getBody().find('h3.preTextWithEllipsis').contains('Share of Voice by Domain for').then((visibletext) => {
        
            const dispvisibletext=visibletext.text()
            expect(dispvisibletext).to.contain(systemdate)
            
        
        })
            
    })
}


export const validateSearchEngineLabel = () => {
    prtShareOfVoice.elements.searchEngineLabel().should('be.visible')
}

export const dispShareOfVoice = () => {
    prtShareOfVoice.elements.shareOfVoice().should('be.visible')
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

export const validateTableHeaderSOVDomain = (getBody) => {
    prtShareOfVoice.elements.tableHeaderSOVDomain(getBody).should('be.visible')
}

export const validateTableHeaderSOV = (getBody) => {
    prtShareOfVoice.elements.tableHeaderSOV(getBody).should('be.visible')
}

export const validateTableHeaderSOVTraffice = (getBody) => {
    prtShareOfVoice.elements.tableHeaderSOVTraffice(getBody).should('be.visible')
}

export const validateTableHeaderSOVKWRank1to5 = (getBody) => {
    prtShareOfVoice.elements.tableHeaderSOVKWRank1to5(getBody).should('be.visible')
}

export const validateTableHeaderSOVKWRank6to10 = (getBody) => {
    prtShareOfVoice.elements.tableHeaderSOVKWRank6to10(getBody).should('be.visible')
}

export const validateTableHeaderSOVKWRank11to20 = (getBody) => {
    prtShareOfVoice.elements.tableHeaderSOVKWRank11to20(getBody).should('be.visible')
}