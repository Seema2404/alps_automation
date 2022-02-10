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
            tableTitleCategory: (getBody) => getBody().find('h3.preTextWithEllipsis').contains("Topical Authority report"),
            tableTitleDomain: (getBody) => getBody().contains('Topical Authority report')
        }
    }
}

export const prtTopicalAuthority = new PrtTopicalAuthorityPage()
