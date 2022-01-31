import { Simulation } from '../page-selectors/SimulationPage'
import { OptimizationPage } from '../page-selectors/PageSimulation'
import exp from 'constants'
import { clear } from 'console'

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

export const clickSimulationForUrl = () => {
    Simulation.elements.simulationForUrl().click({ force: true })
}

export const dispNotificationRunSinarioApiFailure = () => {

    OptimizationPage.elements.simulationFailure().should('be.visible')
}

export const enterMultiKeywordUrl = (KWURl) => {
    Simulation.elements.multiKeywordUrl().clear()
    Simulation.elements.multiKeywordUrl().type(KWURl)
}

export const updateBodyContentInSim = (ntxt) => {
    OptimizationPage.elements.contentBodySim().clear()
    OptimizationPage.elements.contentBodySim().type(ntxt)
}

export const dispSimulationForUrlHeading = (url) => {
    Simulation.elements.simulationForUrl().then(function (disptext) {
        let simHeadingtext = disptext.text()

        url = url.replace('"', ' ')
        simHeadingtext = simHeadingtext.replace('‘‘', '')
        simHeadingtext = simHeadingtext.replace('’’', '')
        expect(simHeadingtext).to.equals(url)
    })
}

export const updatingNewStringToContext = (NewString) => {
    Simulation.elements.editorBodyText().clear()
    Simulation.elements.editorBodyText().type(NewString)
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
    Simulation.elements.addKeyword().clear()
    Simulation.elements.addKeyword().type(KW)
}

export const clickAddKeywordButton = () => {
    Simulation.elements.addKeywordButton().click()
}

export const clickbuttonAddKeyword = () => {
    OptimizationPage.elements.buttonAddKeyword().click()
}

export const txtAddKeywordSimPage = (KW) => {
    OptimizationPage.elements.txtAddKeyword().clear()
    OptimizationPage.elements.txtAddKeyword().type(KW)
}

export const clicksubmitButton = () => {
    Simulation.elements.submitButton().click()
}

export const clickzoomPage = () => {
    Simulation.elements.zoompage().click({ force: true })
}

export const clickRunSimulationButton = () => {
    Simulation.elements.runSimulationButton().click({ force: true })
}

export const clickArticleViewToggele = () => {
    Simulation.elements.ArticleViewToggele().click ()
}

export const clickResetButton = () => {
    Simulation.elements.resetButton().click()
}

export const clickViewOriginalContent = () => {
    Simulation.elements.viewOriginalContent().click()
}

