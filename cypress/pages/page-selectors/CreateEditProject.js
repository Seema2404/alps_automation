export class CreateEditProject {
    constructor () {
        this.elements = {
            //Locators for page simulation
            
            SearchProjectTxtBox:()=>cy.get ('[placeholder="Search"]'),
            ProjectNavTitle : () => cy.get('#project-nav_title',{timeout : 60000}),
            ChangeProject : () => cy.get('#project-change-nav'),
            ChangeAccount : () => cy.get('#project-account-nav'),
            GoToDashboard : () => cy.contains('Go to Dashboard'),
            ClickGoToDashboard : () => cy.contains('Go to Dashboard'),
            ALPSLogo : () => cy.get('#logo>img'),
            ApplyFilter : () => cy.get('[title="Apply"]',{timeout : 60000}),
        }
    }
}

export const ProjectFlow = new CreateEditProject()