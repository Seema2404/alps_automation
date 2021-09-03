export class KGAHomePage {
    constructor () {
        this.elements = {
            localeDropdown: () => cy.get('#home_keywordSearch_locale_dropdown'),
            inputKeyword: () => cy.get('#home_keywordSearch_keyword'),
            inputURL: () => cy.get('#home_keywordSearch_domain'),
            goButton: () => cy.get('#home_keywordSearch_submit_button'),
            resultsTitle: () => cy.get('#serpResult_metaInfo_keyword_for')
        }
    }
}

export const kga = new KGAHomePage()
