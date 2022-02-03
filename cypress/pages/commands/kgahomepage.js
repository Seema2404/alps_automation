import { kga } from '../page-selectors/KGAHomePage'

export const selectLocale = (locale) => {
    kga.elements.localeDropdown().click()
    cy.get('div').contains(locale).click()
}

export const enterKeyword = (kw) => {
    kga.elements.inputKeyword().clear()
    kga.elements.inputKeyword().type(kw)
}

export const enterURL = (url) => {
    kga.elements.inputURL().clear()
    kga.elements.inputURL().type(url)
}

export const clickGo = () => {
    kga.elements.goButton().click()
}

export const validateResultsPage = () => {
    kga.elements.resultsTitle().should('contains.text', 'RESULTS')
}

export const validateRankingURLs = (rank) => {
    kga.elements.rankingURLs().should('have.length.greaterThan', 9)
}

export const validateInputKeywordField = () => {
    kga.elements.inputKeyword().should('be.visible')
}

export const validateInputUrlField = () => {
    kga.elements.inputURL().should('be.visible')
}

export const validateDomainRankLabel = () => {
    kga.elements.domainRankLabel().should('be.visible')
}

export const validateSerpTableHeaderTopRankingUrls = () => {
    kga.elements.serpTableHeaderTopRankingUrls().should('be.visible')
}

export const validateSerpKgaButton = () => {
    kga.elements.serpKgaButton().should('be.visible')
}

export const validateSerpSimulationButton = () => {
    kga.elements.serpSimulationButton().should('be.visible')
}

export const clickSerpKgaButton = () => {
    kga.elements.serpKgaButton().click()
}

export const validateKgaPage = () => {
    kga.elements.kgaTitle().should('have.text', 'Keyword Gap Analysis')
}

export const validateKgaComparisonLabel = () => {
    kga.elements.kgaComparisonLabel().should('be.visible')
}

export const validateKgaHighestRankLabel = () => {
    kga.elements.kgaHighestRankLabel().should('be.visible')
}

export const validatekgaSerpPacksLabel = () => {
    kga.elements.kgaSerpPacksLabel().should('be.visible')
}

export const validatekgaKeywordPerformanceLabel = () => {
    kga.elements.kgaKeywordPerformanceLabel().should('be.visible')
}

export const validateKgaContentScoreLabel = () => {
    kga.elements.kgaContentScoreLabel().should('be.visible')
}

export const validateKgaSeoParameterLabel = () => {
    kga.elements.kgaSeoParameterLabel().should('be.visible')
}

export const validateKgaParameterGroupsContainer = () => {
    kga.elements.kgaParameterGroupsContainer().should('be.visible')
}

export const validateKgaViewTop10CompetitorsLink = () => {
    kga.elements.kgaViewTop10CompetitorsLink().should('be.visible')
}

export const clickKgaViewTop10CompetitorsLink = () => {
    kga.elements.kgaViewTop10CompetitorsLink().click()
}

export const validateKgaModalTop10CompetitorScoresTitle = () => {
    kga.elements.kgaModalTop10CompetitorScoresTitle().should('have.text', 'Top 10 Competitor Scores')
}

export const clicKgaModalCloseButton = () => {
    kga.elements.kgaModalCloseButton().click()
}

export const navigateBack = () => {
    cy.go('back')
}

export const clickSerpSimulationButton = () => {
    kga.elements.serpSimulationButton().click()
}

export const clickOptimizationTab = () => {
    kga.elements.optimizationTab().click()
}

export const clickPageSimulationMenuOption = () => {
    kga.elements.pageSimulationMenuOption().click()
}

export const clickProjectTab = () => {
    kga.elements.projectTab().click()
}

export const clickAuditsMenuOption = () => {
    kga.elements.auditsMenuOption().click()
}

export const clickOpMenuOption = () => {
    kga.elements.opMenuOption().click()
}

export const clickReportsMenuOption = () => {
    kga.elements.reportsMenuOption().click()
}

export const verifySearchVolumeText = () => {
    kga.elements.searchVolumeText().should('be.visible')
}

export const verifySVGIcon = () => {
    kga.elements.svgIcon().should('be.visible')
    kga.elements.svgIcon().trigger('mousemove',{ clientX: 139, clientY: 79})
    kga.elements.serpResultInfo().should('be.visible').wait(3000)
}
export const clickDownloadButton = () => {
    
    kga.elements.kgaDownload().should('be.visible').click({force : true})
    kga.elements.kgaDownloadOption().click({force : true})
    cy.verifyDownload('serp_layout.csv')
}
