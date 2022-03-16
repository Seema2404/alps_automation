export class krtHomePage {
    constructor () {
        this.elements = {
            planningAndResearch: () => cy.get('div#root header div div:nth-child(2) nav div:nth-child(1)'),
            keywordExplorer: () => cy.get('a').contains('KEYWORD RESEARCH'),
        }
    }
}

export const krtHome = new krtHomePage()
