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
