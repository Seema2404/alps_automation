export class PrtKeywordExplorerPage {
    constructor () {
        this.elements = {
            // planningAndResearch: () => cy.get('div').contains('PLANNING & RESEARCH'),
            planningAndResearch: () => cy.get('div#root header div div:nth-child(2) nav div:nth-child(1)'),
            keywordExplorer: () => cy.get('a').contains('KEYWORD EXPLORER'),
            iFrame: '.report-style-class iframe',
            iFrameUrl: { url: 'https://app.powerbi.com' },
            searchVolume: '.value title'
        }
    }
}

export const prtKeywordExplorer = new PrtKeywordExplorerPage()
