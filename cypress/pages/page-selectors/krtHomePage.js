export class krtHomePage {
    constructor () {
        this.elements = {
            planningAndResearch: () => cy.get('div#root header div div:nth-child(2) nav div:nth-child(1)'),
            keywordExplorer: () => cy.get('a').contains('KEYWORD RESEARCH'),
            searchBox: () => cy.get('#locale_dropdown2'),
            searchBtn: () => cy.contains('Search'),
            

        }
    }
}

export const krtHomePg = new krtHomePage()
