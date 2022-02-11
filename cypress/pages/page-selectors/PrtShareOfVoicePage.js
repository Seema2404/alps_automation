export class PrtShareOfVoicePage {
    constructor () {
        this.elements = {
            planningAndResearch: () => cy.get('div').contains('PLANNING & RESEARCH'),
            shareOfVoice: () => cy.get('a').contains('SHARE OF VOICE'),
            iFrame: '.report-style-class iframe',
            iFrameUrl: { url: 'https://app.powerbi.com' },
            searchEngineLabel: () => cy.get('#breadcrumb + div + div div div div:nth-child(1) span'),
            filtersContainer: (getBody) => getBody().find('.scrollWrapper div p span').contains('FILTERS'),
            searchVolumeSection: (getBody) => getBody().find('h3.preTextWithEllipsis').contains('Search Volume'),
            keywordCountSection: (getBody) => getBody().find('h3.preTextWithEllipsis').contains('Keyword Count'),
            shareOfVoiceByBusinessType: (getBody) => getBody().find('h3.preTextWithEllipsis').contains('Share of Voice by Business Type'),
            shareOfVoiceByDomain: (getBody) => getBody().find('h3.preTextWithEllipsis').contains('Share of Voice by Domain'),
            tableHeaderSOVDomain: (getBody) => getBody().contains('Domain'),
            tableHeaderSOV: (getBody) => getBody().contains('Share Of Voice'),
            tableHeaderSOVTraffice: (getBody) => getBody().contains('Traffic'),
            tableHeaderSOVKWRank1to5: (getBody) => getBody().contains('#KWs for Rank 1-5'),
            tableHeaderSOVKWRank6to10: (getBody) => getBody().contains('#KWs for Rank 6-10'),
            tableHeaderSOVKWRank11to20: (getBody) => getBody().contains('#KWs for Rank 11-20'),
            shareOfVoiceOverview : () => cy.get('#share-of-voice-overview-url'),
            shareOfVoiceCategory : () => cy.get('#share-of-voice-category-url'),
            searchEngine : () => cy.contains('Search Engine'),
            product : () => cy.contains('Product'),
            locale : () => cy.contains('Locale'),
            device : () => cy.contains('Device'),
            domain : () => cy.contains('Domain'),
            shareOfVoiceTopFilter : () => cy.get('div[class*="sc-ikTlrC doSEgz"] > span + div > div > div + div')
        }
    }
}

export const prtShareOfVoice = new PrtShareOfVoicePage()
