export class KGASerpPage {
    constructor () {
        this.elements = {
            serpPageKGA: () => cy.get('#serpResult_progress_keywordGapAnalysis_button'),
            serpPageSimulation : () =>cy.get('#serpResult_progress_contentSimulation_button'),
            resulttitle: () => cy.get('#serpResult_metaInfo_keyword_for'),
            serpKeywordheading : () => cy.get('#serpResult_metaInfo_keyword_text'),
            serpUrlheading : () => cy.get('#serpResult_metaInfo_url_text'),
            serpPageMultikeyWordToggleButton :() => cy.get('#serpResult_keywordSearch_acc_head'),
            serpPageTitle : () => cy.get('#serpResult_resultInfo_serpPacks_title'),
            serpPageSearchVolume : () => cy.get('#serpResult_resultInfo_searchVolume_title'),
            serpRankText :() => cy.get('#serpResult_domainRank_label'),
            serpDomainRankValue :() => cy.get('#serpResult_domainRank_label'),
            URLForSimulation : () => cy.get('#serpResult_keywordSearch_domain'),
            LocaleDropdown : () => cy.get('#serpResult_keywordSearch_locale_dropdown_button'),
            MultiKeyword : () => cy.get('#serpResult_keywordSearch_keyword'),
            submit : () => cy.get('#serpResult_keywordSearch_submit_button'),
            breadCrumb : () =>  cy.get('#breadcrumb'),
            rankingUrl : () => cy.get('.sc-bkypNX')

        }
    }
}
export const KGASerp = new KGASerpPage()