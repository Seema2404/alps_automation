import { simulation } from '../page-selectors/SimulationPage'
import { OptimizationPage } from '../page-selectors/PageSimulation'
import exp from 'constants'
import { clear } from 'console'

export const enterKeyword = (editortext) => {
    simulation.elements.editorBodyText().clear()
    simulation.elements.editorBodyText().type(editortext)
}

export const clickHeaderChangeSelector = () => {
    simulation.elements.headerChangeSelector().click()
}

export const clickkwRankAndPerformance = () => {
    simulation.elements.kwRankAndPerformance().click()
}

export const clickSimulationForUrl = () => {
    simulation.elements.simulationForUrl().click({ force: true })
}

export const dispNotificationRunSinarioApiFailure = () => {

    OptimizationPage.elements.simulationFailure().should('be.visible')
}

export const enterMultiKeywordUrl = (KWURl) => {
    simulation.elements.multiKeywordUrl().clear()
    simulation.elements.multiKeywordUrl().type(KWURl)
}

export const updateBodyContentInSim = (ntxt) => {
    OptimizationPage.elements.contentBodySim().clear()
    OptimizationPage.elements.contentBodySim().type(ntxt)
}

export const dispSimulationForUrlHeading = (url) => {
    simulation.elements.simulationForUrl().then(function (disptext) {
        let simHeadingtext = disptext.text()

        url = url.replace('"', ' ')
        simHeadingtext = simHeadingtext.replace('‘‘', '')
        simHeadingtext = simHeadingtext.replace('’’', '')
        expect(simHeadingtext).to.equals(url)
    })
}

export const updatingNewStringToContext = (NewString) => {
    simulation.elements.editorBodyText().clear()
    simulation.elements.editorBodyText().type(NewString)
}

export const TextBoxToUpdateLocaleInSim = (NewString) => {
    OptimizationPage.elements.textBoxToUpdateLocaleInSim().clear()
    OptimizationPage.elements.textBoxToUpdateLocaleInSim().type(NewString)
}

export const textPageOptimizationUrl = (url) => {
    OptimizationPage.elements.txtBoxUrl().clear()
    OptimizationPage.elements.txtBoxUrl().type(url)
}

export const enterAddKeyword = (KW) => {
    simulation.elements.addKeyword().clear()
    simulation.elements.addKeyword().type(KW)
}

export const clickAddKeywordButton = () => {
    simulation.elements.addKeywordButton().click()
}

export const clickbuttonAddKeyword = () => {
    OptimizationPage.elements.buttonAddKeyword().click()
}

export const txtAddKeywordSimPage = (KW) => {
    OptimizationPage.elements.txtAddKeyword().clear()
    OptimizationPage.elements.txtAddKeyword().type(KW)
}

export const clicksubmitButton = () => {
    simulation.elements.submitButton().click()
}

export const clickzoomPage = () => {
    simulation.elements.zoompage().click({ force: true })
}

export const clickRunSimulationButton = () => {
    simulation.elements.runSimulationButton().click({ force: true })
}

export const clickArticleViewToggele = () => {
    simulation.elements.ArticleViewToggele().click ()
}

export const clickResetButton = () => {
    simulation.elements.resetButton().click()
}

export const clickViewOriginalContent = () => {
    simulation.elements.viewOriginalContent().click()
}

export const clicksiMulationMultiKeywordToggleButton = () => {
    simulation.elements.simulationMultiKeywordToggleButton().click({ force: true })
}

export const validatingKeywordMaxLimitErrorMessage = () => {
    simulation.elements.keywordMaxLimitErrorMessage().should('be.visible')
}

export const validateLoaderIcon = () => {
    OptimizationPage.elements.infoFetching().should('be.visible')
}

export const validatingremoveAll = () => {
    OptimizationPage.elements.removeAll().should('be.visible')
}

export const validateNotificationForSimulationWithOutAnyCHanges = () => {
    OptimizationPage.elements.errMsgRunSimWithOutChanges().should('be.visible')
}

