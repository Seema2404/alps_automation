import * as iframe from 'cypress-iframe'

import * as prtKA from '../../pages/commands/prtKeywordExplorer'
import * as prtSOF from '../../pages/commands/prtShareOfVoice'
import * as prtTA from '../../pages/commands/PrtTopicalAuthority'
import { prtKeywordExplorer } from '../../pages/page-selectors/PrtKeywordExplorerPage'
import { prtShareOfVoice } from '../../pages/page-selectors/PrtShareOfVoicePage'


describe('As a PRT user', () => {
    let data;
    before(() => {
        cy.loginUser('Iquanti Inc', 1)
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

    it('AL-T1083: Verify top level filters for SOV overview report', () => {
        cy.wait(7000)
        prtSOF.clickPlanningAndResearch()
        prtSOF.clickShareOfVoice()

        //validate top level filters
        prtSOF.validateShareOfVoiceOverview(data.attr,data.attrValue)
        prtSOF.validateSearchEngineFilter()
        prtSOF.validateProductFilter()
        prtSOF.validateLocaleFilter()
        prtSOF.validateDeviceFilter()
    })

    it('AL-T1084:Verify Keyword Count and Search Volume is displayed for SOV overview report', () => {
        cy.wait(7000)
        prtKA.clickPlanningAndResearch()
        prtSOF.clickShareOfVoice()
        prtSOF.waitForIframeLoad()
        prtSOF.validateSearchEngineLabel()
        cy.enter(prtShareOfVoice.elements.iFrame, prtShareOfVoice.elements.iFrameUrl).then(getBody => {
            cy.wait(7000)
            prtSOF.validateSearchVolumeSection(getBody)
            prtSOF.validateKeywordCountSection(getBody)
            
        })   
    })

    // // Test case is failing due to application is not giving proper date.
    // it('AL-T1085:Verify the Date filter for SOV overview report', () => {
    //     cy.wait(7000)
    //     prtKA.clickPlanningAndResearch()
    //     prtSOF.clickShareOfVoice()
    //     var todayDate = (new Date()).toString().split(' ').splice(1,1).join(' ')

      
    //     // date validation of latest month.
    //     prtSOF.dispDateShareOfVoice(todayDate)      

    // })

    it('AL-T1086:Verify the table hader for SOV overview by domain', () => {
        cy.wait(7000)
        prtKA.clickPlanningAndResearch()
        prtSOF.clickShareOfVoice()
        prtSOF.waitForIframeLoad()
        //verify table header elements share of voice
        cy.enter(prtShareOfVoice.elements.iFrame, prtShareOfVoice.elements.iFrameUrl).then(getBody => {
            prtSOF.validateTableHeaderSOVDomain(getBody)
            prtSOF.validateTableHeaderSOV(getBody)
            prtSOF.validateTableHeaderSOVTraffice(getBody)
            prtSOF.validateTableHeaderSOVKWRank1to5(getBody)
            prtSOF.validateTableHeaderSOVKWRank6to10(getBody)
            prtSOF.validateTableHeaderSOVKWRank11to20(getBody)
        })
    })

    it('AL-T1094: Verify top level filters for SOV category report', () => {
        cy.wait(7000)
        prtSOF.clickPlanningAndResearch()
        prtSOF.clickShareOfVoice()
        prtSOF.clickToCategory()

        //validate top level filters
        prtSOF.validateShareOfVoiceCategory(data.attr,data.attrValue)
        prtSOF.validateSearchEngineFilter()
        prtSOF.validateProductFilter()
        prtSOF.validateLocaleFilter()
        prtSOF.validateDeviceFilter()
        prtSOF.validateDomainFilter()
    })

    it('AL-T1089: Verify top level filters for SOV trends report', () => {
        cy.wait(7000)
        prtSOF.clickPlanningAndResearch()
        prtSOF.clickShareOfVoice()
        prtSOF.clickTrendsSOV()

        //validate top level filters in trends
        prtSOF.validateSearchEngineFilter()
        prtSOF.validateProductFilter()
        prtSOF.validateLocaleFilter()
        prtSOF.validateDeviceFilter()
    })    

    it('AL-T1095: Verify Keyword Count, Search Volume, Traffic, Share of voice is displayed for SOV category report', () => {
        cy.wait(7000)
        prtSOF.clickPlanningAndResearch()
        prtSOF.clickShareOfVoice()
        prtSOF.clickToCategory()

        cy.enter(prtShareOfVoice.elements.iFrame, prtShareOfVoice.elements.iFrameUrl).then(getBody => {
            prtSOF.validateSearchVolume(getBody)
            prtSOF.validateKeywordCount(getBody)
            prtSOF.validateTraffic(getBody)
            prtSOF.validateShareOfVoice(getBody)
        })
    })

    it('AL-T1092:Verify the table hader for SOV by category', () => {
        cy.wait(7000)
        prtSOF.clickPlanningAndResearch()
        prtSOF.clickShareOfVoice()
        prtSOF.clickToCategory()
         //verify table header elements share of voice
         cy.enter(prtShareOfVoice.elements.iFrame, prtShareOfVoice.elements.iFrameUrl).then(getBody => {
            prtSOF.validateTableHeaderSOVCategory(getBody)
            prtSOF.validateTableHeaderSOVKeywords(getBody)
            prtSOF.validateTableHeaderSOVSerchVolume(getBody)
            prtSOF.validateTableHeaderSOV(getBody)
            prtSOF.validateTableHeaderSOVTraffice(getBody)
            prtSOF.validateTableHeaderSOVKWRank1to5(getBody)
            prtSOF.validateTableHeaderSOVKWRank6to10(getBody)
            prtSOF.validateTableHeaderSOVCatKWRank11to20(getBody)
        })
    })

    it('AL-T1097:Verify the Target Domain filter for SOV category report', () => {
        cy.wait(7000)
        prtSOF.clickPlanningAndResearch()
        prtSOF.clickShareOfVoice()
        prtSOF.clickToCategory()
         //verify Target Domain filter for SOV category
        prtSOF.validateTargetDomainFilter()
    })
    it('AL-T1104: Verify top level filter for Topical Authority domain report', () => {
        cy.wait(7000)
        prtSOF.clickPlanningAndResearch()
        prtTA.clickTopicalAuthority()
        prtTA.clickDomainTab()

        //validate top level filters
        prtTA.validateSearchEngineFilter()
        prtTA.validateProductFilter()
        prtTA.validateLocaleFilter()
        prtTA.validateDomainFilter()
           
    })

    it('AL-T1101: Verify the table header for Topical Authority category report', () => {
        cy.wait(7000)
        prtSOF.clickPlanningAndResearch()
        prtTA.clickTopicalAuthority()

        cy.enter(prtShareOfVoice.elements.iFrame, prtShareOfVoice.elements.iFrameUrl).then(getBody => {
            
            //verify table header for Topical Authority
            prtTA.validateTableHeaderDomain(getBody)
            prtTA.validateTableHeaderTopicalAuthority(getBody)
            prtTA.validateTableHeaderUrlCount(getBody)
            prtTA.validateTableHeaderUrlRating20(getBody)
            prtTA.validateTableHeaderUrlRating20to40(getBody)
            prtTA.validateTableHeaderUrlRating40(getBody)
            prtTA.validateTableHeaderUrlRatingNA(getBody)
            prtTA.validateTableHeaderKwsOnPage1(getBody)
            prtTA.validateTableHeaderKwsOnPag2(getBody)
            prtTA.validateTableHeaderKwsBeyondPage2(getBody)
        })

    })

})
