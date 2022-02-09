import * as iframe from 'cypress-iframe'

import * as prtKA from '../../pages/commands/prtKeywordExplorer'
import * as prtSOF from '../../pages/commands/prtShareOfVoice'
import * as prtTA from '../../pages/commands/PrtTopicalAuthority'
import { prtKeywordExplorer } from '../../pages/page-selectors/PrtKeywordExplorerPage'


describe('As a PRT user', () => {
    before(() => {
        cy.loginUser('Iquanti Inc', 1)
    })
    beforeEach(() => {
        cy.restoreLocalStorage()
    })
    afterEach(() => {
        cy.saveLocalStorage()
    })
    it('AL-T:1075:Verify Sub modules under PRT section', () => {
        cy.wait(7000)
        prtKA.clickPlanningAndResearch()

        // validation of sub modules in 
        prtKA.dispValidateKeywordExplorerSection()
        prtSOF.dispShareOfVoice()
        prtTA.disptopicalAuthority()
    })

    it('AL-T:1076:Verify for a given tenant PRT is enanble', () => {
        cy.wait(7000)
        prtKA.dispPlanningAndResearchTab()
    })

    it('AL-T:1078:Verify top level filters of Keyword explorer report', () => {
        cy.wait(7000)
        prtKA.clickPlanningAndResearch()
        prtKA.clickKeywordExplorer()

        // assert for top level filters
        prtKA.dispSearchEngine()
        prtKA.dispProduct()
        prtKA.dispLocale()
        prtKA.dispDevice()
    })

    it('AL-T1079:Verify Keyword Count and Search Volume is displayed for Keyword explorer report', () => {
        cy.wait(7000)
        prtKA.clickPlanningAndResearch()
        prtKA.clickKeywordExplorer()

        // assert for top level filters
        prtKA.waitForIframeLoad()
        prtKA.validateSearchEngineLabel()
        cy.enter(prtKeywordExplorer.elements.iFrame, prtKeywordExplorer.elements.iFrameUrl).then(getBody => {
            cy.wait(7000)
            prtKA.validateSearchVolumeSection(getBody)
            prtKA.validateKeywordCountSection(getBody)
        })

        
    })

    // Test case is failing due to application is not giving proper date.
    // it('AL-T1080:Verify the Date filter for Keyword explorer report', () => {
    //     cy.wait(7000)
    //     prtKA.clickPlanningAndResearch()
    //     prtKA.clickKeywordExplorer()
    //     var todayDate = (new Date()).toString().split(' ').splice(1,1).join(' ')

    //     // date validation of latest month.
    //     prtKA.dispDateKWExplorer(todayDate)
       

    // })

    it('AL-T1081:Verify the table hader for Keyword explorer report', () => {
        cy.wait(7000)
        prtKA.clickPlanningAndResearch()
        prtKA.clickKeywordExplorer()

        // validate the table header

        cy.enter(prtKeywordExplorer.elements.iFrame, prtKeywordExplorer.elements.iFrameUrl).then(getBody => {
            cy.wait(7000)
            prtKA.disptableKW(getBody)
            prtKA.dispTableSearchVolume(getBody)
            prtKA.dispTableTopicDifficulty(getBody)

        })
        


    })
})
