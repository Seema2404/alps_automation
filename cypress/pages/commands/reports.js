/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { reports } from '../page-selectors/reportsPage'

export const validateReportsLeftToolbar = () => {
    reports.elements.leftToolbar().should('be.visible')
}

export const validateReportsRightToolbar = () => {
    reports.elements.rightToolbar().should('be.visible')
}

export const validateReportsDownloadButton = () => {
    reports.elements.downloadButton().should('be.visible')
}

export const validateEditKeywordsButton = () => {
    reports.elements.editKeywordsButton().should('be.visible')
}

export const validateRankDistributionHeading = () => {
    reports.elements.rankDistributionHeading().should('be.visible')
}

export const clickBrandedTab = () => {
    reports.elements.brandedTab().click()
}

export const clickAllKeywordsTab = () => {
    reports.elements.allKeywordsTab().click()
}

export const validateShareOfSearchHeading = () => {
    reports.elements.shareOfSearchHeading().should('be.visible')
}

export const validateOrganicKeywordTrafficHeading = () => {
    reports.elements.organicKeywordTrafficHeading().should('be.visible')
}

export const validateTopGainingKeywordsContainer = () => {
    reports.elements.topGainingKeywordsContainer().should('be.visible')
}

export const validateTopLosingKeywordsContainer = () => {
    reports.elements.topLosingKeywordsContainer().should('be.visible')
}

export const validateTrafficContainer = () => {
    reports.elements.trafficContainer().should('be.visible')
}

export const validateConversationsContainer = () => {
    reports.elements.conversationsContainer().should('be.visible')
}

export const validateSalesCompletionContainer = () => {
    reports.elements.salesCompletionContainer().should('be.visible')
}

export const validateTrafficTreandContainer = () => {
    reports.elements.trafficTreandContainer().should('be.visible')
}

export const clickKeywordsTab = () => {
    reports.elements.keywordsTab().click()
}

export const validateKeywordsTitle = () => {
    reports.elements.title().should('contain.text', 'Keywords - Rank & Performance')
}

export const validateKeywordsMainTable = () => {
    reports.elements.keywordsMainTable().should('be.visible')
}

export const validateKeywordsTableColumn1 = () => {
    reports.elements.keywordsTableColumn1().should('contain.text', 'Keyword')
}

export const validateKeywordsTableColumn2 = () => {
    reports.elements.keywordsTableColumn2().should('contain.text', 'Rank')
}

export const validateKeywordsTableColumn3 = () => {
    reports.elements.keywordsTableColumn3().should('contain.text', 'Traffic')
}

export const validateKeywordsTableColumn4 = () => {
    reports.elements.keywordsTableColumn4().should('contain.text', 'Conversions')
}

export const validateKeywordsTableColumn5 = () => {
    reports.elements.keywordsTableColumn5().should('contain.text', 'Sales Completions')
}

export const clickThemesTab = () => {
    reports.elements.themesTab().click()
}

export const validateThemesTitle = () => {
    reports.elements.title().should('contain.text', 'Themes - Rank & Performance')
}

export const validateThemesMainTable = () => {
    reports.elements.themesMainTable().should('be.visible')
}

export const validateThemesMainTableHeader = () => {
    reports.elements.themesMainTableHeader().should('be.visible')
}

export const validateThemesTableColumn1 = () => {
    reports.elements.keywordsTableColumn1().should('contain.text', 'Theme')
}

export const validateThemesTableColumn2 = () => {
    reports.elements.themesTableColumn2().should('contain.text', 'Rank')
}

export const validateThemesTableColumn3 = () => {
    reports.elements.themesTableColumn3().should('contain.text', 'Competitor Rank')
}

export const validateThemesTableColumn4 = () => {
    reports.elements.themesTableColumn4().should('contain.text', 'Traffic')
}

export const validateThemesTableColumn5 = () => {
    reports.elements.themesTableColumn5().should('be.visible')
}

export const validateThemesTableColumn6 = () => {
    reports.elements.themesTableColumn6().should('be.visible')
}

export const clickCompTab = () => {
    reports.elements.compTab().click()
}

export const validateCompTitle = () => {
    reports.elements.title().should('contain.text', 'Competition - Share Of Search & Rank Distribution')
}

export const validateCompareCompetitonAcrossThemesButton = () => {
    reports.elements.compareCompetitonAcrossThemesButton().should('be.visible')
}

export const validateCompTableHeaderTab = () => {
    reports.elements.compTableHeaderTab().should('be.visible')
}

export const validateCompTableHeader = () => {
    reports.elements.compTableHeader().should('be.visible')
}

export const validateCompTableColumn1 = () => {
    reports.elements.keywordsTableColumn1().should('contain.text', 'Domain')
}

export const validateCompTableColumn2 = () => {
    reports.elements.compTableColumn2().should('be.visible')
}

export const validateCompTableColumn3 = () => {
    reports.elements.compTableColumn3().should('contain.text', 'Non-Branded Rank Distribution')
}
