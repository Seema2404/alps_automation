export class krtSearchPage {
    constructor () {
        this.elements = {
            pageUrl: () => cy.url(),
            localeText: () => cy.get('#locale_dropdown_button span div + div'),
            searchBox: () => cy.get('#locale_dropdown2'),
            localeDdn: () => cy.get('[id*="locale_dropdown_button"]'),
            enterLocale: () => cy.get('#react-select-protocol-input'),
        }
    }
}

export const krtSearchPg = new krtSearchPage()
