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
            kgabutton: () => cy.get('#serpResult_progress_keywordGapAnalysis_button'),
            kgapagetitle: () => cy.get('#kwAnalysis_metaInfo_title'),
            kgaAccordion: () => cy.get('#kwAnalysis_keywordSearch_acc_head'),
            kgaSubmit: () => cy.get('#kwAnalysis_keywordSearch_submit_button'),
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
            searchVolumeText: () => cy.get('#serpResult_resultInfo_searchVolume_title'),
            svgIcon: () => cy.get('#serpResult_resultInfo_searchVolume_title__tooltip>span>svg'),
            serpResultInfo: () => cy.get('#serpResult_resultInfo_searchVolume_title__tooltip_text'),
            kgaDownload: () => cy.get('.fright.download_right_container>i',{ timeout: 60000 }),
            kgaDownloadOption: () => cy.get('#kwAnalysis_metaInfo_downloadSerp_button'),
            kgaSvgIcon: () => cy.get('#search_vol_label_tooltip>span>svg'),
            kgaSearchVolumeText: () => cy.get('#search_vol_label_tooltip_text'),
            pageSimulationSvgInfoIcon: () => cy.get('#mkw_related_kwd_rank_search_volume_tooltip>span>svg'),
            pageSimulationSvgInfoText: () => cy.get('#mkw_related_kwd_rank_search_volume_tooltip_text'),
            pageSimulationModifyButton: () => cy.get('#contentSimulation_multiKeyword_accordionToggle_button'),
            pageSimulationZoomButton: () => cy.get('#zoom-selector_button'),
            zoomKeywordImpactSvgIcon: () => cy.get('#sim_impacted_kw_sec_label_tooltip>span>svg'),
            zoomKeywordImpactSvgText: () => cy.get('#sim_impacted_kw_sec_label_tooltip_text'),
            kgaUrlRank: () => cy.get('.serpResult_rankTable_success_urlStatus td div div div').contains('121'),
            kgaKeywordPageRelevance: () => cy.get('#keyword-page-relevance-acc-title'),
            kgaContentParameterH2Score: () => cy.get('#h-2-score-sub-accordion-head'),
            kgaContentParameterH1Score: () => cy.get('#h-1-score-sub-accordion-head'),
            kgaContentParameterMetaDisScore: () => cy.get('#meta-description-score-sub-accordion-head'),
            kgaContentParameterBodyConScore: () => cy.get('#body-content-score-sub-accordion-head'),
            kgaContentParameterUrlScore: () => cy.get('#url-score-sub-accordion-head'),
            kgaContentParameterTitleScore: () => cy.get('#title-score-sub-accordion-head'),
            kgaTechnicalTab: () => cy.get('#kwAnalysis_parameterGroups_technical_tab'),
            kgaTechnicalParameterOptimal: () => cy.get('#optimal-usage-of-html-acc'),
            kgaTechnicalParameterCoreWeb: () => cy.get('#core-web-vitals-acc'),
            kgaTechnicalParameterOtherWeb: () => cy.get('#other-web-vitals-acc'),
            kgaAuthorityTab: () => cy.get('#kwAnalysis_parameterGroups_authority_tab'),
            kgaAuthorityParameterPage: () => cy.get('#page-e-a-t-signals-acc'),
            kgaAuthorityParameterDomain: () => cy.get('#domain-e-a-t-signals-acc'),
            kgaAuthorityParameterKeyword: () => cy.get('#keyword-backlink-relevance-acc'),
            kgaAccordianPage: () => cy.get('#kwAnalysis_keywordSearch_acc_head'),
            kgaAccordianPageUrlSearch: () => cy.get('#kwAnalysis_keywordSearch_domain'),
            kgaAccordianPageKeywordSearch: () => cy.get('#kwAnalysis_keywordSearch_keyword'),
            verifyHighFilterOption: () => cy.get('#very-high-filter-option'),
            highFilterOption: () => cy.get('#high-filter-option'),
            mediumFilterOption: () => cy.get('#medium-filter-option'),
            lowFilterOption: () => cy.get('#low-filter-option'),
            veryLowFilterOPtion: () => cy.get('#very-low-filter-option'),
            kgaKeywordPerformanceTrafficValue: () => cy.get('#traffic-value'),
            kgaKeywordPerformanceCrtValue: () => cy.get('#ctr-value'),
            kgaSimulationPage: () => cy.get('#contentSimulation_multiKeyword_accordionToggle_button > div > h3 > span:nth-child(1)'),            
            pageUrl: () => cy.url(),
            RankingNumber: () => cy.get('td div div [alt="rank"] +div'),
            RankingDomain: () => cy.xpath('//img[@alt="rank"]/ancestor::tr/descendant::a'),
            serpResultUrl: () => cy.get('#serpResult_metaInfo_url_text'),
            serpResultRows: () => cy.get('table tbody tr[class*="serpResult"]')
        }
    }
}

export const kga = new KGAHomePage()
