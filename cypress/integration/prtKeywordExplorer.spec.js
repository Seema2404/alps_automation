import * as prtKA from '../pages/commands/prtKeywordExplorer'

describe('As a PRT user', () => {
    let prtData

    before(() => {
        cy.fixture('userData').then((userData) => {
            prtData = userData
        })
    })
    beforeEach(() => {
        cy.restoreLocalStorage()
    })
    afterEach(() => {
        cy.saveLocalStorage()
    })
    it('I should be able to verify search volume data in PRT report iframe', () => {
        prtKA.clickPlanningAndResearch()
        prtKA.clickKeywordExplorer()
        prtKA.waitForIframeLoad()
        prtKA.verifySearchVolume(prtData.searchVolume)
    })
})
