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
    kga.elements.searchBtn().click()
}
