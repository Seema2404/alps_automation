import { Simulation } from '../page-selectors/SimulationPage'

export const enterKeyword = (editortext) => {
    Simulation.elements.editorBodyText().clear()
    Simulation.elements.editorBodyText().type(editortext)
}


export const clickHeaderChangeSelector = () => {
    Simulation.elements.headerChangeSelector().click()
}


export const clickkwRankAndPerformance = () => {
    Simulation.elements.kwRankAndPerformance().click()
    
}


export const enterMultiKeywordUrl = (KWURl) => {
    Simulation.elements.enterMultiKeywordUrl().clear()
    Simulation.elements.enterMultiKeywordUrl().type(KWURl)
}


export const enterSimulationForUrl = (url) => {
    Simulation.elements.simulationForUrl().clear()
    Simulation.elements.simulationForUrl().type(url)
}


export const enterAddKeyword = (KW) => {
    Simulation.elements.addKeyword().clear()
    Simulation.elements.addKeyword().type(KW)
}

export const clickAddKeywordButton = () => {
    Simulation.elements.addKeywordButton().click()
}

export const clicksubmitButton = () => {
    Simulation.elements.submitButton().click()
}


export const clickRunSimulationButton = () => {
    Simulation.elements.runSimulationButton().click()
}


export const clickResetButton = () => {
    Simulation.elements.resetButton().click()
}

export const clickViewOriginalContent = () => {
    Simulation.elements.viewOriginalContent().click()
}



export const enterUrlField = (url) => {
    Simulation.elements.urlField().clear()
    Simulation.elements.urlField().type(url)
}


export const enterTitleField = (titletext) => {
    Simulation.elements.titleField().clear()
    Simulation.elements.titleField().type(titletext)
}


export const enterMetaDescriptionField = (metatext) => {
    Simulation.elements.metaDescriptionField().clear()
    Simulation.elements.metaDescriptionField().type(metatext)
}


export const enterh1Field = (h1text) => {
    Simulation.elements.h1Field().clear()
    Simulation.elements.h1Field().type(h1text)
}

export const enterh2Field = (h2text) => {
    Simulation.elements.h2Field().clear()
    Simulation.elements.h2Field().type(h2text)
}


export const clickAuthority = () => {
    Simulation.elements.authority().click()
}

export const clickKliExpandCollapse_btn = () => {
    Simulation.elements.kliExpandCollapse_btn().click()
}

export const clickSimMultiKwAlertWithNoChangeClose = () => {
    Simulation.elements.simMultiKwAlertWithNoChangeClose().click()
}

export const clickSimErrorResetPopUpClose = () => {
    Simulation.elements.simErrorResetPopUpClose().click()
}

export const clickSimErrorAuthPopUpClose = () => {
    Simulation.elements.simErrorAuthPopUpClose().click()
}

export const clickKeywordLevelImpactCancel = () => {
    Simulation.elements.keywordLevelImpactCancel().click()
}

export const clickKwLevelImpact = () => {
    Simulation.elements.kwLevelImpact().click()
}

export const clickbtnEditorNotificationClose = () => {
    Simulation.elements.btnEditorNotificationClose().click()
}

export const clicksortDdn = () => {
    Simulation.elements.sortDdn().click()
}

export const checkListKeyword = () => {
    Simulation.elements.listKeyword().check()
}

export const checkChBoxListKeyword = () => {
    Simulation.elements.chBoxListKeyword().check()
}

export const clickprotocolSelectionSimPage = () => {
    Simulation.elements.protocolSelectionSimPage().click()
}

export const dispZoomViewTechScore =() => {

    Simulation.elements.zoomViewTechScore().then(function(fetchDispText)
    {
        const zoomViewTechScoreText=fetchDispText.text()

    })
}


export const dispZoomViewAuthorityScore =() => {

    Simulation.elements.zoomViewAuthorityScore().then(function(fetchDispText)
    {
        const zoomViewAuthorityScoreText=fetchDispText.text()

    })
}


export const dispZoomViewContentScore =() => {

    Simulation.elements.zoomViewContentScore().then(function(fetchDispText)
    {
        const zoomViewContentScoreText=fetchDispText.text()

    })
}


export const dispZoomContentUrl =() => {

    Simulation.elements.zoomContentUrl().then(function(fetchDispText)
    {
        const zoomContentUrlText=fetchDispText.text()

    })
}


export const dispZoomContentTitle =() => {

    Simulation.elements.zoomContentTitle().then(function(fetchDispText)
    {
        const zoomContentTitleText=fetchDispText.text()

    })
}


export const dispZoomContentMetaDescription =() => {

    Simulation.elements.zoomContentMetaDescription().then(function(fetchDispText)
    {
        const zoomContentMetaDescriptionText=fetchDispText.text()

    })
}


export const dispZoomContentH1 =() => {

    Simulation.elements.zoomContentH1().then(function(fetchDispText)
    {
        const zoomContentH1Text=fetchDispText.text()

    })
}


export const dispZoomContentH2 =() => {

    Simulation.elements.zoomContentH2().then(function(fetchDispText)
    {
        const zoomContentH2Text=fetchDispText.text()

    })
}


export const dispZoomContentBodyContent =() => {

    Simulation.elements.zoomContentBodyContent().then(function(fetchDispText)
    {
        const zoomContentBodyContentText=fetchDispText.text()

    })
}


export const dispZoomContentTitleScore =() => {

    Simulation.elements.zoomViewTechScore().then(function(fetchDispText)
    {
        const zoomViewTechScoreText=fetchDispText.text()

    })
}


export const dispViewTrafficRank =() => {

    Simulation.elements.viewTrafficRank().then(function(fetchDispText)
    {
        const viewTrafficRankText=fetchDispText.text()

    })
}


export const dispViewTrafficRankIcon =() => {

    Simulation.elements.viewTrafficRankIcon().then(function(fetchDispText)
    {
        const viewTrafficRankIconText=fetchDispText.text()

    })
}


export const dispViewTrafficScore =() => {

    Simulation.elements.viewTrafficScore().then(function(fetchDispText)
    {
        const viewTrafficScoreText=fetchDispText.text()

    })
}


export const dispViewRankScore =() => {

    Simulation.elements.viewRankScore().then(function(fetchDispText)
    {
        const viewRankScoreText=fetchDispText.text()

    })
}


export const dispViewContentUrlScore =() => {

    Simulation.elements.viewContentUrlScore().then(function(fetchDispText)
    {
        const viewContentUrlScoreText=fetchDispText.text()

    })
}


export const dispViewContentTitleScore =() => {

    Simulation.elements.viewContentTitleScore().then(function(fetchDispText)
    {
        const viewContentTitleScoreText=fetchDispText.text()

    })
}





