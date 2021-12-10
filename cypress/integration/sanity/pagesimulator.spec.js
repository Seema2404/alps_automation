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

    it.only('AL-T20 : Verify when user enter a Valid URL',()=> {

        loginAction.clickAlpsLogo()
        simulationAction.clickTabOptimization()
        simulationAction.clickTabPageSimulation()
        simulationAction.textPageOptimizationUrl(data.InvalidaUrlFormat)
        simulationAction.clickGoButton()

        // Assertion validation 
        simulationAction.validateErrorNotificationForInvalidURL()

        
        
    })

    
})