import * as iframe from 'cypress-iframe'

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
    prtTopicalAuthority.elements.domainTab().click()
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
