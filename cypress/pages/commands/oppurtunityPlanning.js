import { op } from '../page-selectors/OppurtunityPlanningPage'

export const validateOpSummaryTitle = () => {
    op.elements.opSummaryTitle().should('have.text', 'Opportunity Summary')
}

export const validateOpLeftToolbar = () => {
    op.elements.opLeftToolbar().should('be.visible')
}

export const validateOpRightToolbar = () => {
    op.elements.opRightToolbar().should('be.visible')
}

export const validateOpDownloadButton = () => {
    op.elements.opDownloadButton().should('be.visible')
}

export const validateOpEditThemesButton = () => {
    op.elements.opEditThemesButton().should('be.visible')
}

export const validateOpSummaryContainers = () => {
    op.elements.opSummaryContainers().should('have.length', 4)
}

export const validateOpResetButtons = () => {
    op.elements.opResetButtons().should('have.length', 2)
}

export const validateOpForecastButtons = () => {
    op.elements.opForecastButtons().should('have.length', 2)
}

export const validateOpTableHead = () => {
    op.elements.opTableHead().should('be.visible')
}

export const validateOpMainTable = () => {
    op.elements.opMainTable().should('be.visible')
}

export const validateOpTableColumn1 = () => {
    op.elements.opTableColumn1().should('contain.text', 'Theme')
}

export const validateOpTableColumn2 = () => {
    op.elements.opTableColumn2().should('be.visible')
}

export const validateOpTableColumn3 = () => {
    op.elements.opTableColumn3().should('be.visible')
}

export const validateOpTableColumn4 = () => {
    op.elements.opTableColumn4().should('contain.text', 'Difficulty')
}
