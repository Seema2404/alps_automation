import { ProjectFlow } from "../page-selectors/CreateEditProject";


export const enterProjectNameToSearch = (ProjectName) => {
    ProjectFlow.elements.SearchProjectTxtBox().clear()
    ProjectFlow.elements.SearchProjectTxtBox().type(ProjectName)
}


export const clickProjectNavTitle = () => {
    ProjectFlow.elements.ProjectNavTitle().click()
}

export const clickProjectChange = () => {
    ProjectFlow.elements.ChangeProject().click()
}

export const clickGoToDashboard = () => {
    ProjectFlow.elements.ClickGoToDashboard().click()
}

export const clickAlpsLogo = () => {
    ProjectFlow.elements.ALPSLogo().click()
}