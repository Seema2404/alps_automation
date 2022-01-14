export class SimulationPage {
    constructor () {
        this.elements = {
            simulationTitle: () => cy.get('#kw_url_simulation_title'),
            proceedToSimulationButton: () => cy.get('#contentSimulation_multiKeyword_submit_button'),
            // simulationUrlLabel: () => cy.get('span').contains('SIMULATOR For URL'),
            simulationUrlLabel: () => cy.get('span').contains('Simulation URL'),
            keywordLevelImpactLink: () => cy.get('#kw_level_impact_link_button'),
            trafficAndRankLink: () => cy.get('#sim_left_traffic_rank_accordion_title_text'),
            editorContainer: () => cy.get('#sim_editor'),
            scoresContainer: () => cy.get('#sim_left_pane_Content_tab_title'),
            runSimulationButton: () => cy.get('#contentSimulation_editor_simulateScores_button'),
            downloadButton: () => cy.get('#catDashboardDowload_button'),
            keywordLevelImpactModalTitle: () => cy.get('#kw_level_impact_modal-head'),
            keywordLevelImpactModalTable: () => cy.get('#kw_level_impact_modal_table'),
            keywordLevelImpactModalCloseButton: () => cy.get('#kw_level_impact_modal-head-button'),
            zoomModeButton: () => cy.get('#zoom-selector_button'),
            zoomModeScoresContainer: () => cy.get('.left_navigation'),
            zoomModeKeywordImpactContainer: () => cy.get('#sim_impacted_kw_sec'),
            viewOriginalButton: () => cy.get('#contentSimulation_editor_viewOriginal_button_button'),
            editorTitleInput: () => cy.get('#content-editor_titleField_input'),
            enterUrlInput: () => cy.get('#home_keywordSearch_domain'),
            simulationHistoryHeading: () => cy.get('#simulation-history-heading'),
            goButton: () => cy.get('#home_keywordSearch_submit_button'),
            inputKeywordTab: () => cy.get('#kw_url_project div div div').contains('Input Keywords'),
            addKeywordInput: () => cy.get('#contentSimulation_multiKeyword_keyword'),
            addKeywordButton: () => cy.get('#contentSimulation_multiKeyword_addKeyword_button')
        }
    }
}

export const simulation = new SimulationPage()
