export class AuditsPage {
    constructor () {
        this.elements = {
            cgaTitle: () => cy.get('div.top_title h2'),
            cgaLeftToolbar: () => cy.get('div.filter_left_coloum'),
            cgaRightToolbar: () => cy.get('div.filter_right_coloum'),
            cgaDownloadButton: () => cy.get('div.download_button.bottom'),
            cgaTableHead: () => cy.get('div.main_tableHead'),
            cgaMainTable: () => cy.get('div.main_table'),
            cgaTableColumn1: () => cy.get('div.main_tableHead div.col_1 span'),
            cgaTableColumn2: () => cy.get('div.main_tableHead div.col_2 span').contains('Rank'),
            cgaTableColumn3: () => cy.get('div.main_tableHead div.col_2 span').contains('Content Score'),
            cgaTableColumn4: () => cy.get('div.main_tableHead div.col_2.main_tableHead_dropdown span:nth-child(1)'),
            cgaTableColumn5: () => cy.get('div.main_tableHead div.col_3 span'),
            baTab: () => cy.get('#tab ul li').contains('Backlink Analysis'),
            baTitle: () => cy.get('div.main_bdy_subcontainer div:nth-child(2) div div').contains('Backlink Analysis'),
            baPerformanceAnalysisLabel: () => cy.get('div').contains('Perform analysis for'),
            baSelectDomainDropdown: () => cy.get('button#menu1'),
            baAnalyzeButton: () => cy.get('button').contains('Analyze'),
            taTab: () => cy.get('#tab ul li').contains('Tech Audit'),
            // taTitle: () => cy.get('h1').contains('Technical Audit Overview'),
            taTitle: () => cy.get('[style="margin-bottom: 4px;"]').contains('Technical Audit Overview'),
            taMyDomainDropdown: () => cy.get('button#downshift-0-input'),
            taPageCrawledLabel: () => cy.get('h2').contains('Page Crawled'),
            taIssuesFoundLabel: () => cy.get('h2').contains('Issues Found'),
            taIssuesCategoriesLabel: () => cy.get('h2').contains('Issues Categories'),
            taMostOccuringIssuesLabel: () => cy.get('h2').contains('Most Occurring Issues'),
            taImportantTechnicalChecksLabel: () => cy.get('h2').contains('IMPORTANT TECHNICAL CHECKS')
        }
    }
}

export const audits = new AuditsPage()
