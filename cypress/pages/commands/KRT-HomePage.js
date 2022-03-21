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
    cy.wait(1000)
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

export const dispsearchBtn = () => {
    krtHomePg.elements.searchBtn().should('be.disabled')
}

export const dispexportIcon = () => {
    krtHomePg.elements.exportIcon().should('be.disabled')
}

export const dispnotificationversion = (verNotification) => {
    krtHomePg.elements.versionNotification().then(function (fetchDispText) {
        const notificationversion = fetchDispText.text()

        expect(notificationversion).to.include(verNotification)
        expect(notificationversion).to.contains(verNotification)
    })
}
export const selectUrlDropdown = () => {
    krtHomePg.elements.keywordUrlDdn().click().last().click()
}

export const verifyKeywordUrlDdnText = (text) => {
    krtHomePg.elements.keywordUrlDdnText().then((txt) => {
       const DdnText = txt.text()

       if(text.includes('https://')) {
           expect(DdnText).to.equals('URL')
       } else {
            expect(DdnText).to.equals('Keyword')
       }
    })
}