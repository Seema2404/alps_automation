import * as loginAction from '../../pages/commands/login'
import * as kgaAction from '../../pages/commands/kgahomepage'
import * as kgaSerpAction from '../../pages/commands/kgaserpage'
import * as simulationAction from '../../pages/commands/simulationPageCommands'

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

    it('AL-T20 : Verify when user enter a Valid URL', () => {
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

    it('AL-T62 : Verify the URL in the URL for simulation text field', () => {
        loginAction.clickAlpsLogo()
        simulationAction.clickTabOptimization()
        simulationAction.clickTabPageSimulation()
        simulationAction.textPageOptimizationUrl(data.SimulationUrl)
        simulationAction.clickGoButton()

        // Assertion validation
        simulationAction.dispSimulationForUrlHeading(data.SimulationUrl)
    })

    it('AL-T63: Verify the URL for simulation text field when new URL is updated', () => {
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

        // validating the updated URL which is added in sim page heading
        simulationAction.disperrorNotificationForEmptyKWSim(data.EmprtyKWSimNotification)
    })

    it('AL-T67: Verify the keywords text fiels when keywords are added', () => {
        loginAction.clickAlpsLogo()
        simulationAction.clickTabOptimization()
        simulationAction.clickTabPageSimulation()
        simulationAction.textPageOptimizationUrl(data.optimizationurl)
        simulationAction.clickGoButton()
        simulationAction.clickTabInputKeywordsInSimPage()
        simulationAction.enterAddKeyword(data.MultipleKeywordsForSimPage)
        simulationAction.clickAddKeywordButton()

        // validating the updated URL which is added in sim page heading
        simulationAction.DispKWcountInSimPage()
    })

    it('AL-T94: Verify the URL in "URL for simulation" text field', () => {
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
        simulationAction.dispNotificationMessageForLocaleUpdate(data.EmprtyKWSimNotification)
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
        simulationAction.dispNotificationSelectingKWMoreThanALimit(data.NotificationForProjectKWSelection)
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
        simulationAction.disperrorNotificationForEmptyKWSim(data.EmprtyKWSimNotification)
    })
	




})
