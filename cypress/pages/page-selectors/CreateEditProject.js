export class CreateEditProject {
    constructor () {
        this.elements = {
            //Locators for page simulation
            
            SearchProjectTxtBox:()=>cy.get ('[placeholder="Search"]'),
            ProjectNavTitle : () => cy.get('#project-nav_title'),
            ChangeProject : () => cy.get('#project-change-nav'),
            ChangeAccount : () => cy.get('#project-account-nav'),
            
        }
    }
}

export const ProjectFlow = new CreateEditProject()