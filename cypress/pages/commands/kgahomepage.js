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


export const clickKgaButton = () => {
    kga.elements.kgabutton().click()
    
}
export const clickKgaAccordion = () => {
    kga.elements.kgaAccordion().click()
    
}

export const clickKgaSubmit = () => {
    kga.elements.kgaSubmit().click()
    
}


export const validatingKgaPageTitle = () => {
    kga.elements.kgapagetitle().should('be.visible')
}

