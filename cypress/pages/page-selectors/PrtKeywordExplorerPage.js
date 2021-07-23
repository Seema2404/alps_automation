export class PrtKeywordExplorerPage {
    constructor () {
        this.elements = {
            planningAndResearch: () => cy.get('div').contains('PLANNING & RESEARCH'),
            keywordExplorer: () => cy.get('a').contains('KEYWORD EXPLORER'),
            iFrame: '.report-style-class iframe',
            iFrameUrl: { url: 'https://app.powerbi.com' },
            searchVolume: '.value title'
        }
    }
}

export const prtKeywordExplorer = new PrtKeywordExplorerPage()