export const validateErrorNotificationForInvalidURL = () => {
    OptimizationPage.elements.errorMsgForInvalidUrl().should('be.visible')
}

export const validateZoomViewContentScore = () => {
    simulation.elements.zoomViewContentScore().should('be.visible')
}

export const validateZoomViewAuthorityScore = () => {
    simulation.elements.zoomViewAuthorityScore().should('be.visible')
}
export const validateZoomViewTechScore = () => {
    simulation.elements.zoomViewTechScore().should('be.visible')
}

export const validateZoomContentUrl = () => {
    simulation.elements.zoomContentUrl().should('be.visible')
}
export const validateZoomContentTitle = () => {
    simulation.elements.zoomContentTitle().should('be.visible')
}
export const validateZoomContentMetaDescription = () => {
    simulation.elements.zoomContentMetaDescription().should('be.visible')
}
export const validateZoomContentH1 = () => {
    simulation.elements.zoomContentH1().should('be.visible')
}
export const validateZoomContentH2 = () => {
    simulation.elements.zoomContentH2().should('be.visible')
}

export const validateZoomContentBodyContent = () => {
    simulation.elements.zoomContentBodyContent().should('be.visible')
}
export const validateZoomContentTitleScore = () => {
    simulation.elements.zoomContentTitleScore().should('be.visible')
}

export const clickRemoveAll = () => {
    OptimizationPage.elements.removeAll().click({ force: true })
}

export const validateKWCount = () => {
    simulation.elements.addedKeywordCount().should('have.length.greaterThan', 1)
}

export const validateKWCountAfterRemoveAll = () => {
    simulation.elements.addedKeywordCount().should('have.length.lessThan', 1)
}

export const validateSubmitButtonEnabledByDefault = () => {
    simulation.elements.submitButton().should('not.be.disabled')
}

export const validaterunSimulationButtonEnabledByDefault = () => {
    simulation.elements.runSimulationButton().should('not.be.disabled')
}

export const enterUrlField = (url) => {
    simulation.elements.urlField().clear()
    simulation.elements.urlField().type(url)
}

export const enterAddKeywordUrl = (url) => {
    OptimizationPage.elements.ddnAddKeywordUrl().clear()
    OptimizationPage.elements.ddnAddKeywordUrl().type(url)
}

export const clickZoomPage = () => {
    simulation.elements.zoomPage().click()
}

export const enterTitleField = (titletext) => {
    simulation.elements.titleField().clear()
    simulation.elements.titleField().type(titletext)
}

export const enterMetaDescriptionField = (metatext) => {
    simulation.elements.metaDescriptionField().clear()
    simulation.elements.metaDescriptionField().type(metatext)
}

export const enterh1Field = (h1text) => {
    simulation.elements.h1Field().clear()
    simulation.elements.h1Field().type(h1text)
}

export const enterh2Field = (h2text) => {
    simulation.elements.h2Field().clear()
    simulation.elements.h2Field().type(h2text)
}

export const clickAuthority = () => {
    simulation.elements.authority().click()
}

export const clickKliExpandCollapse_btn = () => {
    simulation.elements.kliExpandCollapse_btn().click()
}

export const clickSimMultiKwAlertWithNoChangeClose = () => {
    simulation.elements.simMultiKwAlertWithNoChangeClose().click()
}

export const clickSimErrorResetPopUpClose = () => {
    simulation.elements.simErrorResetPopUpClose().click()
}

export const clickSimErrorAuthPopUpClose = () => {
    simulation.elements.simErrorAuthPopUpClose().click()
}

export const clickKeywordLevelImpactCancel = () => {
    simulation.elements.keywordLevelImpactCancel().click()
}

export const clickKwLevelImpact = () => {
    simulation.elements.kwLevelImpact().click()
}

export const clickbtnEditorNotificationClose = () => {
    simulation.elements.btnEditorNotificationClose().click()
}

