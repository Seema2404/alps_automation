import { krtHomePage } from "../page-selectors/krtHomePage"

export const clickPlanningAndResearch = () => {
    PrtKeywordResearchPage.elements.planningAndResearch().click()
}

export const clickKeywordExplorer = () => {
    PrtKeywordResearchPage.elements.keywordExplorer().click({ force: true })
}