import * as iframe from 'cypress-iframe'

import * as prtKA from '../../pages/commands/prtKeywordExplorer'
import * as prtSOF from '../../pages/commands/prtShareOfVoice'
import * as prtTA from '../../pages/commands/PrtTopicalAuthority'
import { prtKeywordExplorer } from '../../pages/page-selectors/PrtKeywordExplorerPage'
import { prtShareOfVoice } from '../../pages/page-selectors/PrtShareOfVoicePage'
import { prtTopicalAuthority } from '../../pages/page-selectors/PrtTopicalAuthorityPage'
import * as loginAction from '../../pages/commands/login'

describe('As a PRT user', () => {
    let data

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
        loginAction.clickAlpsLogo()
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
    it('AL-T1080:Verify the Date filter for Keyword explorer report', () => {
        cy.wait(7000)
        prtKA.clickPlanningAndResearch()
        prtKA.clickKeywordExplorer()
        var todayDate = (new Date()).toString().split(' ').splice(1,1).join(' ')

        // date validation of latest month.
        prtKA.dispDateKWExplorer(todayDate)

    })

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

    it('Al-T1082: Verify the search box is working for Keyword explorer report', () => {
        cy.wait(7000)
        prtKA.clickPlanningAndResearch()
        prtKA.clickKeywordExplorer()
        prtKA.waitForIframeLoad()
        cy.enter(prtKeywordExplorer.elements.iFrame, prtKeywordExplorer.elements.iFrameUrl).then(getBody => {
            cy.wait(7000)
            prtKA.enterKeywordInSearchBoxIframeAndClick(data.searchKeyword)

            // validate search box result is working
            prtKA.validateSearchBoxResult(getBody, data.searchKeyword)
        })
    })

    it('AL-T1083: Verify top level filters for SOV overview report', () => {
        cy.wait(7000)
        prtSOF.clickPlanningAndResearch()
        prtSOF.clickShareOfVoice()

        // validate top level filters
        prtSOF.validateShareOfVoiceOverview(data.attr, data.attrValue)
        prtSOF.validateSearchEngineFilter()
        prtSOF.validateProductFilter()
        prtSOF.validateLocaleFilter()
        prtSOF.validateDeviceFilter()
    })

    it('AL-T1084:Verify Keyword Count and Search Volume is displayed for SOV overview report', () => {
        cy.wait(7000)
        prtSOF.clickPlanningAndResearch()
        prtSOF.clickShareOfVoice()
        prtSOF.waitForIframeLoad()
        prtSOF.validateSearchEngineLabel()
        cy.enter(prtShareOfVoice.elements.iFrame, prtShareOfVoice.elements.iFrameUrl).then(getBody => {
            cy.wait(7000)
            prtSOF.validateSearchVolumeSection(getBody)
            prtSOF.validateKeywordCountSection(getBody)
        })
    })

    // Test case is failing due to application is not giving proper date.
    it('AL-T1085:Verify the Date filter for SOV overview report', () => {
        cy.wait(7000)
        prtKA.clickPlanningAndResearch()
        prtSOF.clickShareOfVoice()
        var todayDate = (new Date()).toString().split(' ').splice(1,1).join(' ')

        // date validation of latest month.
        prtSOF.dispDateShareOfVoice(todayDate)

    })

    it('AL-T1086:Verify the table hader for SOV overview by domain', () => {
        cy.wait(7000)
        prtSOF.clickPlanningAndResearch()
        prtSOF.clickShareOfVoice()
        prtSOF.waitForIframeLoad()
        // verify table header elements share of voice
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

        // validate top level filters
        prtSOF.validateShareOfVoiceCategory(data.attr, data.attrValue)
        prtSOF.validateSearchEngineFilter()
        prtSOF.validateProductFilter()
        prtSOF.validateLocaleFilter()
        prtSOF.validateDeviceFilter()
        prtSOF.validateDomainFilter()
    })

    it('AL-T1088: Verify the search box is working for SOV overview report', () => {
        cy.wait(7000)
        prtSOF.clickPlanningAndResearch()
        prtSOF.clickShareOfVoice()
        prtSOF.waitForIframeLoad()

        cy.enter(prtShareOfVoice.elements.iFrame, prtShareOfVoice.elements.iFrameUrl).then(getBody => {
            cy.wait(7000)
            prtSOF.enterKeywordInSearchBoxIframeAndClick(data.searchKeyword)

            // validate search box result is working
            prtSOF.validateSearchBoxResult(getBody, data.searchKeyword)
        })
    })

    it('AL-T1089: Verify top level filters for SOV trends report', () => {
        cy.wait(7000)
        prtSOF.clickPlanningAndResearch()
        prtSOF.clickShareOfVoice()
        prtSOF.clickTrendsSOV()

        // validate top level filters in trends
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
        // verify table header elements share of voice
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

    it('AL-T1096:Verify the Date filter for SOV category report', () => {
        cy.wait(7000)
        prtSOF.clickPlanningAndResearch()
        prtSOF.clickShareOfVoice()
        prtSOF.clickToCategory()
        const recentMonth = new Date().toString().split(' ')
            .splice(1, 1)
            .join(' ')

        // validation of recent month.
        prtSOF.dispDateShareOfVoiceByCategory(recentMonth)
    })

    it('AL-T1097:Verify the Target Domain filter for SOV category report', () => {
        cy.wait(7000)
        prtSOF.clickPlanningAndResearch()
        prtSOF.clickShareOfVoice()
        prtSOF.clickToCategory()
        // verify Target Domain filter for SOV category
        prtSOF.validateTargetDomainFilter()
    })
    it('AL-T1104: Verify top level filter for Topical Authority domain report', () => {
        cy.wait(7000)
        prtTA.clickPlanningAndResearch()
        prtTA.clickTopicalAuthority()
        prtTA.clickDomainTab()

        // validate top level filters
        prtTA.validateSearchEngineFilter()
        prtTA.validateProductFilter()
        prtTA.validateLocaleFilter()
        prtTA.validateDomainFilter()
    })
    it('AL-T1099: Verify Keyword Count and Search Volume is displayed for Topical Authority category report', () => {
        cy.wait(7000)
        prtTA.clickPlanningAndResearch()
        prtTA.clickTopicalAuthority()
        // validate keyword count and search volume for Topical authority category
        cy.enter(prtShareOfVoice.elements.iFrame, prtShareOfVoice.elements.iFrameUrl).then(getBody => {
            prtSOF.validateSearchVolume(getBody)
            prtSOF.validateKeywordCount(getBody)
        })
    })
    it('AL-T1098: Verify top level filter for Topical Authority category report', () => {
        cy.wait(7000)
        prtTA.clickPlanningAndResearch()
        prtTA.clickTopicalAuthority()
        // validate top level filters
        prtTA.validateSearchEngineFilter()
        prtTA.validateProductFilter()
        prtTA.validateLocaleFilter()
    })

    it('AL-T1101: Verify the table header for Topical Authority category report', () => {
        cy.wait(7000)
        prtTA.clickPlanningAndResearch()
        prtTA.clickTopicalAuthority()
        cy.enter(prtShareOfVoice.elements.iFrame, prtShareOfVoice.elements.iFrameUrl).then(getBody => {
            // verify table header for Topical Authority
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

    it('AL-T1107: Verify the table hader for Topical Authority domain report', () => {
        cy.wait(7000)
        prtTA.clickPlanningAndResearch()
        prtTA.clickTopicalAuthority()
        prtTA.clickDomainTab()
        cy.enter(prtShareOfVoice.elements.iFrame, prtShareOfVoice.elements.iFrameUrl).then(getBody => {
            // verify table header for Topical Authority on domain report
            prtTA.validateTableHeaderCategory(getBody)
            prtTA.validateTableHeaderSubCategory(getBody)
            prtTA.validateTableHeaderDomainTopicalAuthority(getBody)
            prtTA.validateTableHeaderDomainHighestTopicalAuthority(getBody)
            prtTA.validateTableHeaderDomainUrl(getBody)
            prtTA.validateTableHeaderUrlRating20(getBody)
            prtTA.validateTableHeaderUrlRating20to40(getBody)
            prtTA.validateTableHeaderDomainUrlRating40(getBody)
            prtTA.validateTableHeaderUrlRatingNA(getBody)
            prtTA.validateTableHeaderDomainKeywordCount(getBody)
            prtTA.validateTableHeaderKwsOnPage1(getBody)
            prtTA.validateTableHeaderKwsOnPag2(getBody)
            prtTA.validateTableHeaderDomainKwsBeyondPage2(getBody)
        })
    })

    it('AL-T1102: Verify the default category for Topical Authority category report', () => {
        cy.wait(7000)
        prtTA.clickPlanningAndResearch()
        prtTA.clickTopicalAuthority()
        prtTA.waitForIframeLoad()

        cy.enter(prtTopicalAuthority.elements.iFrame, prtTopicalAuthority.elements.iFrameUrl).then(getBody => {
            cy.wait(7000)
            //validate default keyword category for the product
            prtTA.validateDefaultCategoryReport(getBody,data.product,data.defKwForCreditCard)
            
        })
    })

    it('AL-T1103: Verify the search box is working for Topical Authority category report', () => {
        cy.wait(7000)
        prtTA.clickPlanningAndResearch()
        prtTA.clickTopicalAuthority()
        prtTA.waitForIframeLoad()

        cy.enter(prtTopicalAuthority.elements.iFrame, prtTopicalAuthority.elements.iFrameUrl).then(getBody => {
            cy.wait(7000)
            prtTA.enterKeywordInSearchBoxIframeAndClick(data.searchKeyword)

            // validate search box result is working
            prtTA.validateSearchBoxResult(getBody, data.searchKeyword)
        })
    })
    it('AL-1109: Verify the search box is working for Topical Authority domain report', () => {
        cy.wait(7000)
        prtTA.clickPlanningAndResearch()
        prtTA.clickTopicalAuthority()
        prtTA.clickDomainTab()
        prtTA.waitForIframeLoad()
        cy.enter(prtTopicalAuthority.elements.iFrame, prtTopicalAuthority.elements.iFrameUrl).then(getBody => {
            cy.wait(7000)
            prtTA.enterKeywordInSearchBoxIframeDomain(data.searchTopicalDomain)

            // validate search box result is working
            prtTA.validateSearchBoxResult(getBody, data.searchTopicalDomain)
        })
    })

    it('AL-T1108: Verify the default target domain for Topical Authority domain report', () => {
        cy.wait(7000)
        prtTA.clickPlanningAndResearch()
        prtTA.clickTopicalAuthority()
        prtTA.clickDomainTab()
        prtTA.waitForIframeLoad()

        //verify default Target Domain for credit card
        prtTA.validateTargetDomainFilter(data.product,data.productDomain)
        prtTA.clickProductFreshworkCRM()
        prtTA.waitForIframeLoad()
        //verify default Target Domain for Freshwork CRM
        prtTA.validateTargetDomainFilter(data.product2,data.product2Domain)
    })

    it('AL-T1090:Verify Share of voice and Traffic trends is displayed for SOV trends report', () => {
        cy.wait(7000)
        loginAction.clickAlpsLogo()
        prtSOF.clickPlanningAndResearch()
        prtSOF.clickShareOfVoice()
        prtSOF.waitForIframeLoad()
        prtSOF.clickTrendsSOV()
        prtSOF.disptrendBreadcrumb()

        cy.enter(prtShareOfVoice.elements.iFrame, prtShareOfVoice.elements.iFrameUrl).then(getBody => {
            prtSOF.distrendGraph(getBody)
        })
    })

    it('AL-T1091:Verify the Target Domain filter for SOV category report', () => {
        cy.wait(7000)
        loginAction.clickAlpsLogo()
        prtSOF.clickPlanningAndResearch()
        prtSOF.clickShareOfVoice()
        prtSOF.waitForIframeLoad()
        prtSOF.clickToCategory()

        cy.enter(prtShareOfVoice.elements.iFrame, prtShareOfVoice.elements.iFrameUrl).then(getBody => {
            prtSOF.dispDomainFortargetSelected(data.sovProduct, data.sovDomain)
        })
    })

    // Test case is failing due to application is not giving proper date.
    it('AL-T1100:Verify the Date filter for Topical Authority category report', () => {
        cy.wait(7000)
        prtKA.clickPlanningAndResearch()
        prtTA.clickTopicalAuthority()
        var todayDate = (new Date()).toString().split(' ').splice(1,1).join(' ')

        // date validation of latest month.
        prtTA.dispDateTopicalAuthority(todayDate)

    })

    it('AL-T1106:Verify the Date filter for Topical Authority domain report', () => {
        cy.wait(7000)
        loginAction.clickAlpsLogo()
        prtTA.clickPlanningAndResearch()
        prtTA.clickTopicalAuthority()
        prtTA.clickDomainTab()
        const todayDate = new Date().toString().split(' ')
            .splice(1, 1)
            .join(' ')

        // date validation of latest month.

        prtTA.dispDateShareOfVoice(todayDate)
    })

    it('AL-T1093:Verify the search box is working for SOV category report', () => {
        cy.wait(7000)
        loginAction.clickAlpsLogo()
        prtSOF.clickPlanningAndResearch()
        prtSOF.clickShareOfVoice()
        prtSOF.waitForIframeLoad()
        prtSOF.clickToCategory()
        cy.enter(prtShareOfVoice.elements.iFrame, prtShareOfVoice.elements.iFrameUrl).then(getBody => {
            cy.wait(7000)
            prtSOF.enterKeywordInSearchBoxIframeAndClick(data.categorySearchKeyword)

            // validate search box result is working
            prtSOF.validateCategoryDataSearchBoxResult(getBody, data.categorySearchKeyword)
        
    })
    })
})