export const clicksortDdn = () => {
    simulation.elements.sortDdn().click()
}

export const checkListKeyword = () => {
    simulation.elements.listKeyword().check()
}

export const checkChBoxListKeyword = () => {
    simulation.elements.chBoxListKeyword().check()
}

export const checkSelectALlKW  = () => {
    OptimizationPage.elements.selectAllFromProKW().click({force: true})
}

export const clickprotocolSelectionSimPage = () => {
    simulation.elements.protocolSelectionSimPage().click()
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

export const clickTabtechnical = () => {
    OptimizationPage.elements.technicalTab().click({ force: true })
}

export const clickTabAuth = () => {
    OptimizationPage.elements.authTab().click({ force: true })
}

export const clickToggleButton = () => {
    OptimizationPage.elements.toggleButton().click({ force: true })
}

export const checkFilterHighInTechParameter = () => {
    OptimizationPage.elements.filterHighInTechParameter().check({ force: true })
}

export const checkFilterLowIntechParameter = () => {
    OptimizationPage.elements.filterLowIntechParameter().check({ force: true })
}

export const uncheckFilterHighInTechParameter = () => {
    OptimizationPage.elements.filterHighInTechParameter().uncheck({ force: true })
}

export const uncheckFilterLowIntechParameter = () => {
    OptimizationPage.elements.filterLowIntechParameter().uncheck({ force: true })
}

export const clickRadioIDoNotHaveLiveUrl = () => {
    OptimizationPage.elements.rdbIDoNotHaveLiveUrl().click()
}

export const clickRadiordbIHaveLiveUrl = () => {
    OptimizationPage.elements.rdbIHaveLiveUrl().click()
}

export const clickTabInputKeywordsInSimPage = () => {
    OptimizationPage.elements.tabInputKeywords().click()
}

export const clickTabProjectKeywordInSimPage = () => {
    OptimizationPage.elements.tabProjectKeyword().click({force :true})
    cy.wait(6000)
}

export const clickTabKeywordSuggestion = () => {
    OptimizationPage.elements.tabKeywordSuggestion().click()
}

export const clickThemeSimulation = () => {
    OptimizationPage.elements.ThemeInSimulation().click()
}

export const verifySearchVolumeSection = () => {
    OptimizationPage.elements.searchVolume().should('be.visible')

}

export const ClickSelectorLocaleDdn = () => {
    OptimizationPage.elements.selectorLocaleDdn().click()
}

export const ClickSlectNewLocale = () => {
    OptimizationPage.elements.slectNewLocale().click()
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

export const disphHadingSimulationHistory = () => {
    OptimizationPage.elements.headingSimulationHistory().should('be.visible')
}

export const dispInlineNoTheme = () => {
    OptimizationPage.elements.NoTheme().should('be.visible')
}

export const dispNotificationMessageForLocaleUpdate = () => {
    OptimizationPage.elements.notificationMessageForLocaleUpdate().should('be.visible')
}

export const dispNotificationMsgFetchKeywordSuggestion = (notifyMsg) => {
    OptimizationPage.elements.notifyFetchKwSuggestion().should('be.visible')
    OptimizationPage.elements.notifyFetchKwSuggestion().then((msg) => {
        const expectedNotifyMsg=msg.text();
        expect(expectedNotifyMsg).to.contains(notifyMsg)
        expect(expectedNotifyMsg).to.include(notifyMsg)

    })
}

export const dispHeadingContentOptimalUsageHtmlAttributes = () => {
    simulation.elements.headingContentOptimalUsageHtmlAttributes().should('be.visible')
}

export const dispNoneHeadingContentOptimalUsageHtmlAttributes = () => {
    simulation.elements.headingContentOptimalUsageHtmlAttributes().should('not.exist')
}

export const dispHeadingKwRankAndPerf = () => {
    OptimizationPage.elements.headingKwRankAndPerf().should('be.visible')
}

export const dispHeadingKwGapAnalysis = () => {
    OptimizationPage.elements.headingKwGapAnalysis().should('be.visible')
}
export const dispHeadingContentSim = () => {
    OptimizationPage.elements.headingContentSim().should('be.visible')
}
export const dispHeadingContGapAnalysis = () => {
    OptimizationPage.elements.headingContGapAnalysis().should('be.visible')
}
export const dispHeadingBlAnalysis = () => {
    OptimizationPage.elements.headingBlAnalysis().should('be.visible')
}

export const dispHeadingTechAudit = () => {
    OptimizationPage.elements.headingTechAudit().should('be.visible')
}

export const dispContentScore = () => {
    OptimizationPage.elements.contentScoreValue().should('be.visible')
}

export const dispKWcountInSimPage = () => {
    OptimizationPage.elements.totalNumberOfKW().find('div').should('have.length', 20)
}

export const dishowEditorWords = () => {
    OptimizationPage.elements.howEditorWords().should('be.visible')
}

export const dispInvalidUrlErrMsg = () => {
    simulation.elements.invalidUrlErrMsg().should('be.visible')
}

export const shouldNotDisphowEditorWords = () => {
    OptimizationPage.elements.howEditorWords().should('not.be.visible')
}



export const dispKeywordTextIdentifier = (keyworddata) => {
    simulation.elements.keywordTextIdentifier().then(function (fetchDispText) {
        const defaultKWInSimPage = fetchDispText.text()

        expect(defaultKWInSimPage).to.include(keyworddata)
        expect(defaultKWInSimPage).to.contains(keyworddata)
    })
}

export const dispNotifyMsgForEmptyKWProceed = (ErrorMsg) => {
    OptimizationPage.elements.NotifyMsgForEmptyKWProceed().then(function (fetchDispText) {
        const NotificationErrorMSg = fetchDispText.text()

        expect(NotificationErrorMSg).to.include(ErrorMsg)
        expect(NotificationErrorMSg).to.contains(ErrorMsg)
    })
}

export const disperrorNotificationForEmptyKWSim = (errorText) => {
    OptimizationPage.elements.errorNotificationForEmptyKWSim().then(function (fetchDispText) {
        const NotificationText = fetchDispText.text()
        expect(NotificationText).to.include(errorText)
        expect(NotificationText).to.contains(errorText)
    })
}

export const disperrorNotificationForDuplicateKWSim = (DuplicateText) => {
    OptimizationPage.elements.errMsgEmptyKeywordAddNew().then(function (fetchDispText) {
        const NotificationDuplicateText = fetchDispText.text()
        expect(NotificationDuplicateText).to.equal(DuplicateText)
    })
}

export const dispNotificationForMaxLimitKWSim = (MaxLimitNoftification) => {
    OptimizationPage.elements.errMsgEmptyKeywordAddNew().then(function (fetchDispText) {
        const NotificationMaxLimitText = fetchDispText.text()
        expect(NotificationMaxLimitText).to.equal(MaxLimitNoftification)
    })
}

export const verifyViewOriginalContent = () => {
    
    simulation.elements.simContentEditor().then(function (fetchDispText) {
        const ContenttextSimContentEditor = fetchDispText.text()
        simulation.elements.viewOriginalContent().click({ force: true })
        
        simulation.elements.simViewOriginalContent().then(function (fetchDispText) {
            const ContenttextSimViewOriginalContent = fetchDispText.text()

            expect(ContenttextSimContentEditor).not.to.equal(ContenttextSimViewOriginalContent)
        })
})
}


export const dispNotificationForInvalidFileUpload = (InvalidFileNoftification) => {
    simulation.elements.invalidUrlErrMsg().then(function (fetchDispText) {
        const NotificationForInvalidFileUpload = fetchDispText.text()
        expect(NotificationForInvalidFileUpload).to.equal(InvalidFileNoftification)
    })
}

export const dispNotificationMsgInitiateApiFails = (APIFailureNoftification) => {
    simulation.elements.invalidUrlErrMsg().then(function (fetchDispText) {
        const NotificationForAPIFailur = fetchDispText.text()
        expect(NotificationForAPIFailur).to.equal(APIFailureNoftification)
    })
}

export const dispSimulationUrl = (simUrl) => {
    OptimizationPage.elements.ddnAddKeywordUrl().then(function (urlSimulation) {
        let simualtionURlText = urlSimulation.val()
        simUrl = simUrl.replace('"', ' ')
        simualtionURlText = simualtionURlText.replace('‘‘', '')
        simualtionURlText = simualtionURlText.replace('’’', '')
        expect(simualtionURlText).to.equal(simUrl)
    })
}

export const displblViewEmptyTrafficRankNotification = (nText) => {
    simulation.elements.lblViewEmptyTrafficRankNotification().then(function (notificationText) {
        const trafficAndRankNotification = notificationText.text()

        expect(trafficAndRankNotification).to.equals(nText)
    })
}

export const displblViewKWLevelImpactNotification = (nText) => {
    simulation.elements.lblViewKWLevelImpactNotification().then(function (notificationText) {
        const KWLevelImpactNotification = notificationText.text()

        expect(KWLevelImpactNotification).to.equals(nText)
    })
}

export const dispDefaultSortValue = (nText) => {
    OptimizationPage.elements.sortDropdownBox().then(function (defaultDropdownText) {
        const DefalutSortVisibleText = defaultDropdownText.text()

        expect(DefalutSortVisibleText).to.equals(nText)
    })
}

export const dispNotificationSelectingKWMoreThanALimit = (nText) => {
    OptimizationPage.elements.olderVersionNotification().then(function (OverKWLimitNotify) {
        const KWLimitNotificationText = OverKWLimitNotify.text()

        expect(KWLimitNotificationText).to.equals(nText)
    })
}


export const displblViewContentNotification = (nText) => {
    simulation.elements.lblViewContentNotification().then(function (notificationText) {
        const ViewContentNotification = notificationText.text()

        expect(ViewContentNotification).to.equals(nText)
    })
}

export const dispUploadedHtmlFileName = (nText) => {
    OptimizationPage.elements.getTextBrowser().then(function (UploadedFileName) {
        const ViewUploadedFileName = UploadedFileName.text()

        expect(ViewUploadedFileName).to.equals(nText)
    })
}



export const displblViewAuthorityNotification = (nText) => {
    simulation.elements.lblViewAuthorityNotification().then(function (notificationText) {
        const ViewAuthorityNotification = notificationText.text()

        expect(ViewAuthorityNotification).to.equals(nText)
    })
}

export const displblViewTechNotification = (nText) => {
    simulation.elements.lblViewTechNotification().then(function (notificationText) {
        const ViewTechNotification = notificationText.text()

        expect(ViewTechNotification).to.equals(nText)
    })
}

export const dispSimpage = (nText) => {
    OptimizationPage.elements.headingUrl().then(function (headingText) {
        const ViewheadingText = headingText.text()

        expect(ViewheadingText).not.to.equals(nText)
    })
}
export const dispZoomViewTechScore = () => {
    simulation.elements.zoomViewTechScore().then(function (fetchDispText) {
        const zoomViewTechScoreText = fetchDispText.text()
    })
}

export const dispZoomViewAuthorityScore = () => {
    simulation.elements.zoomViewAuthorityScore().then(function (fetchDispText) {
        const zoomViewAuthorityScoreText = fetchDispText.text()
    })
}

export const dispZoomViewContentScore = () => {
    simulation.elements.zoomViewContentScore().then(function (fetchDispText) {
        const zoomViewContentScoreText = fetchDispText.text()
    })
}

export const dispZoomContentUrl = () => {
    simulation.elements.zoomContentUrl().then(function (fetchDispText) {
        const zoomContentUrlText = fetchDispText.text()
    })
}

export const dispZoomContentTitle = () => {
    simulation.elements.zoomContentTitle().then(function (fetchDispText) {
        const zoomContentTitleText = fetchDispText.text()
    })
}

export const dispZoomContentMetaDescription = () => {
    simulation.elements.zoomContentMetaDescription().then(function (fetchDispText) {
        const zoomContentMetaDescriptionText = fetchDispText.text()
    })
}

export const dispZoomContentH1 = () => {
    simulation.elements.zoomContentH1().then(function (fetchDispText) {
        const zoomContentH1Text = fetchDispText.text()
    })
}

export const dispZoomContentH2 = () => {
    simulation.elements.zoomContentH2().then(function (fetchDispText) {
        const zoomContentH2Text = fetchDispText.text()
    })
}

export const dispZoomContentBodyContent = () => {
    simulation.elements.zoomContentBodyContent().then(function (fetchDispText) {
        const zoomContentBodyContentText = fetchDispText.text()
    })
}

export const dispZoomContentTitleScore = () => {
    simulation.elements.zoomViewTechScore().then(function (fetchDispText) {
        const zoomViewTechScoreText = fetchDispText.text()
    })
}

export const dispViewTrafficRank = () => {
    simulation.elements.viewTrafficRank().then(function (fetchDispText) {
        const viewTrafficRankText = fetchDispText.text()
    })
}

export const dispViewTrafficRankIcon = () => {
    simulation.elements.viewTrafficRankIcon().then(function (fetchDispText) {
        const viewTrafficRankIconText = fetchDispText.text()
    })
}

export const dispViewTrafficScore = () => {
    simulation.elements.viewTrafficScore().then(function (fetchDispText) {
        const viewTrafficScoreText = fetchDispText.text()
    })
}

export const dispViewRankScore = () => {
    simulation.elements.viewRankScore().then(function (fetchDispText) {
        const viewRankScoreText = fetchDispText.text()
    })
}

export const dispViewContentUrlScore = () => {
    simulation.elements.viewContentUrlScore().then(function (fetchDispText) {
        const viewContentUrlScoreText = fetchDispText.text()
    })
}

export const dispViewContentTitleScore = () => {
    simulation.elements.viewContentTitleScore().then(function (fetchDispText) {
        const viewContentTitleScoreText = fetchDispText.text()
    })
}

export const clickTabInputKeywords = () => {
    simulation.elements.tabInputKeywords().click()
}

export const clickButtonIDNotHaveLiveUrl = () => {
    OptimizationPage.elements.buttonIDNotHaveLiveUrl().click()
}

export const clickFileUpload = () => {
    OptimizationPage.elements.FileUpload().click()
}



export const verifyDownloadButton = () => {
    simulation.elements.downloadButton().should('not.be.hidden')
    simulation.elements.downloadButton().should('be.visible')
    simulation.elements.downloadButton().should('be.enabled')
}

export const dispFileUpload = () => {
    OptimizationPage.elements.FileUpload().should('be.visible')
}

export const uploadeFileSimPageForNonLiveFlow = (filepath) => {
    OptimizationPage.elements.BrowserButton().attachFile(filepath)
}

export const dispBrowserButton = () => {
    OptimizationPage.elements.BrowserButton().should('be.visible')
}

export const waitForLoaderToDisappear = () => {
    simulation.elements.runSimSpinner().should('not.be.visible')
}

export const dispDisabledFileUpload = () => {
    OptimizationPage.elements.FileUpload().should('be.disabled')
}

export const clickDownloadButton = () => {
    simulation.elements.downloadButton().click()
}

export const verifyDownloadedFile = (fileName) => {
    cy.verifyDownload(fileName)
}

export const fileUploadToNonLiveFlow = (FilePath) => {
    OptimizationPage.elements.BrowserButton().attachFile(FilePath)
}

export const clickFetchKeywordButton = () => {
    OptimizationPage.elements.fetchKeywordButton().click()
}

export const clickRelatedCheckbox = (noOfcheckbox) => {
    
    OptimizationPage.elements.relatedCheckbox().then(($ele) => {
        for (let index = 0; index < $ele.length; index++) {

            if(index < noOfcheckbox) {
                OptimizationPage.elements.relatedCheckbox().eq(index).click({force:true})
            }
        }
    })
}

export const clickSelectAllKeyword = () => {
    OptimizationPage.elements.selectAllKeyword().click({force : true})
}

export const verifyLimitKeyword = (limit) => {
    OptimizationPage.elements.keywordLimitError().should('be.visible')
    OptimizationPage.elements.keywordLimitError().contains(limit)
}

export const verifyCheckboxSelection = (noOfcheckbox) => {

    OptimizationPage.elements.relatedCheckbox().then(($ele) => {
        for (let index = 0; index < $ele.length; index++){
            
            if(index < noOfcheckbox) {
                OptimizationPage.elements.relatedCheckbox().eq(index).should('be.checked')
            }
        }
    })
} 
export const NoKWFoundMessage = (NoKWFound) => {
    OptimizationPage.elements.NoKeywordsFound().should('be.visible')
    OptimizationPage.elements.NoKeywordsFound().then(function(msg){
        let disMsg =msg.text();
        expect(NoKWFound).to.equals(disMsg)
    })
}
export const clickHistoryUrlSearchBox = (keyword) => {
    OptimizationPage.elements.historyUrlSearchBox().clear()
    OptimizationPage.elements.historyUrlSearchBox().type(keyword)
}

export const enterRelatedKeyword = (KW) => {
    OptimizationPage.elements.historyUrlSearchBox().clear()
    OptimizationPage.elements.historyUrlSearchBox().type(KW)
}

export const verifyFetchKwBtnEnable = () => {
    OptimizationPage.elements.fetchKeywordButton().should('not.be.disabled')
}

export const verifyFetchKwBtnDisable = () => {
    OptimizationPage.elements.fetchKeywordButton().should('be.disabled')
}

export const verifyCountKeyword = () => {
    const keywordlist=[]
    OptimizationPage.elements.countKeyword().each((item, index, list) => {
        keywordlist.push(item)
    }).then(()=>{
        expect(keywordlist.length).to.be.greaterThan(1)
    }) 
}
export const clickSearchBox = (kw) => {
    OptimizationPage.elements.historyUrlSearchBox().clear()
    OptimizationPage.elements.historyUrlSearchBox().type(kw)
}

export const verifyLoaderKW = () => {
    OptimizationPage.elements.loaderKW().should('be.visible')
}

export const clickCheckBox = () => {
    OptimizationPage.elements.checkBoxClick().first().click({force:true})
}

export const verifyKWAlreadySelected = () =>{
    OptimizationPage.elements.checkBoxClick().first().should('be.checked')
}

export const clickRelevanceScoreTitle = () => {
    OptimizationPage.elements.relevanceScoreTitle().click({force:true}) 
}
   
export const clickRelavanceScoreFilterAndVerifyScores = () => {
    let ScoreTxt
    const RelScoreList=[]
    OptimizationPage.elements.relevanceScoreFilter().each(($ele,index) =>{
           
        OptimizationPage.elements.relevanceScoreFilter().eq(index).click({force:true})
        OptimizationPage.elements.relvanceFilterText().eq(index).then((ScTxt) => {
            let expectedScTxt=ScTxt.text()
            ScoreTxt =expectedScTxt.split(' - ')
        })
        
        OptimizationPage.elements.relvanceScoreList().each((score, index, list) => {
            RelScoreList.push(score)
        }).then(()=>{
            let flag=false
            for (let index = 0; index < RelScoreList.length; index++) {
                const ActualRelScore=parseFloat(RelScoreList[index].text())
                if (ActualRelScore>=parseFloat(ScoreTxt[0]) && ActualRelScore<=parseFloat(ScoreTxt[1])) {
                    flag=true;
                    expect(flag).to.be.true
                } else {
                    expect(flag).to.be.true
                }
                
            }    
        }) 
        OptimizationPage.elements.relevanceScoreFilter().eq(index).click({force:true})     
    })
}

export const clickRelScoreFilterSortAndVerifyScores = () => {
    let ScoreTxt;
    const RelScoreList=[]
    OptimizationPage.elements.relevanceScoreFilter().each(($ele,index) =>{
           
        OptimizationPage.elements.relevanceScoreFilter().eq(index).click({force:true})
        OptimizationPage.elements.relvanceFilterText().eq(index).then((ScTxt) => {
            let expectedScTxt=ScTxt.text();
            ScoreTxt =expectedScTxt.split(' - ')
        })
        for (let sort = 0; sort < 2; sort++) {
            cy.log("Sorting ===>"+sort)
            OptimizationPage.elements.RelScoreSort().last().click({force : true})

            OptimizationPage.elements.relvanceScoreList().each((score, index, list) => {
                RelScoreList.push(score)
            }).then(()=>{
                let flag=false;
                for (let index = 0; index < RelScoreList.length; index++) {
                    const ActualRelScore=parseFloat(RelScoreList[index].text())
                    if (ActualRelScore>=parseFloat(ScoreTxt[0]) && ActualRelScore<=parseFloat(ScoreTxt[1])) {
                        flag=true;
                        expect(flag).to.be.true
                    } else {
                        expect(flag).to.be.true
                    }    
                }
            }) 

        }
        
        OptimizationPage.elements.relevanceScoreFilter().eq(index).click({force:true})     
    })
}

export const verifyTopicInputBox = () => {
    OptimizationPage.elements.historyUrlSearchBox().should('be.visible')
}

export const clickSearchVolumeTitle = () => {
    OptimizationPage.elements.searchVolumeTitle().click({force : true})
}

export const clickSearchVolFilterAndVerifySearchVolScores = () => {
    let ScoreTxt;
    let ScoreM;
    let ScoreK;
    let ActuaVolScore;
    const SVScoreList=[];
    var temp=0;
    OptimizationPage.elements.searchVolumeFilter().each(($ele, index) => {
        
        OptimizationPage.elements.searchVolumeFilter().eq(index).click({force : true})

        OptimizationPage.elements.searchVolumeScoreList().each((score,index,list) => {
            SVScoreList.push(score)
        }).then(() => {
            let flag=false;
    
            for (let index = temp; index < SVScoreList.length; index++) {
                
                if((SVScoreList[index].text()).includes('M')){
                    ScoreM = parseFloat(SVScoreList[index].text())*1000000 
                }else if ((SVScoreList[index].text()).includes('K')) {
                    ScoreK = parseFloat(SVScoreList[index].text())*1000
                }else {
                    ActuaVolScore=parseFloat(SVScoreList[index].text())
                }

                if(ScoreM>=1000000 || (ScoreK>=100001 && ScoreK<1000000) ){
                    flag=true;
                    expect(flag).to.be.true;
                }else if (ScoreK>=10001 && ScoreK<=100000) {
                    flag=true;
                    expect(flag).to.be.true;
                }else if (ScoreK>=1001 && ScoreK<=10000) {
                    flag=true;
                    expect(flag).to.be.true;
                }else if ((ActuaVolScore>=101 && ActuaVolScore<1000) || ScoreK==1000) {
                    flag=true;
                    expect(flag).to.be.true;
                }else {
                    expect(flag).to.be.true;
                }
            }
            temp=SVScoreList.length;
        })
        
        OptimizationPage.elements.searchVolumeFilter().eq(index).click({force : true})
        
    })

    
}
export const verifyErrMsgSimulationUrl = (error) => {
    OptimizationPage.elements.ErrMsgSimulationUrl().should('be.visible')
    OptimizationPage.elements.ErrMsgSimulationUrl().contains(error)
    
}

