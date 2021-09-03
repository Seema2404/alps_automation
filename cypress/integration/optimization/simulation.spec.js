describe('As a Simulation user', () => {

    before(() => {
        cy.loginUser('Iquanti Training')
    })
    beforeEach(() => {
        cy.restoreLocalStorage()
    })
    afterEach(() => {
        cy.saveLocalStorage()
    })
    it('verify Simulation homepage', () => {
        cy.get('div.active').click()
        cy.get('#page-optimizer-url').click()
        // cy.get('#version_consnt_alert_footer_yes_button_button').click()
        cy.get('#home_keywordSearch_domain').should('be.visible')
        cy.get('#simulation-history-URL').should('be.visible')
        cy.get('#simulation-history-URL').should('be.visible')
    })
    it('verify Simulator page', () => {
        cy.get('#home_keywordSearch_domain').type('https://www.allstate.com')
        cy.get('#home_keywordSearch_submit_button').click()
        cy.get('#kw_url_simulation_title').should('be.visible')
        cy.get('#kw_url_keyword_input_label').should('be.visible')
        cy.get('#contentSimulation_multiKeyword_locale_dropdown_button').should('be.visible')
        cy.get('#kw_url_selection_i-have-a-live-url').should('be.visible')
        cy.get('#kw_url_tag_toggle').should('be.visible')
        cy.get('#kw_url_tag_toggle').click()
        cy.get('#kw_url_checkbox_insurance-car').click({force: true})
        cy.get('#contentSimulation_multiKeyword_submit_button').click()
        cy.get('span').contains('SIMULATOR For URL').should('be.visible')
        cy.get('#kw_level_impact_link_button').should('be.visible')
        cy.get('#sim_left_traffic_rank_accordion_title_text').should('be.visible')
        cy.get('#sim_editor').should('be.visible')
        cy.get('#sim_left_pane_Content_tab_title').should('be.visible')
        cy.get('#contentSimulation_editor_simulateScores_button').should('be.visible')
        cy.get('#catDashboardDowload_button').should('be.visible')
        cy.get('#kw_level_impact_link_button').click()
        cy.get('#kw_level_impact_modal-head').should('be.visible')
        cy.get('#kw_level_impact_modal_table').should('be.visible')
        cy.get('#catDashboardDowload_button').should('be.visible')
        cy.get('#kw_level_impact_modal-head-button').click()
        cy.get('#zoom-selector_button').click()
        cy.get('#sim_editor').should('be.visible')
        cy.get('.left_navigation').should('be.visible')
        cy.get('#contentSimulation_leftSection_accordion').should('be.visible')
        cy.get('#sim_impacted_kw_sec').should('be.visible')
        cy.get('#contentSimulation_editor_viewOriginal_button_button').should('be.visible')
        cy.get('#sim_editor_zoom_header').should('be.visible')
        cy.get('#zoom-selector_button').click()
        cy.get('#content-editor_titleField_input').type('Edited')
        cy.get('#contentSimulation_editor_simulateScores_button').click()
        cy.get('#sim_editor').should('be.visible')
        cy.get('#sim_left_pane_Content_tab_title').should('be.visible')
        cy.get('#contentSimulation_editor_simulateScores_button').should('be.visible')
    })
})