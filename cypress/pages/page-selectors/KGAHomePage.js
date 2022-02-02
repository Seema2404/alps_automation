export class KGAHomePage {
    constructor () {
        this.elements = {
            localeDropdown: () => cy.get('#home_keywordSearch_locale_dropdown'),
            inputKeyword: () => cy.get('#home_keywordSearch_keyword'),
            inputURL: () => cy.get('#home_keywordSearch_domain'),
            goButton: () => cy.get('#home_keywordSearch_submit_button'),
            resultsTitle: () => cy.get('#serpResult_metaInfo_keyword_for'),
            keywordranksynpid: () => cy.get('#reports-grid-keyword-rank-perfomance-item'),
            keyWordgapsnalysissnypid: () => cy.get('#reports-grid-keyword-gap-analysis-item'),
            contentsimulationsnypid: () => cy.get('#reports-grid-content-simulation-item'),
            contentgapanalysissnypid: () => cy.get('#reports-grid-content-gap-analysis-item'),
            backlinkanalysissnypid: () => cy.get('#reports-grid-backlink-analysis-item'),
            technicalauditsnypid: () => cy.get('#reports-grid-technical-audit-item'),
            closebuttonofsnypid: () => cy.get('#reports-grid-modal-head-button'),
            keyWordranksnypidpopup: () => cy.get('#reports-grid-modal-head-title'),
            sampleReportssnypidpopup: () => cy.get('#reports-grid-modal-head-title'),
            keyworderror: () => cy.get('home_keywordSearch_keyword_inputError'),
            urlerror: () => cy.get('#home_keywordSearch_domain_inputError'),
            rankingURLs: () => cy.get('tr[class*="serpResult_rankTable"]'),
            domainRankLabel: () => cy.get('#serpResult_domainRank_wrapper', { timeout: 120000 }),
            serpTableHeaderTopRankingUrls: () => cy.get('th').contains('TOP RANKING URLs'),
            serpKgaButton: () => cy.get('#serpResult_progress_keywordGapAnalysis_button'),
            serpSimulationButton: () => cy.get('#serpResult_progress_contentSimulation_button'),
            kgaTitle: () => cy.get('#kwAnalysis_metaInfo_keyword_for'),
            kgaComparisonLabel: () => cy.get('.comparision_section h1'),
            kgaHighestRankLabel: () => cy.get('#highest-rank-title'),
            kgaSerpPacksLabel: () => cy.get('#serp-packs-accordion-title'),
            kgaKeywordPerformanceLabel: () => cy.get('#keyword-performance-accordion-title'),
            kgaContentScoreLabel: () => cy.get('#content-score-label'),
            kgaSeoParameterLabel: () => cy.get('#seo-parameters-label'),
            kgaParameterGroupsContainer: () => cy.get('.paramenter_main_container'),
            kgaViewTop10CompetitorsLink: () => cy.get('.link_alps_score', { timeout: 90000 }),
            kgaModalTop10CompetitorScoresTitle: () => cy.get('#comparator-modal-head-title'),
            kgaModalCloseButton: () => cy.get('#comparator-modal-head-button'),
            optimizationTab: () => cy.get('#logo + div nav div').contains('OPTIMIZATION'),
            pageSimulationMenuOption: () => cy.get('#page-optimizer-url'),
            projectTab: () => cy.get('#logo + div nav div').contains('PROJECT'),
            auditsMenuOption: () => cy.get('nav a').contains('AUDITS'),
            opMenuOption: () => cy.get('nav a').contains('OPPORTUNITY PLANNING'),
            reportsMenuOption: () => cy.get('nav a').contains('REPORTS'),
            kgaDownload: () => cy.get('.fright.download_right_container>i',{ timeout: 60000 }),
            kgaDownloadOption: () => cy.get('#kwAnalysis_metaInfo_downloadSerp_button')
        }
    }
}

export const kga = new KGAHomePage()
