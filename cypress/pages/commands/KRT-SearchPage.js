import { krtSearch } from "../page-selectors/krtSearchPage";

export const verifyKrtSearchPage = (path) => {
    krtSearch.elements.pageUrl().should('include', path )
}

export const verifySearchBoxKeyword = (txt) => {
    krtSearch.elements.searchBox().invoke('val').then((KeywordTxt) => {

        expect(KeywordTxt).to.equals(txt)
    })
}

export const verifyLocaleText = (txt) => {
    krtSearch.elements.localeText().then((localeTxt) => {
        let locale = localeTxt.text()
        expect(locale).to.equals(txt)
    })
}