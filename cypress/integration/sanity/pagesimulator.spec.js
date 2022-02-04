import * as loginAction from '../../pages/commands/login'
import * as kgaAction from '../../pages/commands/kgahomepage'
import * as kgaSerpAction from '../../pages/commands/kgaserpage'
import * as simulationAction from '../../pages/commands/simulationPageCommands'
import * as projectAction from '../../pages/commands/projectflowcommands'


describe('As an ALPS user', () => {
    let data

    before(() => {
        // Clear downloads folder
        cy.exec('del /q "cypress\\downloads\\*.*"', { log: true, failOnNonZeroExit: false })
        cy.exec('rm cypress/downloads/*', { log: true, failOnNonZeroExit: false })

        cy.loginUser()
        cy.fixture('userData').then((userData) => {
            data = userData
        })
    })
    beforeEach(() => {
        cy.restoreLocalStorage()
    })
    afterEach(() => {
        cy.saveLocalStorage()
    })
    it('AL-T13:Verify the landing on page simulator Page', () => {
        // loginAction.clickAlpsLogo()
        simulationAction.clickTabOptimization()
        simulationAction.clickTabPageSimulation()

        // Assertion for validating the landing page of page simulation
        simulationAction.disphHadingSimulationHistory()
    })

    it('AL-T17:Verify the bottom section of page simulator', () => {
        loginAction.clickAlpsLogo()
        simulationAction.clickTabOptimization()
        simulationAction.clickTabPageSimulation()

        // Assertion for validating the landing page of page simulation
        simulationAction.dispHeadingBlAnalysis()
        simulationAction.dispHeadingContGapAnalysis()
        simulationAction.dispHeadingKwGapAnalysis()
        simulationAction.dispHeadingTechAudit()
        simulationAction.dispHeadingContentSim()
        simulationAction.dispHeadingKwRankAndPerf()
    })

    it('AL-T18 : Verify user should able to enter Live URL', () => {
        loginAction.clickAlpsLogo()
        simulationAction.clickTabOptimization()
        simulationAction.clickTabPageSimulation()
        simulationAction.textPageOptimizationUrl(data.optimizationurl)
        simulationAction.clickGoButton()

        // Assertion validation

        simulationAction.dispSimpage(data.optimizationurl)
    })

    // Functinality is depricated
    it.skip('AL-T20 : Verify when user enter a Valid URL', () => {
        loginAction.clickAlpsLogo()
        simulationAction.clickTabOptimization()
        simulationAction.clickTabPageSimulation()
        simulationAction.textPageOptimizationUrl(data.InvalidaUrlFormat)
        simulationAction.clickGoButton()

        // Assertion validation
        simulationAction.validateErrorNotificationForInvalidURL()
    })

    it('AL-T59 : Verify the default selected Sort field on page when user lands on page', () => {
        loginAction.clickAlpsLogo()
        simulationAction.clickTabOptimization()
        simulationAction.clickTabPageSimulation()
        simulationAction.textPageOptimizationUrl(data.SimulationUrl)
        simulationAction.clickGoButton()
        simulationAction.clickToggleButton()
        simulationAction.clickTabtechnical()

        // Assertion validation
        simulationAction.dispDefaultSortValue(data.DefultSortValue)
    })

    // Functinality is depricated
    it.skip('AL-T62 : Verify the URL in the URL for simulation text field', () => {
        loginAction.clickAlpsLogo()
        simulationAction.clickTabOptimization()
        simulationAction.clickTabPageSimulation()
        simulationAction.textPageOptimizationUrl(data.SimulationUrl)
        simulationAction.clickGoButton()

        // Assertion validation
        simulationAction.dispSimulationForUrlHeading(data.SimulationUrl)
    })

    // Functinality is depricated
    it.skip('AL-T63: Verify the URL for simulation text field when new URL is updated', () => {
        loginAction.clickAlpsLogo()
        simulationAction.clickTabOptimization()
        simulationAction.clickTabPageSimulation()
        simulationAction.textPageOptimizationUrl(data.SimulationUrl)
        simulationAction.clickGoButton()
        // kgaSerpAction.clickSerpPageSimulation()
        cy.wait(9000)
        simulationAction.enterAddKeywordUrl(data.newURL)
        cy.wait(9000)
        simulationAction.clickTabInputKeywordsInSimPage()
        simulationAction.txtAddKeywordSimPage(data.keyword)
        simulationAction.clickbuttonAddKeyword()
        simulationAction.clicksubmitButton()

        // validating the updated URL which is added in sim page heading
        simulationAction.dispSimpage(data.simHeadingValidationURl)
    })

    it('AL-T53 : Verify the behaviour of Filter button when user lands on simulation page for Technical Parameters', () => {
        loginAction.clickAlpsLogo()
        simulationAction.clickTabOptimization()
        simulationAction.clickTabPageSimulation()
        simulationAction.textPageOptimizationUrl(data.SimulationUrl)
        simulationAction.clickGoButton()
        simulationAction.clickToggleButton()
        simulationAction.clickTabtechnical()

        // Assertion validation
        simulationAction.dispHeadingContentOptimalUsageHtmlAttributes()

        // Assertion validation
        cy.wait(1000)
        simulationAction.clickTabAuth()
        simulationAction.clickTabtechnical()
        simulationAction.uncheckFilterHighInTechParameter()
        simulationAction.uncheckFilterLowIntechParameter()
        simulationAction.dispNoneHeadingContentOptimalUsageHtmlAttributes()
    })

    it('AL-T66: Verify the keywords text fields', () => {
        loginAction.clickAlpsLogo()
        simulationAction.clickTabOptimization()
        simulationAction.clickTabPageSimulation()
        simulationAction.textPageOptimizationUrl(data.SimulationUrl)
        simulationAction.clickGoButton()
        simulationAction.clicksubmitButton()

        // validating when textfield added KW 
        simulationAction.disperrorNotificationForEmptyKWSim(data.NoftificationErrorMSgForEmptyKWSim)
    })

    it('AL-T67: Verify the keywords text fields when keywords are added', () => {
        loginAction.clickAlpsLogo()
        simulationAction.clickTabOptimization()
        simulationAction.clickTabPageSimulation()
        simulationAction.textPageOptimizationUrl(data.optimizationurl)
        simulationAction.clickGoButton()
        simulationAction.clickTabInputKeywordsInSimPage()
        simulationAction.enterAddKeyword(data.MultipleKeywordsForSimPage)
        simulationAction.clickAddKeywordButton()

        // validating when text field added multiple KW 
        simulationAction.dispKWcountInSimPage()
    })

    // Functinality is depricated
    it.skip('AL-T94: Verify the URL in "URL for simulation" text field', () => {
        loginAction.clickAlpsLogo()
        simulationAction.clickTabOptimization()
        simulationAction.clickTabPageSimulation()
        simulationAction.textPageOptimizationUrl(data.SimulationUrl)
        simulationAction.clickGoButton()

        // validating the updated URL in text field.
        simulationAction.dispSimulationUrl(data.SimulationUrl)
    })

    it('AL-T99:Verify the validation on the locale dropdown in the blue accordian section', () => {
        loginAction.clickAlpsLogo()
        simulationAction.clickTabOptimization()
        simulationAction.clickTabPageSimulation()
        simulationAction.textPageOptimizationUrl(data.SimulationUrl)
        simulationAction.clickGoButton()
        simulationAction.ClickSelectorLocaleDdn()
        simulationAction.ClickSlectNewLocale()

        // validating the updated Locale Notification message.
        simulationAction.dispNotificationMessageForLocaleUpdate()
    })

    it('AL-T100:Verify the validation on the keywords text box in the blue accordian section when no keywords are entered', () => {
        loginAction.clickAlpsLogo()
        simulationAction.clickTabOptimization()
        simulationAction.clickTabPageSimulation()
        simulationAction.textPageOptimizationUrl(data.SimulationUrl)
        simulationAction.clickGoButton()
        simulationAction.clicksubmitButton()

        // validating the empty KW simulation Notification message.
        simulationAction.dispNotifyMsgForEmptyKWProceed(data.NoftificationErrorMSgForEmptyKWSim)
    })

    it('AL-T227: Verify the visibility of download icon', () => {
        loginAction.clickAlpsLogo()
        simulationAction.clickTabOptimization()
        simulationAction.clickTabPageSimulation()
        simulationAction.textPageOptimizationUrl(data.SimulationUrl)
        simulationAction.clickGoButton()
        simulationAction.clickTabInputKeywords()
        simulationAction.enterAddKeyword(data.SimulationKeyword)
        simulationAction.clickAddKeywordButton()
        simulationAction.clicksubmitButton()

        // validating the download button.
        simulationAction.verifyDownloadButton()
    })

    it('AL-T228: Verify the functionality of download icon when all the keywords are processed', () => {
        loginAction.clickAlpsLogo()
        simulationAction.clickTabOptimization()
        simulationAction.clickTabPageSimulation()
        simulationAction.textPageOptimizationUrl(data.SimulationUrl)
        simulationAction.clickGoButton()
        simulationAction.clickTabInputKeywords()
        simulationAction.enterAddKeyword(data.SimulationKeyword)
        simulationAction.clickAddKeywordButton()
        simulationAction.clicksubmitButton()
        simulationAction.verifyDownloadButton()
        simulationAction.clickDownloadButton()

        // validating the downloaded file.
        simulationAction.verifyDownloadedFile(data.SimulationDownloadedFile)
    })

    it('AL-T101:Verify the validation on the keywords text box in the blue accordian section when User tries to enter duplicate keywords', () => {
        loginAction.clickAlpsLogo()
        simulationAction.clickTabOptimization()
        simulationAction.clickTabPageSimulation()
        simulationAction.textPageOptimizationUrl(data.SimulationUrl)
        simulationAction.clickGoButton()
        simulationAction.clickTabInputKeywordsInSimPage()
        simulationAction.txtAddKeywordSimPage(data.keyword)
        simulationAction.clickbuttonAddKeyword()
        simulationAction.txtAddKeywordSimPage(data.keyword)
        simulationAction.clickbuttonAddKeyword()

        // validating the Duplicate KW simulation Notification message.
        simulationAction.disperrorNotificationForDuplicateKWSim(data.duplicateKWNotificationMsg)
        
    })

    it('AL-T103:Verify if an inline warning message is displayed when the (keyword(s) on the textbox list + keyword(s) present in the textbox)> 20 and User clicks on the add keyword button', () => {
        loginAction.clickAlpsLogo()
        simulationAction.clickTabOptimization()
        simulationAction.clickTabPageSimulation()
        simulationAction.textPageOptimizationUrl(data.SimulationUrl)
        simulationAction.clickGoButton()
        simulationAction.clickTabInputKeywordsInSimPage()
        simulationAction.txtAddKeywordSimPage(data.mulipleKeywords1)
        simulationAction.clickbuttonAddKeyword()
        simulationAction.txtAddKeywordSimPage(data.keyword)
        simulationAction.clickbuttonAddKeyword()

        // validating the max limit  KW simulation Notification message.
        simulationAction.dispNotificationForMaxLimitKWSim(data.WarningMSgFoxMaxLimitKWAdd)
        
    })


    it('AL-T104: Verify if an inline warning message is displayed when the number of keywords selected from the project is more than 20', () => {
        loginAction.clickAlpsLogo()
        simulationAction.clickTabOptimization()
        simulationAction.clickTabPageSimulation()
        simulationAction.textPageOptimizationUrl(data.SimulationUrl)
        simulationAction.clickGoButton()
        cy.wait(9000)
        simulationAction.clickTabInputKeywordsInSimPage()
        simulationAction.txtAddKeywordSimPage(data.multipleKeywords)
        simulationAction.clickbuttonAddKeyword()
        simulationAction.clickTabProjectKeywordInSimPage()
        simulationAction.checkSelectALlKW()

        // validating the notification message for selection more than 20 KW from project KW section
        simulationAction.dispNotificationSelectingKWMoreThanALimit(data.WarningMSgFoxMaxLimitKWAdd)
    })

    it('AL-T105: Verify if an inline error message is displayed when all the keywords are removed an User clicks on submit button', () => {
        loginAction.clickAlpsLogo()
        simulationAction.clickTabOptimization()
        simulationAction.clickTabPageSimulation()
        simulationAction.textPageOptimizationUrl(data.SimulationUrl)
        simulationAction.clickGoButton()
        cy.wait(9000)
        simulationAction.clickTabInputKeywordsInSimPage()
        simulationAction.txtAddKeywordSimPage(data.multipleKeywords)
        simulationAction.clickbuttonAddKeyword()
        simulationAction.clickRemoveAll()
        simulationAction.clicksubmitButton()


        // validating the notification message when remove all and proceed simulation
        simulationAction.disperrorNotificationForEmptyKWSim(data.NoftificationErrorMSgForEmptyKWSim)
    })

    it('AL-T106,AL-T07,AL-T08: Verify if an inline error message is displayed under ‘View Keyword Level Impact data’ on the left pane when no keywords are submitted', () => {
        loginAction.clickAlpsLogo()
        simulationAction.clickTabOptimization()
        simulationAction.clickTabPageSimulation()
        simulationAction.textPageOptimizationUrl(data.SimulationUrl)
        simulationAction.clickGoButton()
        cy.wait(9000)
        simulationAction.clickToggleButton()

        // validating the notification message when we donot have any KW
        simulationAction.displblViewEmptyTrafficRankNotification(data.NotificationMessageForEmptyKWInSimPage)
    })

    it('AL-T134: Verify if the user is able to view the search volume', () => {
        loginAction.clickAlpsLogo()
        simulationAction.clickTabOptimization()
        simulationAction.clickTabPageSimulation()
        simulationAction.textPageOptimizationUrl(data.SimulationUrl)
        simulationAction.clickGoButton()
        cy.wait(9000)
        simulationAction.clickTabProjectKeywordInSimPage()

        // validating the search volume section
        simulationAction.verifySearchVolumeSection()
    })
	

    it('AL-T214:Verify the presence of the ‘Upload file’ textbox in the URL & KEYWORDS Editor section’ of the non-live url flow of page simulation', () => {
        loginAction.clickAlpsLogo()
        simulationAction.clickTabOptimization()
        simulationAction.clickTabPageSimulation()
        simulationAction.clickButtonIDNotHaveLiveUrl()

        // validating the browser and upload button
        simulationAction.dispFileUpload()
        simulationAction.dispBrowserButton()

    })
	

    it('AL-T219:Verify upload button should be disabled state when user try to click on that with out selecting any file.', () => {
        loginAction.clickAlpsLogo()
        simulationAction.clickTabOptimization()
        simulationAction.clickTabPageSimulation()
        simulationAction.clickButtonIDNotHaveLiveUrl()

        // Functinality Assertion
        simulationAction.dispDisabledFileUpload()

    })

    it('AL-T215:Verify the functionality of the ‘Browse’ button in the URL & KEYWORDS Editor section’ in the non-live url flow of page simulation', () => {
        loginAction.clickAlpsLogo()
        simulationAction.clickTabOptimization()
        simulationAction.clickTabPageSimulation()
        simulationAction.clickButtonIDNotHaveLiveUrl()
        const filepath = 'sample1.html'

        simulationAction.uploadeFileSimPageForNonLiveFlow(filepath)
        simulationAction.clickFileUpload()

        // Uploaded File name in browser section
        simulationAction.dispUploadedHtmlFileName(filepath)



    })

    it('AL-T225:Verify that the content is updated in the editor section on simulation page only after the user uploads a valid html file clicks on Submit button', () => {
        loginAction.clickAlpsLogo()
        simulationAction.clickTabOptimization()
        simulationAction.clickTabPageSimulation()
        simulationAction.clickButtonIDNotHaveLiveUrl()
        const filepath = 'sample1.html'

        simulationAction.uploadeFileSimPageForNonLiveFlow(filepath)
        simulationAction.clickFileUpload()
        simulationAction.clickTabInputKeywordsInSimPage()
        simulationAction.txtAddKeywordSimPage(data.NonLiveKW)
        simulationAction.clickbuttonAddKeyword()
        simulationAction.clicksubmitButton()

        // Content Score value in non live flow after simulation
        simulationAction.dispContentScore()

    })


    it('AL-T236: Verify the download icon in Zoom mode', () => {
        loginAction.clickAlpsLogo()
        simulationAction.clickTabOptimization()
        simulationAction.clickTabPageSimulation()
        simulationAction.textPageOptimizationUrl(data.SimulationUrl)
        simulationAction.clickGoButton()
        cy.wait(9000)
        simulationAction.clickTabInputKeywordsInSimPage()
        simulationAction.txtAddKeywordSimPage(data.keyword)
        simulationAction.clickbuttonAddKeyword()
        simulationAction.clicksubmitButton()
        simulationAction.clickzoomPage()

        // Download button in zoom page
        simulationAction.verifyDownloadButton()
    })

    
    it('AL-T509: Verify the functionality of View Switch on new editor for live flow', () => {
        loginAction.clickAlpsLogo()
        simulationAction.clickTabOptimization()
        simulationAction.clickTabPageSimulation()
        simulationAction.textPageOptimizationUrl(data.SimURL)
        simulationAction.clickGoButton()
        cy.wait(9000)
        simulationAction.clickTabInputKeywordsInSimPage()
        simulationAction.txtAddKeywordSimPage(data.keyword)
        simulationAction.clickbuttonAddKeyword()
        simulationAction.clicksubmitButton()

        // validation of article and tag view
        simulationAction.dishowEditorWords()
        simulationAction.clickArticleViewToggele()
        simulationAction.shouldNotDisphowEditorWords()

        
    })

    it('AL-T358:Verify if user uploads a non-html file as an html file on page optimizer page, error notification is displayed', () => {
        loginAction.clickAlpsLogo()
        simulationAction.clickTabOptimization()
        simulationAction.clickTabPageSimulation()
        simulationAction.clickButtonIDNotHaveLiveUrl()
        const filepath = 'Screenshot from 2022-01-12 19-53-10.html'

        simulationAction.uploadeFileSimPageForNonLiveFlow(filepath)
        cy.wait(9000)
        simulationAction.clickFileUpload()

        // Notification message for invalid file upload in non live flow simulation
        simulationAction.dispInvalidUrlErrMsg()

    })

    it('AL-T509: Verify the functionality of View Switch on new editor non live flow', () => {
        loginAction.clickAlpsLogo()
        simulationAction.clickTabOptimization()
        simulationAction.clickTabPageSimulation()
        simulationAction.clickButtonIDNotHaveLiveUrl()
        simulationAction.clickToggleButton()

        // validation of article and tag view
        simulationAction.dishowEditorWords()
        simulationAction.clickArticleViewToggele()
        simulationAction.shouldNotDisphowEditorWords()

    })
    
    it('AL-T137: all the keywords of a project,sorted in the descending order of search volumes by default when user clicks on “Select from Project"', () => {
        loginAction.clickAlpsLogo()
        kgaAction.enterKeyword(data.SimulationKeyword)
        kgaAction.enterURL(data.SimulationUrl)
        kgaAction.clickGo()
        cy.wait(9000)
        kgaSerpAction.clickSerpPageSimulation()
        simulationAction.clickTabProjectKeywordInSimPage()
        //incomplete test case because bug reorted
    })

    it('AL-T141: Verify Themes section in the select kw from project list when we do not have any themes', () => {
        cy.loginUser()
        loginAction.clickAlpsLogo()
        projectAction.clickProjectNavTitle()
        projectAction.clickChangeProjectTab()
        projectAction.enterProjectNameToSearch(data.projectName)
        projectAction.clickGoToDashboard()
        cy.wait(9000)
        projectAction.clickAlpsLogo()
        cy.wait(9000)
        //verify project changed with 'no KW'
        projectAction.verifyChangedProject(data.projectName)
        simulationAction.clickTabOptimization()
        simulationAction.clickTabPageSimulation()
        simulationAction.textPageOptimizationUrl(data.SimulationUrl)
        simulationAction.clickGoButton()
        cy.wait(9000)
        simulationAction.clickTabProjectKeywordInSimPage()
        simulationAction.clickThemeSimulation()
        //verify no theme available in page simulation page
        simulationAction.dispInlineNoTheme()
    })

    it('AL-T1319: verify the related kw In simulation page only for Live flow', () => {
        loginAction.clickAlpsLogo()
        simulationAction.clickTabOptimization()
        simulationAction.clickTabPageSimulation()
        simulationAction.textPageOptimizationUrl(data.SimulationUrl)
        simulationAction.clickGoButton()
        simulationAction.clickHistoryUrlSearchBox(data.SimulationKeyword)
        simulationAction.clickFetchKeywordButton()
        cy.wait(9000)

        // validation of keywords are available or not
        simulationAction.verifyCountKeyword()
    })

    it('AL-T1320: verify the loader icon when we Fetch the related KW', () => {
        loginAction.clickAlpsLogo()
        simulationAction.clickTabOptimization()
        simulationAction.clickTabPageSimulation()
        simulationAction.clickButtonIDNotHaveLiveUrl()
        simulationAction.clickSearchBox(data.NonLiveKW)
        simulationAction.clickFetchKeywordButton()
        //verify the loader icon
        simulationAction.verifyLoaderKW()
        
    })

    it('AL-T1324: verify keyword is already selected from Keyword input or Project Keyword section then it should be selected in related Keywords section as well', () => {
        cy.loginUser()
        loginAction.clickAlpsLogo()
        simulationAction.clickTabOptimization()
        simulationAction.clickTabPageSimulation()
        simulationAction.textPageOptimizationUrl(data.SimURL)
        simulationAction.clickGoButton()
        simulationAction.clickHistoryUrlSearchBox(data.KeywordRelated)
        simulationAction.clickFetchKeywordButton()
        cy.wait(9000)
        //select any one KW
        simulationAction.clickCheckBox()
        simulationAction.clickTabProjectKeywordInSimPage()
        //Verify project Keyword section then it should be selected in related Keywords section as well
        simulationAction.verifyKWAlreadySelected()
    })
    it('AL-T1321: verify are we able to see all Related KW in that section', () => {
        loginAction.clickAlpsLogo()
        simulationAction.clickTabOptimization()
        simulationAction.clickTabPageSimulation()
        simulationAction.textPageOptimizationUrl(data.optimizationurl)
        simulationAction.clickGoButton()
        simulationAction.clickSearchBox(data.NonLiveKW)
        simulationAction.clickFetchKeywordButton()
        
        //verify the related keyword visible on page simulation
        simulationAction.verifyCountKeyword()

    })
    it('AL-T142: Verify if the user is able to see the message ‘No keywords found’ in the select from project section when  there are no keywords in a project', () => {
        cy.loginUser()
        loginAction.clickAlpsLogo()
        projectAction.clickProjectNavTitle()
        projectAction.clickChangeProjectTab()
        projectAction.enterProjectNameToSearch(data.project)
        projectAction.clickGoToDashboard()
        projectAction.clickApplyFilter()
        cy.wait(5000)
        projectAction.clickAlpsLogo()
        cy.wait(9000)
        //verify project changed with 'no KW'
        projectAction.verifyChangedProject(data.project)
    
    })

    it('AL-T1322: Verify relative KW should able to select for the simulation', () => {
        loginAction.clickAlpsLogo()
        simulationAction.clickTabOptimization()
        simulationAction.clickTabPageSimulation()
        simulationAction.textPageOptimizationUrl(data.SimulationUrl)
        simulationAction.clickGoButton()
        simulationAction.clickTabKeywordSuggestion()
        simulationAction.enterRelatedKeyword(data.SimulationKeyword)
        simulationAction.clickFetchKeywordButton()
        cy.wait(9000)
        simulationAction.clickRelatedCheckbox(data.NoOfCheckbox)

        //validatation of related KW is selected
        simulationAction.verifyCheckboxSelection(data.NoOfCheckbox)
        
  
    })
    it('AL-T1323: Verify the limit for selecting keywords', () => {
        loginAction.clickAlpsLogo()
        simulationAction.clickTabOptimization()
        simulationAction.clickTabPageSimulation()
        simulationAction.textPageOptimizationUrl(data.SimulationUrl)
        simulationAction.clickGoButton()
        simulationAction.clickTabKeywordSuggestion()
        simulationAction.enterRelatedKeyword(data.SimulationKeyword)
        simulationAction.clickFetchKeywordButton()
        cy.wait(9000)
        simulationAction.clickRelatedCheckbox(data.maxCheckbox)
        simulationAction.clickSelectAllKeyword()

        //validation the notification message for selection more than 20 KW
        simulationAction.verifyCheckboxSelection(data.maxCheckbox)
        simulationAction.verifyLimitKeyword(data.RelatedKWLimit)
    })

    it('AL-T1326: verify the "topic" input box button should be visible in live or non live flow', () => {
        //live flow
        loginAction.clickAlpsLogo()
        simulationAction.clickTabOptimization()
        simulationAction.clickTabPageSimulation()
        simulationAction.textPageOptimizationUrl(data.SimulationUrl)
        simulationAction.clickGoButton()
        simulationAction.verifyTopicInputBox()  //verify input box

        //non-live flow
        loginAction.clickAlpsLogo()
        simulationAction.clickTabOptimization()
        simulationAction.clickTabPageSimulation()
        simulationAction.clickButtonIDNotHaveLiveUrl()
        simulationAction.verifyTopicInputBox() //verify input box 
        
    })

    it('AL-T1334: verify that we are able to see the relavance score in related kw section.', () => {
        loginAction.clickAlpsLogo()
        simulationAction.clickTabOptimization()
        simulationAction.clickTabPageSimulation()
        simulationAction.textPageOptimizationUrl(data.SimulationUrl)
        simulationAction.clickGoButton()
        simulationAction.enterRelatedKeyword(data.SimulationKeyword)
        simulationAction.clickFetchKeywordButton()
        cy.wait(9000)
        simulationAction.clickRelevanceScoreTitle()
        //verify the relevance Score Filter
        simulationAction.clickRelavanceScoreFilterAndVerifyScores()

    })


    it('AL-T1335: Verify the limit for selecting keywords for non-live flow', () => {
        loginAction.clickAlpsLogo()
        simulationAction.clickTabOptimization()
        simulationAction.clickTabPageSimulation()
        simulationAction.clickButtonIDNotHaveLiveUrl()
        simulationAction.clickTabKeywordSuggestion()
        simulationAction.enterRelatedKeyword(data.NonLiveKW)
        simulationAction.clickFetchKeywordButton()
        cy.wait(9000)
        simulationAction.clickRelatedCheckbox(data.maxCheckbox)
        simulationAction.clickSelectAllKeyword()

        //validation the notification message for selection more than 20 KW
        simulationAction.verifyCheckboxSelection(data.maxCheckbox)
        simulationAction.verifyLimitKeyword(data.RelatedKWLimit)
        
    })

    it('AL-T1338: verify the behaviour of the fetch keyword button in default status', () => {
        loginAction.clickAlpsLogo()
        simulationAction.clickTabOptimization()
        simulationAction.clickTabPageSimulation()
        simulationAction.textPageOptimizationUrl(data.SimulationUrl)
        simulationAction.clickGoButton()
        
        //verify Fetch Kw button in default state
        simulationAction.verifyFetchKwBtnDisable()
        
    })

    it('AL-T514:Verify the functionality of View Original Content option for the new editor', () => {  
        loginAction.clickAlpsLogo()
        loginAction.TxtBoxKeywordLandingPage(data.keyword)
        simulationAction.textPageOptimizationUrl(data.optimizationurl)
        simulationAction.clickGoButton()
        cy.wait(9000)
        kgaSerpAction.clickSerpPageSimulation()
        simulationAction.clicksiMulationMultiKeywordToggleButton()
        simulationAction.updateBodyContentInSim(data.TextToUpdateForContent)
        simulationAction.clickRunSimulationButton()

        // asserting the content 
        simulationAction.verifyViewOriginalContent()


    })
	
    
})
