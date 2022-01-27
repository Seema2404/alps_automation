export class CreateEditProject {
    constructor () {
        this.elements = {
            //Locators for page simulation
            
            SearchProjectTxtBox:()=>cy.get ('[placeholder="Search"]'),
            ProjectNavTitle : () => cy.get('#project-nav_title'),
            ChangeProject : () => cy.get('#project-change-nav'),
            ChangeAccount : () => cy.get('#project-account-nav'),
            goToDashboard : () => cy.contains('Go to Dashboard'),
            AlpsLogo : () => cy.get('#logo>img')
        }
    }
}

export const ProjectFlow = new CreateEditProject()