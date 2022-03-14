export class OppurtunityPlanningPage {
    constructor () {
        this.elements = {
            opSummaryTitle: () => cy.get('div.top_title.pg_heading h2'),
            opLeftToolbar: () => cy.get('div.filter_left_coloum'),
            opRightToolbar: () => cy.get('div.filter_right_coloum'),
            opDownloadButton: () => cy.get('div.download_button.bottom'),
            opEditThemesButton: () => cy.get('div.mainButton.pull-right a'),
            opSummaryContainers: () => cy.get('div.tag_summ'),
            opResetButtons: () => cy.get('a[title="Reset"]'),
            opForecastButtons: () => cy.get('a[title="Forecast"]'),
            opTableHead: () => cy.get('div.main_tableHead'),
            opMainTable: () => cy.get('div.main_table'),
            opTableColumn1: () => cy.get('div.main_tableHead div.col_1 span'),
            opTableColumn2: () => cy.get('div.main_tableHead div.col_2 span').contains('Target Rank'),
            opTableColumn3: () => cy.get('span[title="Conversions"]'),
            opTableColumn4: () => cy.get('div.main_tableHead div.col_4 span')
        }
    }
}

export const op = new OppurtunityPlanningPage()
