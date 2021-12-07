import * as loginAction from '../../../pages/commands/login'
import * as kgaAction from '../../../pages/commands/kgahomepage'
import * as kgaSerpAction from '../../../pages/commands/kgaserpage'
import * as simulationAction from '../../../pages/commands/simulationPageCommands'

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
    it('I should land on proper homepage', () => {
        loginAction.validateHomepage()
    })

    it('keyword max limit error validation',()=>{

        kgaAction.selectLocale(data.locale)
        kgaAction.enterKeyword(data.keyword)
        kgaAction.enterURL(data.url)
        kgaAction.clickGo()
        kgaSerpAction.clickSerpPageSimulation()
        simulationAction.enterAddKeyword(data.mulipleKeywords1)
        simulationAction.clickAddKeywordButton()
        simulationAction.enterAddKeyword(data.addionalKeyword)
        simulationAction.clickAddKeywordButton()
        // Assertion validation
        simulationAction.validatingKeywordMaxLimitErrorMessage()


    }) 

    it('Validate live and non live journey switch warning message',() =>
    {
        simulationAction.clickTabOptimization()
        simulationAction.clickTabPageSimulation()
        simulationAction.textPageOptimizationUrl(data.optimizationurl)
        simulationAction.clickGoButton()
        simulationAction.clickRadioIDoNotHaveLiveUrl()

        // Assertion validation
        simulationAction.validatenonLiveFlowMessage()
        simulationAction.clickRadiordbIHaveLiveUrl()
        simulationAction.validateLiveFlowMessage()
    })


    it('validate default keyword simulation page',() =>
    {

        kgaAction.selectLocale(data.locale)
        kgaAction.enterKeyword(data.keyword)
        kgaAction.enterURL(data.url)
        kgaAction.clickGo()
        kgaSerpAction.clickSerpPageSimulation()
        
        // Validating the default keyword in sim page
        simulationAction.dispKeywordTextIdentifier(data.keyword)
    })


    it('Validate notification message for score and other section for empty KW',() =>
    {
        simulationAction.clickTabOptimization()
        simulationAction.clickTabPageSimulation()
        simulationAction.textPageOptimizationUrl(data.optimizationurl)
        simulationAction.clickGoButton()
        simulationAction.clickSimulationForUrl()

        // Validating the assertion message for empty score and other sections
        simulationAction.displblViewEmptyTrafficRankNotification(data.NotificationMessageForEmptyKWInSimPage)
        simulationAction.displblViewKWLevelImpactNotification(data.NotificationMessageForEmptyKWInSimPage)
        simulationAction.displblViewContentNotification(data.NotificationMessageForEmptyKWInSimPage)
        simulationAction.displblViewAuthorityNotification(data.NotificationMessageForEmptyKWInSimPage)
        simulationAction.displblViewTechNotification(data.NotificationMessageForEmptyKWInSimPage)
       
    })

    it('test verify simulation page heading',()=>
    {
        kgaAction.selectLocale(data.locale)
        kgaAction.enterKeyword(data.keyword)
        kgaAction.enterURL(data.simHeadingValidationURl)
        kgaAction.clickGo()
        kgaSerpAction.clickSerpPageSimulation()

        // Assertion on page heading in Simulation
        simulationAction.dispSimulationForUrlHeading(data.simHeadingValidationURl)
        
    })

    it('validate error msg of empty field add',()=>
    {
        kgaAction.selectLocale(data.locale)
        kgaAction.enterKeyword(data.keyword)
        kgaAction.enterURL(data.simHeadingValidationURl)
        kgaAction.clickGo()
        kgaSerpAction.clickSerpPageSimulation()
        simulationAction.clickAddKeywordButton()

        // Assertion on page heading in Simulation
        simulationAction.validatingKeywordMaxLimitErrorMessage()
        
    })

    it('verify remove button is displayed for newly added keyword',()=>
    {
        kgaAction.selectLocale(data.locale)
        kgaAction.enterKeyword(data.keyword)
        kgaAction.enterURL(data.simHeadingValidationURl)
        kgaAction.clickGo()
        kgaSerpAction.clickSerpPageSimulation()
        simulationAction.enterAddKeyword(data.mulipleKeywords1)
        simulationAction.clickAddKeywordButton()

        // Assertion for remove kw enablement
        simulationAction.validatingremoveAll()
        
    })

    it('verify remove button behaviour of newly added keyword',()=>
    {
        kgaAction.selectLocale(data.locale)
        kgaAction.enterKeyword(data.keyword)
        kgaAction.enterURL(data.simHeadingValidationURl)
        kgaAction.clickGo()
        kgaSerpAction.clickSerpPageSimulation()
        simulationAction.enterAddKeyword(data.mulipleKeywords1)
        simulationAction.clickAddKeywordButton()

        // validate the count of KW
        simulationAction.validateKWCount()

        // Assertion for remove kw enablement
        simulationAction.clickRemoveAll()

        // validating the count of KW
        simulationAction.validateKWCountAfterRemoveAll()
        
    })
    

    it('verify submit enabled by default',()=>
    {
        kgaAction.selectLocale(data.locale)
        kgaAction.enterKeyword(data.keyword)
        kgaAction.enterURL(data.simHeadingValidationURl)
        kgaAction.clickGo()
        kgaSerpAction.clickSerpPageSimulation()
        
        // Submit button enabled by default
        simulationAction.validateSubmitButtonEnabledByDefault()
        
    })

    

    it('verify run simulation enabled by default',()=>
    {
        kgaAction.selectLocale(data.locale)
        kgaAction.enterKeyword(data.keyword)
        kgaAction.enterURL(data.simHeadingValidationURl)
        kgaAction.clickGo()
        kgaSerpAction.clickSerpPageSimulation()
        simulationAction.clickSimulationForUrl()

        
        // Simulation button enabled by default
        simulationAction.validaterunSimulationButtonEnabledByDefault()
        
    })


    it('verify behaviour of submit button loader',()=>
    {
        kgaAction.selectLocale(data.locale)
        kgaAction.enterKeyword(data.keyword)
        kgaAction.enterURL(data.simHeadingValidationURl)
        kgaAction.clickGo()
        kgaSerpAction.clickSerpPageSimulation()
        simulationAction.clicksubmitButton()
        
        // validate Loader Icon
        simulationAction.validateLoaderIcon()
        
    })


    it('verify when URL Kw is changed',()=>
    {
        kgaAction.selectLocale(data.locale)
        kgaAction.enterKeyword(data.keyword)
        kgaAction.enterURL(data.simHeadingValidationURl)
        kgaAction.clickGo()
        kgaSerpAction.clickSerpPageSimulation()
        cy.wait(9000)
        simulationAction.enterAddKeywordUrl(data.newURL)
        cy.wait(9000)
        simulationAction.clicksubmitButton()

        // validating the updated URL which is added in sim page heading
        simulationAction.dispSimpage(data.simHeadingValidationURl)
        
    })


    it('verify behaviour of run simulation without any change in sim page',()=>
    {
        kgaAction.selectLocale(data.locale)
        kgaAction.enterKeyword(data.keyword)
        kgaAction.enterURL(data.simHeadingValidationURl)
        kgaAction.clickGo()
        kgaSerpAction.clickSerpPageSimulation()
        simulationAction.clicksubmitButton()
        simulationAction.clickRunSimulationButton()

        // Validating the error message for sim with out changes

        simulationAction.validateNotificationForSimulationWithOutAnyCHanges()
        
        
        
    })


    it('verify behaviour of simulation in expand mode',()=>
    {
        kgaAction.selectLocale(data.locale)
        kgaAction.enterKeyword(data.keyword)
        kgaAction.enterURL(data.simHeadingValidationURl)
        kgaAction.clickGo()
        kgaSerpAction.clickSerpPageSimulation()
        simulationAction.clicksubmitButton()
        simulationAction.clickZoomPage()

        // Assert validation
        simulationAction.validateZoomViewContentScore()
        simulationAction.validateZoomViewAuthorityScore()
        simulationAction.validateZoomViewTechScore()
        simulationAction.validateZoomContentUrl()
        simulationAction.validateZoomContentTitle()
        simulationAction.validateZoomContentMetaDescription()
        simulationAction.validateZoomContentH1()
        simulationAction.validateZoomContentH2()
        simulationAction.validateZoomContentBodyContent()
        simulationAction.validateZoomContentTitleScore()
        
        
        
    })

    it.only('verify content scores in zoom mode',() =>
    {
        kgaAction.selectLocale(data.locale)
        kgaAction.enterKeyword(data.keyword)
        kgaAction.enterURL(data.simHeadingValidationURl)
        kgaAction.clickGo()
        kgaSerpAction.clickSerpPageSimulation()
        simulationAction.clicksubmitButton()
        simulationAction.clickZoomPage()

    })


})
    
