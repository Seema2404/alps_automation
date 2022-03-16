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