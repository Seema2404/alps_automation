export class PrtKeywordExplorerPage {
    constructor () {
        this.elements = {
            planningAndResearch: () => cy.contains('PLANNING & RESEARCH'),
            // planningAndResearch: () => cy.get('div').contains('PLANNING & RESEARCH'),
            // planningAndResearch: () => cy.get('div#root header div div:nth-child(2) nav div:nth-child(1)'),
            keywordExplorer: () => cy.get('a').contains('KEYWORD EXPLORER'),
            iFrame: '.report-style-class iframe',
            iFrameUrl: { url: 'https://app.powerbi.com' },
            iFrameSearchBox : 'div[class*="visual-textFilter"] iframe',
            searchVolume: '.value title',
            searchEngineLabel: () => cy.get('#breadcrumb + div div div div:nth-child(1) span'),
            filtersContainer: (getBody) => getBody().find('.scrollWrapper div p span').contains('FILTERS'),
            // keywordExplorerSection: (getBody) => getBody().find('h3.preTextWithEllipsis').contains('Keyword Explorer'),
            searchVolumeSection: (getBody) => getBody().find('h3.preTextWithEllipsis').contains('Search Volume'),
            keywordCountSection: (getBody) => getBody().find('h3.preTextWithEllipsis').contains('Keyword Count'),
            keywordExplorerSection: ()=>cy.contains('KEYWORD EXPLORER'),
            searchEngine : () => cy.contains('Search Engine'),
            product : () => cy.contains('Product'),
            locale : () => cy.contains('Locale'),
            device : () => cy.contains('Device'),
            tableKW : (getBody)=>getBody().find('div').contains('#Keywords'),
            tableSearchVolume : (getBody)=>getBody().find('div').contains('Search Volume'),
            tableTopicDifficulty : (getBody)=>getBody().find('div').contains('Topic Difficulty'),
            keywordExplorerSearchBox : (getBody2) => getBody2().find('div').contains('input[name="search-field"]'),
            

        }
    }
}

export const prtKeywordExplorer = new PrtKeywordExplorerPage()
