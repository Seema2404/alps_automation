export class KGAHomePage {
    constructor () {
        this.elements = {
            kgatab: () => cy.get('#keyword-gap-analysis'),
            kgahomepagebreadcrumbb: () => cy.get('#breadcrumb'),
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
            pageUrl: () => cy.url(),
            RankingNumber: () => cy.get('td div div [alt="rank"] +div'),
            RankingDomain: () => cy.xpath('//img[@alt="rank"]/ancestor::tr/descendant::a'),
            serpResultUrl: () => cy.get('#serpResult_metaInfo_url_text'),
            serpResultRows: () => cy.get('table tbody tr[class*="serpResult"]')
        }
    }
}

export const kga = new KGAHomePage()
