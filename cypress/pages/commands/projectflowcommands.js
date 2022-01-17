import { ProjectFlow } from "../page-selectors/CreateEditProject";


export const enterProjectNameToSearch = (ProjectName) => {
    ProjectFlow.elements.SearchProjectTxtBox().clear()
    ProjectFlow.elements.SearchProjectTxtBox().type(ProjectName)
}


export const clickProjectNavTitle = () => {
    ProjectFlow.elements.ProjectNavTitle().click()
}