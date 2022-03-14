import { kga } from '../page-selectors/KGAHomePage'

export const selectLocale = (locale) => {
    kga.elements.localeDropdown().click()
    cy.get('div').contains(locale).click()
}

export const enterKeyword = (kw) => {
    kga.elements.inputKeyword().clear()
    kga.elements.inputKeyword().type(kw)
}

export const enterURL = (url) => {
    kga.elements.inputURL().clear()
    kga.elements.inputURL().type(url)
}

export const clickGo = () => {
    kga.elements.goButton().click()
}

export const validateResultsPage = () => {
    kga.elements.resultsTitle().should('contains.text', 'RESULTS')
}

export const validateRankingURLs = (rank) => {
    kga.elements.rankingURLs().should('have.length.greaterThan', 9)
}

export const verifySerpResultURL = (path) => {
    kga.elements.pageUrl().should('include', path )
}

export const verifyURLInTopRanking = () => {
    kga.elements.RankingNumber().then((txt) => {
        const RankNumber = txt.text()
        let flag=false

        if(RankNumber>0 && RankNumber<=10) {
            flag=true;
            expect(flag).to.be.true;
        }else {
            expect(flag).to.be.true;
        }    
    })
}

export const verifyDomainInTopRanking = () => {
    kga.elements.serpResultUrl().then((headerUrl) => {
        let HeaderURL = headerUrl.text().replace('‘', '').replace('’', '')

        kga.elements.serpResultRows().within(() => {
            kga.elements.RankingDomain().then((rankUrl) => {
                let rankURL= rankUrl.text()

                expect(rankURL).to.include(HeaderURL)
            })
        
            kga.elements.RankingNumber().then((txt) => {
                const RankNumber = txt.text()
        
                let flag=false
        
                if(RankNumber>0 && RankNumber<=10) {
                    flag=true;
                    expect(flag).to.be.true;
                }else {
                    expect(flag).to.be.true;
                }    
            })
        })
    })
}
