export class PrtTopicalAuthorityPage {
    constructor () {
        this.elements = {
            planningAndResearch: () => cy.get('div').contains('PLANNING & RESEARCH'),
            topicalAuthority: () => cy.get('a').contains('TOPICAL AUTHORITY'),
            iFrame: '.report-style-class iframe',
            iFrameUrl: { url: 'https://app.powerbi.com' },
            searchEngineLabel: () => cy.get('#breadcrumb + div + div div div div:nth-child(1) span'),
            filtersContainer: (getBody) => getBody().find('.scrollWrapper div p span').contains('FILTERS'),
            domainTab: () => cy.get('#topical-authority-domain-tab'),
            tableContainer: (getBody) => getBody().find('div.tableExContainer'),
            tableTitleCategory: (getBody) => getBody().find('h3.preTextWithEllipsis').contains("Topical Authority report for category 'Balance Transfer'"),
            tableTitleDomain: (getBody) => getBody().find('h3.preTextWithEllipsis').contains('Topical Authority report for domain'),
            searchEngine : () => cy.contains('Search Engine'),
            product : () => cy.contains('Product'),
            locale : () => cy.contains('Locale'),
            domain : () => cy.get('span').contains('Domain'),
            shareOfVoiceTopFilter : () => cy.get('div[class*="sc-ikTlrC doSEgz"] > span + div > div > div + div'),
        }
    }
}

export const prtTopicalAuthority = new PrtTopicalAuthorityPage()
