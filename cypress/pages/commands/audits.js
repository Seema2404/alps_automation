import { audits } from '../page-selectors/auditsPage'

export const validateCgaTitle = () => {
    audits.elements.cgaTitle().should('have.text', 'Content Gap Analysis')
}

export const validateCgaLeftToolbar = () => {
    audits.elements.cgaLeftToolbar().should('be.visible')
}

export const validateCgaRightToolbar = () => {
    audits.elements.cgaRightToolbar().should('be.visible')
}

export const validateCgaDownloadButton = () => {
    audits.elements.cgaDownloadButton().should('be.visible')
}

export const validateCgaTableHead = () => {
    audits.elements.cgaTableHead().should('be.visible')
}

export const validateCgaMainTable = () => {
    audits.elements.cgaMainTable().should('be.visible')
}

export const validateCgaTableColumn1 = () => {
    audits.elements.cgaTableColumn1().should('contain.text', 'Theme')
}

export const validateCgaTableColumn2 = () => {
    audits.elements.cgaTableColumn2().should('contain.text', 'Rank')
}

export const validateCgaTableColumn3 = () => {
    audits.elements.cgaTableColumn3().should('contain.text', 'Content Score')
}

export const validateCgaTableColumn4 = () => {
    audits.elements.cgaTableColumn4().should('contain.text', 'Traffic')
}

export const validateCgaTableColumn5 = () => {
    audits.elements.cgaTableColumn5().should('contain.text', 'Recommendations')
}

export const clickBaTab = () => {
    audits.elements.baTab().click()
}

export const validateBaTitle = () => {
    audits.elements.baTitle().should('be.visible')
}

export const validateBaPerformanceAnalysisLabel = () => {
    audits.elements.baPerformanceAnalysisLabel().should('be.visible')
}

export const validateBaSelectDomainDropdown = () => {
    audits.elements.baSelectDomainDropdown().should('be.visible')
}

export const validateBaAnalyzeButton = () => {
    audits.elements.baAnalyzeButton().should('be.visible')
}

export const clickTaTab = () => {
    audits.elements.taTab().click()
}

export const validateTaTitle = () => {
    audits.elements.taTitle().should('be.visible')
}

export const validateTaMyDomainDropdown = () => {
    audits.elements.taMyDomainDropdown().should('be.visible')
}

export const validateTaPageCrawledLabel = () => {
    audits.elements.taPageCrawledLabel().should('be.visible')
}

export const validateTaIssuesFoundLabel = () => {
    audits.elements.taIssuesFoundLabel().should('be.visible')
}

export const validateTaIssuesCategoriesLabel = () => {
    audits.elements.taIssuesCategoriesLabel().should('be.visible')
}

export const validateTaMostOccuringIssuesLabel = () => {
    audits.elements.taMostOccuringIssuesLabel().should('be.visible')
}

export const validateTaImportantTechnicalChecksLabel = () => {
    audits.elements.taImportantTechnicalChecksLabel().should('be.visible')
}
