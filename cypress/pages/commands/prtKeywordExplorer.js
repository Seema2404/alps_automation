import * as iframe from 'cypress-iframe'

import { prtKeywordExplorer, PrtKeywordExplorerPage } from '../page-selectors/PrtKeywordExplorerPage'

export const clickPlanningAndResearch = () => {
    prtKeywordExplorer.elements.planningAndResearch().click({ force : true})
}

export const clickKeywordExplorer = () => {
    prtKeywordExplorer.elements.keywordExplorer().click({ force: true })
}

export const waitForIframeLoad = () => {
    cy.frameLoaded(prtKeywordExplorer.elements.iFrame, prtKeywordExplorer.elements.iFrameUrl)
}

export const enterKeywordInSearchBoxIframeAndClick = (keyword) => {
    cy.frameLoaded(prtKeywordExplorer.elements.iFrame).iframeCustom()
    .find(prtKeywordExplorer.elements.iFrameSearchBox)
    .iframeCustom()
    .find('#sandbox-host div input').should('be.visible')
    .wait(2000)
    .clear().type(keyword)
    .type('{enter}')
}

export const validateSearchBoxResult = (getBody,keyword) => {
    prtKeywordExplorer.elements.keywordThemesText(getBody).should('contains.text',keyword)
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
    prtKeywordExplorer.elements.keywordExplorerText(getBody).should('be.visible')
}

export const dispValidateKeywordExplorerSection = () => {
    prtKeywordExplorer.elements.keywordExplorerSection().should('be.visible')
}

export const validateSearchVolumeSection = (getBody) => {
    prtKeywordExplorer.elements.searchVolumeSection(getBody).should('be.visible')
}

export const validateKeywordCountSection = (getBody) => {
    prtKeywordExplorer.elements.keywordCountSection(getBody).should('be.visible')
}


export const disptableKW = (getBody) => {
    prtKeywordExplorer.elements.tableKW(getBody).should('be.visible')
}

export const dispTableSearchVolume = (getBody) => {
    prtKeywordExplorer.elements.tableSearchVolume(getBody).should('be.visible')
}

export const dispTableTopicDifficulty = (getBody) => {
    prtKeywordExplorer.elements.tableTopicDifficulty(getBody).should('be.visible')
}


export const dispDateKWExplorer = (systemdate) => {
    cy.enter(prtKeywordExplorer.elements.iFrame, prtKeywordExplorer.elements.iFrameUrl).then(getBody => {
        getBody().find('h3.preTextWithEllipsis').contains('Keyword Explorer For').then((visibletext) => {
        
            const dispvisibletext=visibletext.text()
            expect(dispvisibletext).to.contain(systemdate)
            
        
        })
            
    })
}

export const dispPlanningAndResearchTab = () => {
    prtKeywordExplorer.elements.planningAndResearch().should('be.visible')
}

export const dispSearchEngine = () => {
    prtKeywordExplorer.elements.searchEngine().should('be.visible')
}

export const dispProduct = () => {
    prtKeywordExplorer.elements.product().should('be.visible')
}

export const dispLocale = () => {
    prtKeywordExplorer.elements.locale().should('be.visible')
}

export const dispDevice = () => {
    prtKeywordExplorer.elements.device().should('be.visible')
}

export const verifySearchBox = (getBody2) => {
    prtKeywordExplorer.elements.keywordExplorerSearchBox(getBody2).should('be.visible')
}

export const enterKeyword = (getBody,kw) => {
    prtKeywordExplorer.elements.keywordExplorerSearchBox(getBody).should('be.visible')
    //.clear().type(kw)
}


