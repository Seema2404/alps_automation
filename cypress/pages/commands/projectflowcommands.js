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
export const clickAlpsLogo = () => {
    ProjectFlow.elements.AlpsLogo().click()
}
export const clickChangeAccountTab = () => {
    ProjectFlow.elements.ChangeAccount().click({force : true})
}