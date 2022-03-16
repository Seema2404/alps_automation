export class ReportsPage {
    constructor () {
        this.elements = {
            leftToolbar: () => cy.get('div.filter_left_coloum'),
            rightToolbar: () => cy.get('div.filter_right_coloum'),
            downloadButton: () => cy.get('div.download_button.bottom'),
            editKeywordsButton: () => cy.get('div.mainButton.pull-right.ng-scope'),
            rankDistributionHeading: () => cy.get('div.rank_distribution.clearfix h2').contains('Rank Distribution of Keywords'),
            brandedTab: () => cy.get('div.selection_button div:nth-child(2) button'),
            allKeywordsTab: () => cy.get('div.selection_button div:nth-child(3) button'),
            shareOfSearchHeading: () => cy.get('div.rank_distribution.shareOfSearch h2'),
            organicKeywordTrafficHeading: () => cy.get('div.rank_distribution.traffic_report h2'),
            topGainingKeywordsContainer: () => cy.get('div.top_gainers'),
            topLosingKeywordsContainer: () => cy.get('div.top_losers'),
            trafficContainer: () => cy.get('div.perf-traf'),
            conversationsContainer: () => cy.get('div.perf-conver'),
            salesCompletionContainer: () => cy.get('div.perf-sales'),
            trafficTreandContainer: () => cy.get('div.perform-tab'),
            keywordsTab: () => cy.get('#tab ul li').contains('Keywords'),
            title: () => cy.get('.top_title h2'),
            keywordsMainTable: () => cy.get('div.main_detailsData'),
            keywordsTableColumn1: () => cy.get('div.main_tableHead div.col_1 span'),
            keywordsTableColumn2: () => cy.get('span#col_weighted_offpage_score_sort'),
            keywordsTableColumn3: () => cy.get('span#col_total_backlinks_sort'),
            keywordsTableColumn4: () => cy.get('span#col_unique_domains_sort'),
            keywordsTableColumn5: () => cy.get('span#col_unique_domains_sort'),
            themesTab: () => cy.get('#tab ul li').contains('Themes'),
            themesMainTable: () => cy.get('div.main_table'),
            themesMainTableHeader: () => cy.get('div.main_tableHead'),
            themesTableColumn2: () => cy.get('div.main_tableHead div.col_2.rank span'),
            themesTableColumn3: () => cy.get('div.main_tableHead div.col_3 span'),
            themesTableColumn4: () => cy.get('div.main_tableHead div.col_2.traffic span'),
            themesTableColumn5: () => cy.get('div.main_tableHead div.col_2 span').contains('Conversions'),
            themesTableColumn6: () => cy.get('div.main_tableHead div.col_2 span').contains('Sales Completions'),
            compTab: () => cy.get('#tab ul li').contains('Competition'),
            compareCompetitonAcrossThemesButton: () => cy.get('div.pull-right.mainButton.keybttn.back'),
            compTableHeader: () => cy.get('div.main_tableHead.main_detailsHead'),
            compTableHeaderTab: () => cy.get('div.main_table.main_detailsHeadTab'),
            compTableColumn2: () => cy.get('div.main_tableHead div.col_2 span').contains('Non-Branded Share of Search'),
            compTableColumn3: () => cy.get('div.main_tableHead div.col_2.comp_graph span')
        }
    }
}

export const reports = new ReportsPage()
