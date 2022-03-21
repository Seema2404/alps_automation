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
            keyword_UrlFilterTxt: () => cy.get('#sim_sub_cat_param_filter_sort_dropdown>div>div'),
            localeDdn: () => cy.get('[id*="locale_dropdown_button"]'),
            enterLocale: () => cy.get('#react-select-protocol-input'),
            exportIcon:() =>cy.xpath("//p[contains(text(),'Related Keywords')]//following-sibling::div"),
            versionNotification:()=>cy.xpath("//div[@id='version_notification_message']"),
            keywordUrlDdn: () => cy.get('#sim_sub_cat_param_filter_sort_dropdown'),
            keywordUrlDdnText: () => cy.get('#sim_sub_cat_param_filter_sort_dropdown div div div'),
            closeNotificationVersion : () => cy.get('#notification_close_icon'),
            relatedKWvalues:() =>cy.xpath("//div[contains(@id,'body_row')]/p"),
            keywordSortingIcon:()=> cy.get('#keyword_column div div'),
            searchVolumeIcon : () => cy.get('#keyword_search_volume div div'),
            searchVolumevalues:()=>cy.xpath("//div[contains(@id,'body_row')]/div/p"),
            keywordRelevanceIcon : () => cy.get('#kw_keyword_relevance div div'),
            keywordRelevanceValue : () =>cy.xpath("//div[contains(@id,'body_row')]/div[2]/p")
             
        }
    }
}

export const krtHomePg = new krtHomePage()
