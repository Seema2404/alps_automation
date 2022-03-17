export class krtSearchPage {
    constructor () {
        this.elements = {
            pageUrl: () => cy.url(),
            localeText: () => cy.get('#locale_dropdown_button span div + div'),
            searchBox: () => cy.get('#locale_dropdown2'),
            localeDdn: () => cy.get('[id*="locale_dropdown_button"]'),
            enterLocale: () => cy.get('#react-select-protocol-input'),
            keywordUrlDdnText: () => cy.get('#sim_sub_cat_param_filter_sort_dropdown div div div')
        }
    }
}

export const krtSearchPg = new krtSearchPage()
