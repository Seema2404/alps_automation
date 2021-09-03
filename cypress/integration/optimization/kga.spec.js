describe('As a KGA user', () => {

    before(() => {
        cy.loginUser('Iquanti Training')
    })
    beforeEach(() => {
        cy.restoreLocalStorage()
    })
    afterEach(() => {
        cy.saveLocalStorage()
    })
    it('verify KGA homepage', () => {
        cy.get('#home_keywordSearch_keyword').should('be.visible')
        cy.get('#home_keywordSearch_domain').should('be.visible')
    })
    it('verify SERP page', () => {
        cy.get('#home_keywordSearch_keyword').type('Car Speed')
        cy.get('#home_keywordSearch_submit_button').click()
        cy.get('#serpResult_metaInfo_keyword_for').should('have.text','RESULTS')
        cy.get('#serpResult_domainRank_wrapper').should('be.visible')
        cy.get('th').contains('TOP RANKING URLs').should('be.visible')
        cy.get('#serpResult_progress_keywordGapAnalysis_button').should('be.visible')
        cy.get('#serpResult_progress_contentSimulation_button').should('be.visible')
    })
    it('verify KGA page', () => {
        cy.get('#serpResult_progress_keywordGapAnalysis_button').click()
        cy.get('#kwAnalysis_metaInfo_keyword_for').should('have.text','Keyword Gap Analysis')
        cy.get('.comparision_section h1').should('have.text', 'Comparison')
        cy.get('#highest-rank-title').should('have.text', 'HIGHEST RANK')
        cy.get('#serp-packs-accordion-title').should('have.text', 'SERP PACKS')
        cy.get('#keyword-performance-accordion-title').should('have.text', 'KEYWORD PERFORMANCE')
        cy.get('#content-score-label').should('be.visible')
        cy.get('#seo-parameters-label').should('have.text', 'SEO Parameters')
        cy.get('.paramenter_main_container').should('be.visible')
        cy.get('#kwAnalysis_comparision_viewTopCompetitorScores_link').should('be.visible')
        cy.get('.download_btn').should('be.visible')
        cy.get('#kwAnalysis_comparision_viewTopCompetitorScores_link').click()
        cy.get('#comparator-modal-head-title').should('have.text', 'Top 10 Competitor Scores')
        cy.get('#comparator-modal-head-button').click()
        cy.go('back')
    })
    it('verify Simulation page from SERP page', () => {
        cy.get('#serpResult_progress_contentSimulation_button').click()
        cy.get('#kw_url_simulation_title').should('be.visible')
        cy.get('#kw_url_keyword_input_label').should('be.visible')
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