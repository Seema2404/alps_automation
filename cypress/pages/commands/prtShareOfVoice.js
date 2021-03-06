/* eslint-disable cypress/no-unnecessary-waiting */
import * as iframe from 'cypress-iframe'

import { prtShareOfVoice } from '../page-selectors/PrtShareOfVoicePage'

export const clickPlanningAndResearch = () => {
    prtShareOfVoice.elements.planningAndResearch().click({ force: true })
}

export const clickShareOfVoice = () => {
    prtShareOfVoice.elements.shareOfVoice().click({ force: true })
}

export const waitForIframeLoad = () => {
    cy.frameLoaded(prtShareOfVoice.elements.iFrame, prtShareOfVoice.elements.iFrameUrl, { timeout: 60000 })
}

export const enterKeywordInSearchBoxIframeAndClick = (keyword) => {
    cy.frameLoaded(prtShareOfVoice.elements.iFrame).iframeCustom()
        .find(prtShareOfVoice.elements.iFrameSearchBox)
        .iframeCustom()
        .find('#sandbox-host div input', { timeout: 60000 })
        .should('be.visible')
        .wait(2000)
        .clear()
        .type(keyword, { force: true })
        .type('{enter}', { force: true })
        .wait(5000)
}

export const validateSearchBoxResult = (getBody, keyword) => {
    prtShareOfVoice.elements.domainTableData(getBody).should('contains.text', keyword)
}

export const validateCategoryDataSearchBoxResult = (getBody, keyword) => {
    prtShareOfVoice.elements.domainTableCategoryData(getBody).should('contains.text', keyword)
}

export const dispDateShareOfVoice = (systemdate) => {
    cy.enter(prtShareOfVoice.elements.iFrame, prtShareOfVoice.elements.iFrameUrl).then(getBody => {
        getBody().find('h3.preTextWithEllipsis').contains('Share of Voice by Domain for')
            .then((visibletext) => {
                const dispvisibletext = visibletext.text()

                expect(dispvisibletext).to.contain(systemdate)
            })
    })
}

export const dispDateShareOfVoiceByCategory = (systemdate) => {
    cy.enter(prtShareOfVoice.elements.iFrame, prtShareOfVoice.elements.iFrameUrl).then(getBody => {
        cy.wait(6000)
        prtShareOfVoice.elements.RecentDateCategory(getBody).then((visibleText) => {
            const dispVisibleText = visibleText.text()

            expect(dispVisibleText).to.contains(systemdate)
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

export const validateShareOfVoiceOverview = (attr, value) => {
    prtShareOfVoice.elements.shareOfVoiceOverview().should('have.attr', attr, value)
}

export const clickToCategory = () => {
    prtShareOfVoice.elements.shareOfVoiceCategory().click({ force: true })
}

export const validateShareOfVoiceCategory = (attr, value) => {
    prtShareOfVoice.elements.shareOfVoiceCategory().should('have.attr', attr, value)
}

export const validateSearchEngineFilter = () => {
    prtShareOfVoice.elements.searchEngine().should('be.visible')
    prtShareOfVoice.elements.shareOfVoiceTopFilter().first().should('be.visible')
}

export const validateProductFilter = () => {
    prtShareOfVoice.elements.product().should('be.visible')
    prtShareOfVoice.elements.shareOfVoiceTopFilter().eq(1).should('be.visible')
}

export const validateLocaleFilter = () => {
    prtShareOfVoice.elements.locale().should('be.visible')
    prtShareOfVoice.elements.shareOfVoiceTopFilter().eq(2).should('be.visible')
}

export const validateDeviceFilter = () => {
    prtShareOfVoice.elements.device().should('be.visible')
    prtShareOfVoice.elements.shareOfVoiceTopFilter().eq(3).should('be.visible')
}

export const validateDomainFilter = () => {
    prtShareOfVoice.elements.domain().should('be.visible')
    prtShareOfVoice.elements.shareOfVoiceTopFilter().last().should('be.visible')
}

export const clickTrendsSOV = () => {
    prtShareOfVoice.elements.trendsSOV().click({ force: true })
}
export const validateSearchVolume = (getBody) => {
    prtShareOfVoice.elements.searchVolume(getBody).should('be.visible')
}

export const validateKeywordCount = (getBody) => {
    prtShareOfVoice.elements.keywordCount(getBody).should('be.visible')
}

export const validateTraffic = (getBody) => {
    prtShareOfVoice.elements.traffic(getBody).should('be.visible')
}

export const validateShareOfVoice = (getBody) => {
    prtShareOfVoice.elements.shareOfVoiceInCategory(getBody).should('be.visible')
}

export const validateTableHeaderSOVCategory = (getBody) => {
    prtShareOfVoice.elements.tableHeaderSOVCategory(getBody).should('be.visible')
}

export const validateTableHeaderSOVKeywords = (getBody) => {
    prtShareOfVoice.elements.tableHeaderSOVKeywords(getBody).should('be.visible')
}

export const validateTableHeaderSOVSerchVolume = (getBody) => {
    prtShareOfVoice.elements.tableHeaderSOVSerchVolume(getBody).should('be.visible')
}
export const validateTableHeaderSOVCatKWRank11to20 = (getBody) => {
    prtShareOfVoice.elements.tableHeaderSOVCatKWRank11to20(getBody).should('be.visible')
}

export const validateTargetDomainFilter = () => {
    prtShareOfVoice.elements.txtboxSOVCategoryProduct().should('have.text', 'Mortgage')
    prtShareOfVoice.elements.txtboxSOVCategoryDomain().should('have.text', 'nerdwallet.com')
}

export const disptrendBreadcrumb = () => {
    prtShareOfVoice.elements.trendBreadcrumb().should('be.visible')
}

export const dispcategoryBreadcrumb = () => {
    prtShareOfVoice.elements.categoryBreadcrumb().should('be.visible')
}

export const distrendGraph = (getBody) => {
    prtShareOfVoice.elements.trendGraph(getBody).should('be.visible')
}

export const enterDataToSearchBox = (kw) => {
    prtShareOfVoice.elements.searchBox().clear()
    prtShareOfVoice.elements.searchBox().type(kw)
}

export const dispDomainFortargetSelected = (product, domain) => {
    cy.enter(prtShareOfVoice.elements.iFrame, prtShareOfVoice.elements.iFrameUrl).then(getBody => {
        cy.xpath('//span[text()="Product"]/following-sibling::div[1]/div/div/div').then((visibletext) => {
            const dispProductText = visibletext.text()

            if (dispProductText == product) {
                cy.xpath('//span[text()="Domain"]/following-sibling::div[1]/div/div/div').then((visibletext) => {
                    const dispDomainText = visibletext.text()

                    expect(dispDomainText).to.contain(domain)
                })
            }
        })
    })
}
