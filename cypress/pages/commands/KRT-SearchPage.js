import { count } from "console";
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
}

export const verifyUpdateKeywordOrURL = (txt) => {
    krtSearchPg.elements.searchBox().invoke('val').then((KeywordTxt) => {
        
        expect(KeywordTxt).to.equals(txt)
    })
}
export const countResearchTableData = () => {
    // krtSearchPg.elements.resarchTableBody().scrollTo('bottom')
    cy.wait(2000)
    krtSearchPg.elements.resarchTableData().then(($rows) => {
        let countData=0
        for (let index = 0; index < $rows.length; index++) {
            krtSearchPg.elements.resarchTableBody().scrollTo('bottom')
            countData++           
        }
        cy.log(countData)
    })
}