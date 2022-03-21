export class krtSearchPage {
    constructor () {
        this.elements = {
            pageUrl: () => cy.url(),
            localeText: () => cy.get('#locale_dropdown_button span div + div'),
            searchBox: () => cy.get('#locale_dropdown2'),
            localeDdn: () => cy.get('[id*="locale_dropdown_button"]'),
            enterLocale: () => cy.get('#react-select-protocol-input'),
            resarchTableBody: () => cy.get('#KW_research_table_body'),
            resarchTableData: () => cy.get('#KW_research_table_body>div'),
            keywordUrlDdnText: () => cy.get('#sim_sub_cat_param_filter_sort_dropdown div div div'),
            totalKeywordCount: () => cy.get('#KW_count_column > p'),
            krtTableSearchVolume: () => cy.get('#KW_research_table_body>div>div:nth-child(2)>p'),
            expectedserachvolume:()=> cy.get('#KW_search_volume_column>p'),
            keywordUrlDdnText: () => cy.get('#sim_sub_cat_param_filter_sort_dropdown div div div'),
            searchBtn: () => cy.contains('Search'),
            keywordText: () => cy.get('[id*="body_row"] > p'),
            
        }
    }
}

export const krtSearchPg = new krtSearchPage()
