import { ProjectFlow } from "../page-selectors/CreateEditProject";


export const enterProjectNameToSearch = (ProjectName) => {
    ProjectFlow.elements.SearchProjectTxtBox().clear()
    ProjectFlow.elements.SearchProjectTxtBox().type(ProjectName)
}


export const clickProjectNavTitle = () => {
    ProjectFlow.elements.ProjectNavTitle().click()
}
export const clickChangeProjectTab = () => {
    ProjectFlow.elements.ChangeProject().click({force : true})
}
export const clickGoToDashboard = () => {
    ProjectFlow.elements.GoToDashboard().click()
}
export const clickApplyFilter =() => {
    ProjectFlow.elements.ApplyFilter().click({force : true})
}
export const clickAlpsLogo = () => {
    ProjectFlow.elements.ALPSLogo().click()
}
export const clickChangeAccountTab = () => {
    ProjectFlow.elements.ChangeAccount().click({force : true})
}

export const verifyChangedProject = (project) => {
    
    ProjectFlow.elements.ProjectNavTitle().then((proj) => {
        const expectProject = proj.text();
        expect(expectProject).to.eq(project)
    })
}

export const clickProjectChange = () => {
    ProjectFlow.elements.ChangeProject().click()
}