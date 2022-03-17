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
