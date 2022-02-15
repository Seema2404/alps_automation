import * as iframe from 'cypress-iframe'
import { prtShareOfVoice } from '../page-selectors/PrtShareOfVoicePage'

import { prtTopicalAuthority } from '../page-selectors/PrtTopicalAuthorityPage'

export const clickPlanningAndResearch = () => {
    prtTopicalAuthority.elements.planningAndResearch().click()
}

export const clickTopicalAuthority = () => {
    prtTopicalAuthority.elements.topicalAuthority().click({ force: true })
}

export const waitForIframeLoad = () => {
    cy.frameLoaded(prtTopicalAuthority.elements.iFrame, prtTopicalAuthority.elements.iFrameUrl)
}

export const enterKeywordInSearchBoxIframeAndClick = (keyword) => {
    cy.frameLoaded(prtTopicalAuthority.elements.iFrame).iframeCustom()
    .find(prtTopicalAuthority.elements.iFrameSearchBox)
    .iframeCustom()
    .find('#sandbox-host div input').should('be.visible')
    .wait(2000)
    .type(keyword,{ force: true },)
    .type('{enter}',{ force: true })
    .wait(2000)
    
}

export const validateSearchBoxResult = (getBody,keyword) => {
    prtTopicalAuthority.elements.domainTableData(getBody).should('contains.text',keyword)
}

export const validateSearchEngineLabel = () => {
    prtTopicalAuthority.elements.searchEngineLabel().should('be.visible')
}

export const validateFiltersContainer = (getBody) => {
    prtTopicalAuthority.elements.filtersContainer(getBody).should('be.visible')
}

export const clickDomainTab = () => {
    prtTopicalAuthority.elements.domainTab().click({ force : true })
}

export const validateTableTitleCategory = (getBody) => {
    prtTopicalAuthority.elements.tableTitleCategory(getBody).should('be.visible')
}

export const validateTableTitleDomain = (getBody) => {
    prtTopicalAuthority.elements.tableTitleDomain(getBody).should('be.visible')
}

export const validateTableContainer = (getBody) => {
    prtTopicalAuthority.elements.tableContainer(getBody).should('be.visible')
}

export const disptopicalAuthority = () => {
    prtTopicalAuthority.elements.topicalAuthority().should('be.visible')
}

export const validateSearchEngineFilter = () => {
    prtTopicalAuthority.elements.searchEngine().should('be.visible')
    prtTopicalAuthority.elements.shareOfVoiceTopFilter().first().should('be.visible')   
}

export const validateProductFilter = () => {
    prtTopicalAuthority.elements.product().should('be.visible')
    prtTopicalAuthority.elements.shareOfVoiceTopFilter().eq(1).should('be.visible')
}

export const validateLocaleFilter = () => {
    prtTopicalAuthority.elements.locale().should('be.visible')
    prtTopicalAuthority.elements.shareOfVoiceTopFilter().eq(2).should('be.visible')
}

export const validateDomainFilter = () => {
    prtTopicalAuthority.elements.domain().should('be.visible')
    prtTopicalAuthority.elements.shareOfVoiceTopFilter().last().should('be.visible')
}

export const validateTableHeaderDomain = (getBody) => {
    prtTopicalAuthority.elements.tableHeaderDomain(getBody).should('be.visible')
}

export const validateTableHeaderTopicalAuthority = (getBody) => {
    prtTopicalAuthority.elements.tableHeaderTopicalAuthority(getBody).should('be.visible')
}

export const validateTableHeaderUrlCount = (getBody) => {
    prtTopicalAuthority.elements.tableHeaderUrlCount(getBody).should('be.visible')
}

export const validateTableHeaderUrlRating20 = (getBody) => {
    prtTopicalAuthority.elements.tableHeaderUrlRating20(getBody).should('be.visible')
}

export const validateTableHeaderUrlRating20to40 = (getBody) => {
    prtTopicalAuthority.elements.tableHeaderUrlRating20to40(getBody).should('be.visible')
}

export const validateTableHeaderUrlRating40 = (getBody) => {
    prtTopicalAuthority.elements.tableHeaderUrlRating40(getBody).should('be.visible')
}

export const validateTableHeaderUrlRatingNA = (getBody) => {
    prtTopicalAuthority.elements.tableHeaderUrlRatingNA(getBody).should('be.visible')
}

export const validateTableHeaderKwsOnPage1 = (getBody) => {
    prtTopicalAuthority.elements.tableHeaderKwsOnPage1(getBody).should('be.visible')
}

export const validateTableHeaderKwsOnPag2 = (getBody) => {
    prtTopicalAuthority.elements.tableHeaderKwsOnPag2(getBody).should('be.visible')
}

export const validateTableHeaderKwsBeyondPage2 = (getBody) => {
    prtTopicalAuthority.elements.tableHeaderKwsBeyondPage2(getBody).should('be.visible')
}

export const dispDateTopicalAuthority = (systemdate) => {
    cy.enter(prtShareOfVoice.elements.iFrame, prtShareOfVoice.elements.iFrameUrl).then(getBody => {
        getBody().find('h3.preTextWithEllipsis').contains("Topical Authority report for category 'Balance Transfer' for").then((visibletext) => {
        
            const dispvisibletext=visibletext.text()
            expect(dispvisibletext).to.contain(systemdate)
            
        
        })
            
    })
}




