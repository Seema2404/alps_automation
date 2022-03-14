import * as loginAction from '../../pages/commands/login'
import * as kgaAction from '../../pages/commands/kgahomepage'
import * as kgaSerpAction from '../../pages/commands/kgaserpage'
import * as simulationAction from '../../pages/commands/simulationPageCommands'
import * as projectAction from '../../pages/commands/projectflowcommands'
import * as mockAction from '../../pages/commands/mockApiCommands'


describe('As an ALPS user', () => {
    let data
    let alpsapiendpoints

    before(() => {
        // rename fixture HTML files
        cy.task('renameFile', { filename1: 'cypress\\HTMLFiles\\sample1.json', filename2: 'cypress\\fixtures\\sample1.html' })
        cy.task('renameFile', { filename1: 'cypress\\HTMLFiles\\Screenshot from 2022-01-12 19-53-10.json', filename2: 'cypress\\fixtures\\Screenshot from 2022-01-12 19-53-10.html' })
        cy.task('renameFile', { filename1: 'cypress\\HTMLFiles\\Screenshot.json', filename2: 'cypress\\fixtures\\Screenshot.html' })


        // Clear downloads folder
        cy.exec('del /q "cypress\\downloads\\*.*"', { log: true, failOnNonZeroExit: false })
        cy.exec('rm cypress/downloads/*', { log: true, failOnNonZeroExit: false })

        cy.loginUser()
        cy.fixture('userData').then((userData) => {
            data = userData
        })

        cy.fixture('apiEndPoints').then((apiEndPoints) => {
            alpsapiendpoints = apiEndPoints
        })
    })
    after(() => {
        cy.task('renameFile', { filename1: 'cypress\\fixtures\\sample1.html', filename2: 'cypress\\HTMLFiles\\sample1.json' })
        cy.task('renameFile', { filename1: 'cypress\\fixtures\\Screenshot from 2022-01-12 19-53-10.html', filename2: 'cypress\\HTMLFiles\\Screenshot from 2022-01-12 19-53-10.json' })
        cy.task('renameFile', { filename1: 'cypress\\fixtures\\Screenshot.html', filename2: 'cypress\\HTMLFiles\\Screenshot.json' })
    })
    beforeEach(() => {
        cy.restoreLocalStorage()
    })
    afterEach(() => {
        cy.saveLocalStorage()
    })

    // Test cases is failing due to following bug AL-5240
    it('AL-T361,AL-362:Verify if initiate request fails at URL-KW accordion section through Serp results page, error notification is displayed', () => {
        loginAction.clickAlpsLogo()

        mockAction.MockingApiForFailureCase(alpsapiendpoints.MethodPost,alpsapiendpoints.RefreshMultipleKeywordInitiateAPi)
        simulationAction.clickTabOptimization()
        simulationAction.clickTabPageSimulation()
        simulationAction.textPageOptimizationUrl(data.optimizationurl)
        simulationAction.clickGoButton()
        simulationAction.clickTabInputKeywordsInSimPage()
        simulationAction.txtAddKeywordSimPage(data.keyword)
        simulationAction.clickbuttonAddKeyword()
        cy.wait(2000)
        simulationAction.clicksubmitButton()
        

        // Asserting the notification message.
        simulationAction.dispNotificationMsgInitiateApiFails(data.NotificationMsgInitiateApiFails)

        
    })

// Test cases is failing due to following bug AL-5240
    it('AL-T363:Verify if initiate request fails at URL-KW accordion section on serp results page, error notification is displayed', () => {
        loginAction.clickAlpsLogo()
        loginAction.TxtBoxKeywordLandingPage(data.keyword)
        simulationAction.textPageOptimizationUrl(data.optimizationurl)
        simulationAction.clickGoButton()
        mockAction.MockingApiForFailureCase(alpsapiendpoints.MethodPost,alpsapiendpoints.RefreshKeywordInitiateApi)
        kgaSerpAction.clickSerpPageMultikeyWordToggleButton()
        kgaSerpAction.txtSerpKWBox(data.keyword)
        kgaSerpAction.clickSubmit()

        //Notification for Initiate API failure
        simulationAction.dispNotificationMsgInitiateApiFails(data.NotificationMsgInitiateApiFails)  
    })

    // Test cases is failing due to following bug AL-5240
    it('AL-T364:Verify if initiate request fails at URL-KW accordion section on keyword analysis page, error notification is displayed', () => {
        loginAction.clickAlpsLogo()
        
        
        loginAction.clickAlpsLogo()
        loginAction.TxtBoxKeywordLandingPage(data.keyword)
        simulationAction.textPageOptimizationUrl(data.optimizationurl)
        simulationAction.clickGoButton()
        kgaAction.clickKgaButton()
        kgaAction.clickKgaAccordion()
        mockAction.MockingApiForFailureCase(alpsapiendpoints.MethodPost,alpsapiendpoints.RefreshKeywordInitiateApi)
        kgaAction.clickKgaSubmit()
        

        //Notification for Initiate API failure
        simulationAction.dispNotificationMsgInitiateApiFails(data.NotificationMsgInitiateApiFails)
        
    })


    // Test cases is failing due to following bug AL-5240
    it('AL-T365:Verify if initiate request fails at URL-KW accordion section through Serp results page, error notification is displayed', () => {
        loginAction.clickAlpsLogo()
        mockAction.MockingApiForFailureCase(alpsapiendpoints.MethodPost,alpsapiendpoints.RefreshKeywordInitiateApi)
        
        simulationAction.clickTabOptimization()
        simulationAction.clickTabPageSimulation()
        simulationAction.textPageOptimizationUrl(data.optimizationurl)
        simulationAction.clickGoButton()

        //Notification for Initiate API failure
        simulationAction.dispNotificationMsgInitiateApiFails(data.TrackRequestAPIfailNotification) 

    })

    // Test cases is failing due to following bug AL-5240
    it('AL-T387:Verify that floating error notification is displayed if track-request API fails on Page Simulation homepage', () => {
        loginAction.clickAlpsLogo()
        
        simulationAction.clickTabOptimization()
        simulationAction.clickTabPageSimulation()
        simulationAction.textPageOptimizationUrl(data.optimizationurl)
        simulationAction.clickGoButton()
        simulationAction.clickTabInputKeywordsInSimPage()
        simulationAction.txtAddKeywordSimPage(data.keyword)
        simulationAction.clickbuttonAddKeyword()
        mockAction.MockingApiForFailureCase(alpsapiendpoints.MethodPost,alpsapiendpoints.RefreshMultipleKeywordTrackApi)
        cy.wait(2000)
        simulationAction.clicksubmitButton()
        

        // Asserting the notification message.
        simulationAction.dispNotificationMsgInitiateApiFails(data.TrackRequestAPIfailNotification)

        
    })

    // Test cases is failing due to following bug AL-5240
    it('AL-T399:Verify that floating error notification is displayed if run-scenario-overall API fails on Run Simulation page', () => {
        loginAction.clickAlpsLogo()
        
        simulationAction.clickTabOptimization()
        simulationAction.clickTabPageSimulation()
        simulationAction.textPageOptimizationUrl(data.optimizationurl)
        simulationAction.clickGoButton()
        simulationAction.clickTabInputKeywordsInSimPage()
        simulationAction.txtAddKeywordSimPage(data.keyword)
        simulationAction.clickbuttonAddKeyword()
        simulationAction.clicksubmitButton()
        cy.wait(2000)
        simulationAction.updateBodyContentInSim(data.TextToUpdateForContent)
        mockAction.MockingApiForFailureCase(alpsapiendpoints.MethodPost,alpsapiendpoints.RunScenarioOverall)
        cy.wait(2000)
        simulationAction.clickRunSimulationButton()
        
        // Asserting the notification message.
        simulationAction.dispNotificationRunSinarioApiFailure()

        
    })
    // Test cases is failing due to following bug AL-5240

    it('AL-T403: Verify that floating error notification is displayed if initiate-request API fails on Simulation page accordion (non-live)', () => {
        loginAction.clickAlpsLogo()
        simulationAction.clickTabOptimization()
        simulationAction.clickTabPageSimulation()
        simulationAction.clickButtonIDNotHaveLiveUrl()
        simulationAction.clickTabInputKeywordsInSimPage()
        simulationAction.txtAddKeywordSimPage(data.keyword)
        simulationAction.clickbuttonAddKeyword()
        mockAction.MockingApiForFailureCase(alpsapiendpoints.MethodPost,alpsapiendpoints.RefreshMultipleKeywordInitiateAPi)
        cy.wait(9000)
        simulationAction.clicksubmitButton()

        // Asserting the notification message.
        simulationAction.dispNotificationMsgInitiateApiFails(data.NonLiveInitiatefailNotifcation)

        
    })

    // Test cases is failing due to following bug AL-5240
    it('AL-T404: Verify that floating error notification is displayed if track-request API fails on Simulation page accordion (non-live)', () => {
        loginAction.clickAlpsLogo()
        simulationAction.clickTabOptimization()
        simulationAction.clickTabPageSimulation()
        simulationAction.clickButtonIDNotHaveLiveUrl()
        simulationAction.clickTabInputKeywordsInSimPage()
        simulationAction.txtAddKeywordSimPage(data.keyword)
        simulationAction.clickbuttonAddKeyword()
        const filepath='Screenshot from 2022-01-12 19-53-10.html'
        simulationAction.uploadeFileSimPageForNonLiveFlow(filepath)
        mockAction.MockingApiForFailureCase(alpsapiendpoints.MethodPost,alpsapiendpoints.RefreshMultipleKeywordTrackApi)
        cy.wait(9000)
        simulationAction.clicksubmitButton()

        // Asserting the notification message.
        simulationAction.dispNotificationMsgInitiateApiFails(data.NonLiveInitiatefailNotifcation)


        
    })

   
})



