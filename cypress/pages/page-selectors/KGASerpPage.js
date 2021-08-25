{
    constructor () {
        this.elements = {
            SerpPageKGA: () => cy.get('#serpResult_progress_keywordGapAnalysis_button'),
            SerpPageSimulation : () cy.get('#serpResult_progress_contentSimulation_button'),
            resulttitle: () => cy.get('#serpResult_metaInfo_keyword_for'),
            serpKeywordheading : () => cy.get('#serpResult_metaInfo_keyword_text'),
            serpUrlheading : () => cy.get('#serpResult_metaInfo_url_text'),
            serpPagemultikeywordtogglebutton :() => cy.get('#serpResult_keywordSearch_acc_head'),
            serpPagetitle : () => cy.get('#serpResult_resultInfo_serpPacks_title'),
            serpPagesearchVolume : () => cy.get('#serpResult_resultInfo_searchVolume_title'),
            serpRanktext :() => cy.get('#serpResult_domainRank_label'),
            serpDomainrankvalue :() => cy.get('#serpResult_domainRank_label'),
            URLforSimulation : () => cy.get('#serpResult_keywordSearch_domain'),
            LocaleDropdown : () => cy.get('#serpResult_keywordSearch_locale_dropdown_button'),
            MultiKeyword : () => cy.get('#serpResult_keywordSearch_keyword'),
            Submit : () => cy.get('#serpResult_keywordSearch_submit_button'),
            Breadcrumb : () =>  cy.get('#breadcrumb'),
            RankingUrl : () => cy.get('.sc-bkypNX')

        }
    }
}
