import { krtSearchPg } from "../page-selectors/krtSearchPage";

export const verifyKrtSearchPage = (path) => {
    krtSearchPg.elements.pageUrl().should('include', path )
}

export const verifySearchBoxKeyword = (txt) => {
    krtSearchPg.elements.searchBox().invoke('val').then((KeywordTxt) => {
        
        expect(KeywordTxt).to.equals(txt)
    })
}

export const verifyLocaleText = (txt) => {
    krtSearchPg.elements.localeText().then((localeTxt) => {
        let locale = localeTxt.text()
        expect(locale).to.equals(txt)
    })
}

export const clickSelectorLocaleDdn = () => {
    krtSearchPg.elements.localeDdn().click()
}

export const updateLocale = (loc) => { 
    krtSearchPg.elements.enterLocale().type(loc).type('{enter}')
}

export const updateKeywordOrURL = (txt) => {
    krtSearchPg.elements.searchBox().clear()
    krtSearchPg.elements.searchBox().type(txt)
    cy.wait(1000)
}

export const verifyUpdateKeywordOrURL = (txt) => {
    krtSearchPg.elements.searchBox().invoke('val').then((KeywordTxt) => {
        
        expect(KeywordTxt).to.equals(txt)
    })
}

export const verifyKeywordUrlDdnText = (text) => {
    krtSearchPg.elements.keywordUrlDdnText().then((txt) => {
       const DdnText = txt.text()

       if(text.includes('https://')) {
           expect(DdnText).to.equals('URL')
       } else {
            expect(DdnText).to.equals('Keyword')
       }
    })
}

export const clickSearch = () => {
    krtSearchPg.elements.searchBtn().click()
}

export const verifySearchResultByKeyword = (searchKW) => {
    krtSearchPg.elements.keywordText().should('contain.text', searchKW)
}

export const verifySearchResultByURL = (url) => {
    let searchKW
    const urlLength = url.split(".").length;
    
    if(urlLength == 2) {
        searchKW = url.split(".").splice(0,1).join('')
    } else if(urlLength == 3) {
        searchKW = url.split(".").splice(1,1).join(' ')
    } else {
        searchKW = url 
    }

    krtSearchPg.elements.keywordText().should('contains.text', searchKW)
}
