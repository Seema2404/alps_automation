import { Simulation } from '../page-selectors/SimulationPage'
import { OptimizationPage } from '../page-selectors/PageSimulation'



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

export const clickSimulationForUrl =() =>{
    Simulation.elements.simulationForUrl().click({force: true})
}


export const enterMultiKeywordUrl = (KWURl) => {
    Simulation.elements.multiKeywordUrl().clear()
    Simulation.elements.multiKeywordUrl().type(KWURl)
}


export const dispSimulationForUrlHeading = (url) => {
    
    Simulation.elements.simulationForUrl().then(function(disptext)
    {
        var simHeadingtext=disptext.text()
        url=url.replace('"', ' ')
        simHeadingtext=simHeadingtext.replace('‘‘', '')
        simHeadingtext=simHeadingtext.replace('’’', '')
        expect(simHeadingtext).to.equals(url)
    })
    

}

export const updatingNewStringToContext =(NewString) => {
    Simulation.elements.editorBodyText().clear()
    Simulation.elements.editorBodyText().type(NewString)
}

export const textPageOptimizationUrl = (url) => {
    OptimizationPage.elements.txtBoxUrl().clear()
    OptimizationPage.elements.txtBoxUrl().type(url)
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


export const validatingKeywordMaxLimitErrorMessage = () => {
    Simulation.elements.keywordMaxLimitErrorMessage().should('be.visible')
}

export const validateLoaderIcon = () => {
    OptimizationPage.elements.infoFetching().should('be.visible')
}

export const validatingremoveAll = () => {
    OptimizationPage.elements.removeAll().should('be.visible')
}

export const validateNotificationForSimulationWithOutAnyCHanges = () =>{

    OptimizationPage.elements.errMsgRunSimWithOutChanges().should('be.visible')
}


export const validateZoomViewContentScore = () => {
    Simulation.elements.zoomViewContentScore().should('be.visible')
}

export const validateZoomViewAuthorityScore = () => {
    Simulation.elements.zoomViewAuthorityScore().should('be.visible')
}
export const validateZoomViewTechScore = () => {
    Simulation.elements.zoomViewTechScore().should('be.visible')
}

export const validateZoomContentUrl = () => {
    Simulation.elements.zoomContentUrl().should('be.visible')
}
export const validateZoomContentTitle = () => {
    Simulation.elements.zoomContentTitle().should('be.visible')
}
export const validateZoomContentMetaDescription = () => {
    Simulation.elements.zoomContentMetaDescription().should('be.visible')
}
export const validateZoomContentH1 = () => {
    Simulation.elements.zoomContentH1().should('be.visible')
}
export const validateZoomContentH2 = () => {
    Simulation.elements.zoomContentH2().should('be.visible')
}

export const validateZoomContentBodyContent = () => {
    Simulation.elements.zoomContentBodyContent().should('be.visible')
}
export const validateZoomContentTitleScore = () => {
    Simulation.elements.zoomContentTitleScore().should('be.visible')
}


export const clickRemoveAll = () =>{
    OptimizationPage.elements.removeAll().click({force: true})
}

export const validateKWCount = () => {
    Simulation.elements.addedKeywordCount().should('have.length.greaterThan', 1)
}


export const validateKWCountAfterRemoveAll = () => {
    Simulation.elements.addedKeywordCount().should('have.length.lessThan', 1)
}


export const validateSubmitButtonEnabledByDefault = () => {
    Simulation.elements.submitButton().should('not.be.disabled')
}


export const validaterunSimulationButtonEnabledByDefault = () => {
    Simulation.elements.runSimulationButton().should('not.be.disabled')
}



export const enterUrlField = (url) => {
    Simulation.elements.urlField().clear()
    Simulation.elements.urlField().type(url)
}

export const enterAddKeywordUrl = (url) => {
    OptimizationPage.elements.ddnAddKeywordUrl().clear()
    OptimizationPage.elements.ddnAddKeywordUrl().type(url)
}


export const clickZoomPage = () => {
    Simulation.elements.zoomPage().click()
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

export const clickTabOptimization = () => {
    OptimizationPage.elements.tabOptimization().click()
    
}


export const clickTabPageSimulation = () => {
    OptimizationPage.elements.tabPageSimulation().click()
    
}



export const clickGoButton = () => {
    OptimizationPage.elements.goButton().click()
    
}


export const clickRadioIDoNotHaveLiveUrl = () => {
    OptimizationPage.elements.rdbIDoNotHaveLiveUrl().click()
    
}


export const clickRadiordbIHaveLiveUrl = () => {
    OptimizationPage.elements.rdbIHaveLiveUrl().click()
    
}



export const validatenonLiveFlowMessage = () => {
    OptimizationPage.elements.nonLiveFlowMessage().should('contains.text', 'The journey has been updated as Non live URL journey')
}

export const validateLiveFlowMessage = () => {
    OptimizationPage.elements.liveFlowMessage().should('contains.text', 'The journey has been updated as live URL journey')
}


export const clickProjectAndRelatedKWToggle = () => {
    OptimizationPage.elements.projectRelateKeywords().click()
    
}

export const disphHadingSimulationHistory =() => {
    OptimizationPage.elements.headingSimulationHistory().should('be.visible')
}

export const dispHeadingKwRankAndPerf =() =>
{
    OptimizationPage.elements.headingKwRankAndPerf().should('be.visible')
}

export const dispHeadingKwGapAnalysis =() =>
{
    OptimizationPage.elements.headingKwGapAnalysis().should('be.visible')
}
export const dispHeadingContentSim =() =>
{
    OptimizationPage.elements.headingContentSim().should('be.visible')
}
export const dispHeadingContGapAnalysis =() =>
{
    OptimizationPage.elements.headingContGapAnalysis().should('be.visible')
}
export const dispHeadingBlAnalysis =() =>
{
    OptimizationPage.elements.headingBlAnalysis().should('be.visible')
}

export const dispHeadingTechAudit =() =>
{
    OptimizationPage.elements.headingTechAudit().should('be.visible')
}

export const dispKeywordTextIdentifier =(keyworddata) => {

    Simulation.elements.keywordTextIdentifier().then(function(fetchDispText)
    {
        var defaultKWInSimPage=fetchDispText.text()

        expect(defaultKWInSimPage).to.include(keyworddata)
        expect(defaultKWInSimPage).to.contains(keyworddata)

    })
}



export const displblViewEmptyTrafficRankNotification =(nText) => {

    Simulation.elements.lblViewEmptyTrafficRankNotification().then(function(notificationText)
    {
        var trafficAndRankNotification=notificationText.text()
        expect (trafficAndRankNotification).to.equals(nText)


    })
}


export const displblViewKWLevelImpactNotification =(nText) => {

    Simulation.elements.lblViewKWLevelImpactNotification().then(function(notificationText)
    {
        var KWLevelImpactNotification=notificationText.text()
        expect (KWLevelImpactNotification).to.equals(nText)

    })
}


export const displblViewContentNotification =(nText) => {

    Simulation.elements.lblViewContentNotification().then(function(notificationText)
    {
        var ViewContentNotification=notificationText.text()
        expect (ViewContentNotification).to.equals(nText)


    })
}

export const displblViewAuthorityNotification =(nText) => {

    Simulation.elements.lblViewAuthorityNotification().then(function(notificationText)
    {
        var ViewAuthorityNotification=notificationText.text()
        expect (ViewAuthorityNotification).to.equals(nText)


    })
}

export const displblViewTechNotification =(nText) => {

    Simulation.elements.lblViewTechNotification().then(function(notificationText)
    {
        var ViewTechNotification=notificationText.text()
        expect (ViewTechNotification).to.equals(nText)


    })
}


export const dispSimpage =(nText) => {

    OptimizationPage.elements.headingUrl().then(function(headingText)
    {
        var ViewheadingText=headingText.text()
        expect (ViewheadingText).not.to.equals(nText)
    })

}






// export var dispKeywordTextIdentifier1 =() => {
//     // debugger;
//     var typecheck = Simulation.elements.lblUserLogin;
//     var typecheck2 = Simulation.elements.lblUserLogin();
//     console.log("checking first console"+typecheck);
//     console.log("checking second console"+typecheck2);
//     console.log(Simulation.elements);

//     var text1= Simulation.elements.lblUserLogin().then(function(fetchDispText)
//      {
//          // cy.debug()
//          var defaultKWInSimPage=fetchDispText.text()
//          //console.log(defaultKWInSimPage)
//          return defaultKWInSimPage
//          // expect(defaultKWInSimPage).to.include(keyworddata)
 
//      })
//      console.log(text1)
//      return text1
//  }
 




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





