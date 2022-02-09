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

export const verifySVGIconSerpResultInfo = () => {
    kga.elements.serpResultInfo().should('have.text', 'Keyword Planner is used to fetch default Monthly Search Volume. If the data is unavailable, we use alternate sources.')
}
export const clickDownloadButton = () => {
    
    kga.elements.kgaDownload().should('be.visible').click({force : true})
    kga.elements.kgaDownloadOption().click({force : true})
    cy.verifyDownload('serp_layout.csv')
}

export const verifyKgaSvgIcon = () => {
    kga.elements.kgaSvgIcon().should('be.visible')
}

export const verifyKgaSearchVolumeText = () => {
    kga.elements.kgaSearchVolumeText().should('have.text', 'Keyword Planner is used to fetch default Monthly Search Volume. If the data is unavailable, we use alternate sources.')
}

export const verifySimulationSvgIcon = () => {
    kga.elements.pageSimulationSvgInfoIcon().should('be.visible')
}

export const verifyPageSimulationSvgInfoText = () => {
    kga.elements.pageSimulationSvgInfoText().should('have.text', 'Please ignore any search volume mismatch between Related and Project Keywords tabs as they could be pulled at different times. Latest search volume will be used in the simulation to ensure accurate results.')
}

export const verifyUrlError = () => {
    kga.elements.urlerror().should('be.visible')
}
export const verifyUrlErrorText = () => {
    kga.elements.urlerror().should('have.text', 'For the purpose of scoring and simulation, the system considers the URL without the # values when submitting')
}

export const verifyInvalidUrlText = () => {
    kga.elements.urlerror().should('have.text', 'Please enter a valid URL (e.g. https://www.example.com)')
}

export const verifyKgaHomePageUrlError = () => {
    kga.elements.urlerror().should('be.visible')
}

export const verifyKgaHomePageUrlErrorText = () => {
    kga.elements.urlerror().should('have.text', 'For the purpose of scoring and simulation, the system considers the URL without the # values when submitting')
}

export const clickPageSimulationModifyButton = () =>{
    kga.elements.pageSimulationModifyButton().click()
}

export const clickPageSimulationZoomButton = () =>{
    kga.elements.pageSimulationZoomButton().click()
}

export const verifyZoomKeywordImpactSvgIcon = () => {
    kga.elements.zoomKeywordImpactSvgIcon().should('be.visible')
}

export const verifyZoomKeywordImpactSvgText = () => {
    kga.elements.zoomKeywordImpactSvgText().should('have.text', 'Keyword Planner is used to fetch default Monthly Search Volume. If the data is unavailable, we use alternate sources.')
}
export const verifyKgaUrlRank = () => {
    kga.elements.kgaUrlRank().should('have.text', '121')
}

export const clickKgaKeywordPageRelevance = () => {
    kga.elements.kgaKeywordPageRelevance().click()
}

export const verifyKgaContentParameterH2Score = () => {
    kga.elements.kgaContentParameterH2Score().should('be.visible')
}

export const verifyKgaContentParameterH1Score = () => {
    kga.elements.kgaContentParameterH1Score().should('be.visible')
}

export const verifyKgaContentParameterMetaDisScore = () => {
    kga.elements.kgaContentParameterMetaDisScore().should('be.visible')
}

export const verifyKgaContentParameterBodyConScore = () => {
    kga.elements.kgaContentParameterBodyConScore().should('be.visible')
}

export const verifyKgaContentParameterUrlScore = () => {
    kga.elements.kgaContentParameterUrlScore().should('be.visible')
}

export const verifyKgaContentParameterTitleScore = () => {
    kga.elements.kgaContentParameterTitleScore().should('be.visible')
}

export const clickKgaTechnicalTab = () => {
    kga.elements.kgaTechnicalTab().click()
}

export const verifyKgaTechnicalParameterOptimal = () => {
    kga.elements.kgaTechnicalParameterOptimal().should('be.visible')
}

export const verifyKgaTechnicalParameterCoreWeb = () => {
    kga.elements.kgaTechnicalParameterCoreWeb().should('be.visible')
}

export const verifyKgaTechnicalParameterOtherWeb = () => {
    kga.elements.kgaTechnicalParameterOtherWeb().should('be.visible')
}

export const clickKgaAuthorityTab = () => {
    kga.elements.kgaAuthorityTab().click()
}

export const verifyKgaAuthorityParameterPage = () => {
    kga.elements.kgaAuthorityParameterPage().should('be.visible')
}

export const verifyKgaAuthorityParameterDomain = () => {
    kga.elements.kgaAuthorityParameterDomain().should('be.visible')
}

export const verifyKgaAuthorityParameterKeyword = () => {
    kga.elements.kgaAuthorityParameterKeyword().should('be.visible')
}

export const clickKgaAccordianPage = () => {
    kga.elements.kgaAccordianPage().click()
}

export const verifyKgaAccordianPageUrlSearch = (url) => {
    kga.elements.kgaAccordianPageUrlSearch().clear()
    kga.elements.kgaAccordianPageUrlSearch().type(url)
    kga.elements.kgaAccordianPageUrlSearch().should('have.value', url)
}

export const verifyKgaAccordianPageKeywordSearch = (kw) => {
    kga.elements.kgaAccordianPageKeywordSearch().clear()
    kga.elements.kgaAccordianPageKeywordSearch().type(kw)
    kga.elements.kgaAccordianPageKeywordSearch().should('have.value', kw)
}

export const clickVerifyHighFilterOption = () => {
    kga.elements.verifyHighFilterOption().click()
}

export const clickHighFilterOption = () => {
    kga.elements.highFilterOption().click()
}

export const clickMediumFilterOption = () => {
    kga.elements.mediumFilterOption().click()
}

export const clickLowFilterOption = () => {
    kga.elements.lowFilterOption().click()
}

export const clickVeryLowFilterOPtion = () => {
    kga.elements.veryLowFilterOPtion().click()
}

export const verifyKgaKeywordPageRelevance = () => {
    kga.elements.kgaKeywordPageRelevance().should('not.exist')
}

export const clickKgaKeywordPerformanceLabel = () => {
    kga.elements.kgaKeywordPerformanceLabel().click()
}

export const verifyKgaKeywordPerformanceTrafficValue = () => {
    kga.elements.kgaKeywordPerformanceTrafficValue().should('be.visible')
}

export const verifyKgaKeywordPerformanceCrtValue = () => {
    kga.elements.kgaKeywordPerformanceCrtValue().should('be.visible')
}

export const notVisibleKgaTechnicalParameterOptimal = () => {
    kga.elements.kgaTechnicalParameterOptimal().should('not.exist')
}

export const notVisibleKgaTechnicalParameterCoreWeb = () => {
    kga.elements.kgaTechnicalParameterCoreWeb().should('not.exist')
}

export const notVisibleKgaTechnicalParameterOtherWeb = () => {
    kga.elements.kgaTechnicalParameterOtherWeb().should('not.exist')
}