export class PrtTopicalAuthorityPage {
    constructor () {
        this.elements = {
            planningAndResearch: () => cy.get('div').contains('PLANNING & RESEARCH'),
            topicalAuthority: () => cy.get('a').contains('TOPICAL AUTHORITY'),
            iFrame: '.report-style-class iframe',
            iFrameUrl: { url: 'https://app.powerbi.com' },
            iFrameSearchBox : 'div[class*="visual-textFilter"] iframe',
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
            tableHeaderDomain: (getBody) => getBody().find('div').contains('Domain'),
            tableHeaderTopicalAuthority: (getBody) => getBody().contains('#Topical Authority'),
            tableHeaderUrlCount: (getBody) => getBody().contains('#URL Count'),
            tableHeaderUrlRating20: (getBody) => getBody().contains('#URL Rating <20'),
            tableHeaderUrlRating20to40: (getBody) => getBody().contains('#URL Rating 20-40'),
            tableHeaderUrlRating40: (getBody) => getBody().contains('#URL Rating >40'),
            tableHeaderUrlRatingNA: (getBody) => getBody().contains('#URL Rating NA'),
            tableHeaderKwsOnPage1: (getBody) => getBody().contains('#KWs on Page 1 '),
            tableHeaderKwsOnPag2: (getBody) => getBody().contains('#KWs on Page 2'),
            tableHeaderKwsBeyondPage2: (getBody) => getBody().contains('#Kws beyond Page 2'),
            domainTableData : (getBody) => getBody().find('div.bodyCells div[class*="pivotTableCellWrap cell-interactive tablixAlignLeft"]'),
        }
    }
}

export const prtTopicalAuthority = new PrtTopicalAuthorityPage()
