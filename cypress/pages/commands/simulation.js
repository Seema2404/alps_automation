import { simulation } from '../page-selectors/SimulationPage'

export const validateSimulationTitle = () => {
    simulation.elements.simulationTitle().should('be.visible')
}

export const clickProceedToSimulationButton = () => {
    simulation.elements.proceedToSimulationButton().click()
}

export const validateSimulationUrlLabel = () => {
    simulation.elements.simulationUrlLabel().should('be.visible')
}

export const validateKeywordLevelImpactLink = () => {
    simulation.elements.keywordLevelImpactLink().should('be.visible')
}

export const validateTrafficAndRankLink = () => {
    simulation.elements.trafficAndRankLink().should('be.visible')
}

export const validateEditorContainer = () => {
    simulation.elements.editorContainer().should('be.visible')
}

export const validateScoresContainer = () => {
    simulation.elements.scoresContainer().should('be.visible')
}

export const validateRunSimulationButton = () => {
    simulation.elements.runSimulationButton().should('be.visible')
}

export const validateDownloadButton = () => {
    simulation.elements.downloadButton().should('be.visible')
}

export const clickKeywordLevelImpactLink = () => {
    simulation.elements.keywordLevelImpactLink().click()
}

export const validateKeywordLevelImpactModalTitle = () => {
    simulation.elements.keywordLevelImpactModalTitle().should('be.visible')
}

export const validateKeywordLevelImpactModalTable = () => {
    simulation.elements.keywordLevelImpactModalTable().should('be.visible')
}

export const clickKeywordLevelImpactModalCloseButton = () => {
    simulation.elements.keywordLevelImpactModalCloseButton().click()
}

export const clickZoomModeButton = () => {
    simulation.elements.zoomModeButton().click()
}

export const validateZoomModeScoresContainer = () => {
    simulation.elements.zoomModeScoresContainer().should('be.visible')
}

export const validatezoomModeKeywordImpactContainer = () => {
    simulation.elements.zoomModeKeywordImpactContainer().should('be.visible')
}

export const validateViewOriginalButton = () => {
    simulation.elements.viewOriginalButton().should('be.visible')
}

export const editTitle = () => {
    cy.wait(5000)
    simulation.elements.editorTitleInput().type('edited')
}

export const clickRunSimulationButton = () => {
    simulation.elements.runSimulationButton().click()
}

export const validateSuccessfulSimulation = () => {
    simulation.elements.successSimulationNotification().should('be.visible')
}

export const validateEnterUrlInput = () => {
    simulation.elements.enterUrlInput().should('be.visible')
}

export const validateSimulationHistoryHeading = () => {
    simulation.elements.simulationHistoryHeading().should('be.visible')
}

export const enterUrlInput = (url) => {
    simulation.elements.enterUrlInput().clear()
    simulation.elements.enterUrlInput().type(url)
}

export const clickGoButton = () => {
    simulation.elements.goButton().click()
}

export const clickInputKeywordTab = () => {
    simulation.elements.inputKeywordTab().click()
}

export const enterAddKeywordInput = (kw) => {
    simulation.elements.addKeywordInput().type(kw)
}

export const clickAddKeywordButton = () => {
    simulation.elements.addKeywordButton().click()
}
