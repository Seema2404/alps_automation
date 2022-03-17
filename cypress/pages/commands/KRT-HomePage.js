import { krtHomePg } from "../page-selectors/krtHomePage"

export const clickPlanningAndResearch = () => {
    krtHomePg.elements.planningAndResearch().click()
}

export const clickKeywordResearch = () => {
    krtHomePg.elements.keywordExplorer().click({ force: true })
}

export const enterRelatedKeyword = (kw) => {
    krtHomePg.elements.searchBox().clear()
    krtHomePg.elements.searchBox().type(kw)
}

export const clickSearch = () => {
    krtHomePg.elements.searchBtn().click()
}

export const clickSelectorLocaleDdn = () => {
    krtHomePg.elements.localeDdn().click()
}

export const enterLocale = (loc) => { 
    krtHomePg.elements.enterLocale().type(loc).type('{enter}')
}
export const changeLocaleButton = () => {
    krtHomePg.elements.localeButton().click()
}
export const selectLocaleFromList = () => {
    krtHomePg.elements.changeLoacale().click()
}
export const verifyChnageLocale = () => {
    krtHomePg.elements.localeText().should('have.text', 'en-hk')
}
export const clickSearchButton = () => {
    krtHomePg.elements.searchButton().click()
}
export const VerifyValidationMessage = () => {
    krtHomePg.elements.validationMsgKw_Url().should('be.visible')
}
export const clickKeywordAndURLTextBox = (url) => {
    krtHomePg.elements.krtHomePageTxtBox().clear()
    krtHomePg.elements.krtHomePageTxtBox().type(url)
}
export const verifyAutoSelectedKeywordUrlFilter = (url, filter) => {
    krtHomePg.elements.krtHomePageTxtBox().should('have.value', url)
    krtHomePg.elements.keyword_UrlFilterTxt().should('have.text', filter)
}
export const PlanningAndResearch = () => {
    krtHomePg.elements.krtPlanningAndResearch().click()
}