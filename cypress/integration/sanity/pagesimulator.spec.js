import * as loginAction from '../../pages/commands/login'
import * as kgaAction from '../../pages/commands/kgahomepage'
import * as kgaSerpAction from '../../pages/commands/kgaserpage'
import * as simulationAction from '../../pages/commands/simulationPageCommands'

describe('As an ALPS user', () => {
    let data

    before(() => {
        // cy.visitWithBaseAuth('')
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
    it('AL-T13:Verify the landing on page simulator Page',()=>{
        // loginAction.clickAlpsLogo()
        simulationAction.clickTabOptimization()
        simulationAction.clickTabPageSimulation()

        // Assertion for validating the landing page of page simulation
        simulationAction.disphHadingSimulationHistory()


    })

    it('AL-T17:Verify the bottom section of page simulator',()=>{
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

    it ('AL-T18 : Verify user should able to enter Live URL',()=> {

        loginAction.clickAlpsLogo()
        simulationAction.clickTabOptimization()
        simulationAction.clickTabPageSimulation()
        simulationAction.textPageOptimizationUrl(data.optimizationurl)
        simulationAction.clickGoButton()

        // Assertion validation 

        simulationAction.dispSimpage(data.optimizationurl)
        
    })

    it('AL-T20 : Verify when user enter a Valid URL',()=> {

        loginAction.clickAlpsLogo()
        simulationAction.clickTabOptimization()
        simulationAction.clickTabPageSimulation()
        simulationAction.textPageOptimizationUrl(data.InvalidaUrlFormat)
        simulationAction.clickGoButton()

        // Assertion validation 
        simulationAction.validateErrorNotificationForInvalidURL()

        
        
    })

    it('AL-T59 : Verify the default selected Sort field on page when user lands on page',()=> {

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

    it('AL-T62 : Verify the URL in the URL for simulation text field',()=> {

        loginAction.clickAlpsLogo()
        simulationAction.clickTabOptimization()
        simulationAction.clickTabPageSimulation()
        simulationAction.textPageOptimizationUrl(data.SimulationUrl)
        simulationAction.clickGoButton()
        
        // Assertion validation 
        simulationAction.dispSimulationForUrlHeading(data.SimulationUrl)

    })

    it('AL-T53 : Verify the behaviour of Filter button when user lands on simulation page for Technical Parameters',()=> {

        loginAction.clickAlpsLogo()
        simulationAction.clickTabOptimization()
        simulationAction.clickTabPageSimulation()
        simulationAction.textPageOptimizationUrl(data.SimulationUrl)
        simulationAction.clickGoButton()
        simulationAction.clickToggleButton()
        simulationAction.clickTabtechnical()

        // Assertion validation 
        // simulationAction.checkFilterHighInTechParameter()
        // simulationAction.checkFilterLowIntechParameter()
        simulationAction.dispHeadingContentOptimalUsageHtmlAttributes()

        // Assertion validation 
        cy.wait(1000)
        simulationAction.clickTabAuth()
        simulationAction.clickTabtechnical()
        simulationAction.uncheckFilterHighInTechParameter()
        simulationAction.uncheckFilterLowIntechParameter()
        simulationAction.dispNoneHeadingContentOptimalUsageHtmlAttributes()

    })

    it('AL-T63: Verify the URL for simulation text field when new URL is updated',()=>
    {
         loginAction.clickAlpsLogo()
        simulationAction.clickTabOptimization()
        simulationAction.clickTabPageSimulation()
        simulationAction.textPageOptimizationUrl(data.SimulationUrl)
        simulationAction.clickGoButton()
        kgaSerpAction.clickSerpPageSimulation()
        cy.wait(9000)
        simulationAction.enterAddKeywordUrl(data.newURL)
        cy.wait(9000)
        simulationAction.clicksubmitButton()

        // validating the updated URL which is added in sim page heading
        simulationAction.dispSimpage(data.simHeadingValidationURl)
        
    })


    it('AL-T66: Verify the keywords text fields',()=>
    {
        loginAction.clickAlpsLogo()
        simulationAction.clickTabOptimization()
        simulationAction.clickTabPageSimulation()
        simulationAction.textPageOptimizationUrl(data.SimulationUrl)
        simulationAction.clickGoButton()
        simulationAction.clicksubmitButton()
        
        // validating the updated URL which is added in sim page heading
        simulationAction.disperrorNotificationForEmptyKWSim(data.EmprtyKWSimNotification)
        
    })


   


    
})