export const clicksiMulationMultiKeywordToggleButton = () => {
    Simulation.elements.simulationMultiKeywordToggleButton().click({ force: true })
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

export const validateNotificationForSimulationWithOutAnyCHanges = () => {
    OptimizationPage.elements.errMsgRunSimWithOutChanges().should('be.visible')
}

export const validateErrorNotificationForInvalidURL = () => {
    OptimizationPage.elements.errorMsgForInvalidUrl().should('be.visible')
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

export const clickRemoveAll = () => {
    OptimizationPage.elements.removeAll().click({ force: true })
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

export const checkSelectALlKW  = () => {
    OptimizationPage.elements.selectAllFromProKW().click({force: true})
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
    OptimizationPage.elements.tabProjectKeyword().click()
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

export const dispHeadingContentOptimalUsageHtmlAttributes = () => {
    Simulation.elements.headingContentOptimalUsageHtmlAttributes().should('be.visible')
}

export const dispNoneHeadingContentOptimalUsageHtmlAttributes = () => {
    Simulation.elements.headingContentOptimalUsageHtmlAttributes().should('not.exist')
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
    Simulation.elements.invalidUrlErrMsg().should('be.visible')
}

export const shouldNotDisphowEditorWords = () => {
    OptimizationPage.elements.howEditorWords().should('not.be.visible')
}



export const dispKeywordTextIdentifier = (keyworddata) => {
    Simulation.elements.keywordTextIdentifier().then(function (fetchDispText) {
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
    
    let contentEditorText=Simulation.elements.simContentEditor().then(function (fetchDispText) {
        const NotificationMaxLimitText = fetchDispText.text()
        return NotificationMaxLimitText
    })

    Simulation.elements.viewOriginalContent().click({ force: true })

    let contentViewOriginalText=Simulation.elements.simViewOriginalContent().then(function (fetchDispText) {
        const NotificationMaxLimitText = fetchDispText.text()
        return NotificationMaxLimitText
    })
    expect(contentEditorText).not.to.equal(contentViewOriginalText)
}


export const dispNotificationForInvalidFileUpload = (InvalidFileNoftification) => {
    Simulation.elements.invalidUrlErrMsg().then(function (fetchDispText) {
        const NotificationForInvalidFileUpload = fetchDispText.text()
        expect(NotificationForInvalidFileUpload).to.equal(InvalidFileNoftification)
    })
}

export const dispNotificationMsgInitiateApiFails = (APIFailureNoftification) => {
    Simulation.elements.invalidUrlErrMsg().then(function (fetchDispText) {
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
    Simulation.elements.lblViewEmptyTrafficRankNotification().then(function (notificationText) {
        const trafficAndRankNotification = notificationText.text()

        expect(trafficAndRankNotification).to.equals(nText)
    })
}

export const displblViewKWLevelImpactNotification = (nText) => {
    Simulation.elements.lblViewKWLevelImpactNotification().then(function (notificationText) {
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
    Simulation.elements.lblViewContentNotification().then(function (notificationText) {
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
    Simulation.elements.lblViewAuthorityNotification().then(function (notificationText) {
        const ViewAuthorityNotification = notificationText.text()

        expect(ViewAuthorityNotification).to.equals(nText)
    })
}

export const displblViewTechNotification = (nText) => {
    Simulation.elements.lblViewTechNotification().then(function (notificationText) {
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
    Simulation.elements.zoomViewTechScore().then(function (fetchDispText) {
        const zoomViewTechScoreText = fetchDispText.text()
    })
}

export const dispZoomViewAuthorityScore = () => {
    Simulation.elements.zoomViewAuthorityScore().then(function (fetchDispText) {
        const zoomViewAuthorityScoreText = fetchDispText.text()
    })
}

export const dispZoomViewContentScore = () => {
    Simulation.elements.zoomViewContentScore().then(function (fetchDispText) {
        const zoomViewContentScoreText = fetchDispText.text()
    })
}

export const dispZoomContentUrl = () => {
    Simulation.elements.zoomContentUrl().then(function (fetchDispText) {
        const zoomContentUrlText = fetchDispText.text()
    })
}

export const dispZoomContentTitle = () => {
    Simulation.elements.zoomContentTitle().then(function (fetchDispText) {
        const zoomContentTitleText = fetchDispText.text()
    })
}

export const dispZoomContentMetaDescription = () => {
    Simulation.elements.zoomContentMetaDescription().then(function (fetchDispText) {
        const zoomContentMetaDescriptionText = fetchDispText.text()
    })
}

export const dispZoomContentH1 = () => {
    Simulation.elements.zoomContentH1().then(function (fetchDispText) {
        const zoomContentH1Text = fetchDispText.text()
    })
}

export const dispZoomContentH2 = () => {
    Simulation.elements.zoomContentH2().then(function (fetchDispText) {
        const zoomContentH2Text = fetchDispText.text()
    })
}

export const dispZoomContentBodyContent = () => {
    Simulation.elements.zoomContentBodyContent().then(function (fetchDispText) {
        const zoomContentBodyContentText = fetchDispText.text()
    })
}

export const dispZoomContentTitleScore = () => {
    Simulation.elements.zoomViewTechScore().then(function (fetchDispText) {
        const zoomViewTechScoreText = fetchDispText.text()
    })
}

export const dispViewTrafficRank = () => {
    Simulation.elements.viewTrafficRank().then(function (fetchDispText) {
        const viewTrafficRankText = fetchDispText.text()
    })
}

export const dispViewTrafficRankIcon = () => {
    Simulation.elements.viewTrafficRankIcon().then(function (fetchDispText) {
        const viewTrafficRankIconText = fetchDispText.text()
    })
}

export const dispViewTrafficScore = () => {
    Simulation.elements.viewTrafficScore().then(function (fetchDispText) {
        const viewTrafficScoreText = fetchDispText.text()
    })
}

export const dispViewRankScore = () => {
    Simulation.elements.viewRankScore().then(function (fetchDispText) {
        const viewRankScoreText = fetchDispText.text()
    })
}

export const dispViewContentUrlScore = () => {
    Simulation.elements.viewContentUrlScore().then(function (fetchDispText) {
        const viewContentUrlScoreText = fetchDispText.text()
    })
}

export const dispViewContentTitleScore = () => {
    Simulation.elements.viewContentTitleScore().then(function (fetchDispText) {
        const viewContentTitleScoreText = fetchDispText.text()
    })
}

export const clickTabInputKeywords = () => {
    Simulation.elements.tabInputKeywords().click()
}

export const clickButtonIDNotHaveLiveUrl = () => {
    OptimizationPage.elements.buttonIDNotHaveLiveUrl().click()
}

export const clickFileUpload = () => {
    OptimizationPage.elements.FileUpload().click()
}



export const verifyDownloadButton = () => {
    Simulation.elements.downloadButton().should('not.be.hidden')
    Simulation.elements.downloadButton().should('be.visible')
    Simulation.elements.downloadButton().should('be.enabled')
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
    Simulation.elements.runSimSpinner().should('not.be.visible')
}

export const dispDisabledFileUpload = () => {
    OptimizationPage.elements.FileUpload().should('be.disabled')
}


export const clickDownloadButton = () => {
    Simulation.elements.downloadButton().click()
}

export const verifyDownloadedFile = (fileName) => {
    cy.verifyDownload(fileName)
}

export const fileUploadToNonLiveFlow = (FilePath) => {
    OptimizationPage.elements.BrowserButton().attachFile(FilePath)
}

export const enterRelatedKeyword = (KW) => {
    OptimizationPage.elements.historyUrlSearchBox().clear().type(KW)
}

export const visibleRelatedKeyword = () => {
    OptimizationPage.elements.RelatedKeyword().should('be.visible')
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
            else{
                break;
            }
        }
    })
}

export const verifyCheckboxSelection = (noOfcheckbox) => {

    OptimizationPage.elements.relatedCheckbox().then(($ele) => {
        for (let index = 0; index < $ele.length; index++){
            
            if(index < noOfcheckbox) {
                OptimizationPage.elements.relatedCheckbox().eq(index).should('be.checked')
            }
            else{
                break;
            }
        }
    })
} 