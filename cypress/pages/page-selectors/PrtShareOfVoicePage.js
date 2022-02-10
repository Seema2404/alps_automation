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
            shareOfVoiceOverview : () => cy.get('#share-of-voice-overview-url'),
            shareOfVoiceTopFilter : () => cy.get('div[class*="sc-ikTlrC doSEgz"] > span + div > div > div + div')
        }
    }
}

export const prtShareOfVoice = new PrtShareOfVoicePage()
