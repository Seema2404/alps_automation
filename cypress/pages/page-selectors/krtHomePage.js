export class krtHomePage {
    constructor () {
        this.elements = {
            planningAndResearch: () => cy.get('div#root header div div:nth-child(2) nav div:nth-child(1)'),
            keywordExplorer: () => cy.get('a').contains('KEYWORD RESEARCH'),
            searchBox: () => cy.get('#locale_dropdown2'),
            searchBtn: () => cy.contains('Search'),
            localeText: () => cy.get('#locale_dropdown>div>div:nth-child(2)'),
            localeButton: () => cy.get('#locale_dropdown_button'),
            changeLoacale: () => cy.get('#react-select-protocol-option-0'),
            searchButton: () => cy.get('#locale_dropdown3'),
            validationMsgKw_Url: () => cy.contains('Please enter a valid Keyword or URL'),
            krtHomePageTxtBox: () => cy.get('#locale_dropdown2'),
            keyword_UrlFilterTxt: () => cy.get('#sim_sub_cat_param_filter_sort_dropdown>div>div')
        }
    }
}

export const krtHomePg = new krtHomePage()
