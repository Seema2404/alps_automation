import * as cbaction from '../../../pages/commands/ContentBriefHomePage'
import * as cbviewaction from '../../../pages/commands/CBViewpage'
describe("Content Brief View Page Test suite",()=>{
    let cbdata
    before(()=>{
        cy.loginUser()
        cy.fixture('userData').then((userData) => {
            cbdata = userData
        })
    })
    beforeEach(() => {
        cy.restoreLocalStorage()
    })
    afterEach(() => {
        cy.saveLocalStorage()
    })
    after (()=>{
        cy.logout()
        cy.clearCookies()
    })
    it('Verify user is redirected to Content Brief View Page',()=>{
        cbaction.selectcontentbrief()
        cbaction.searchtopic(cbdata.topic)
        cy.wait(4000)
        cbaction.Validate_Briefview_functionality()
        cbviewaction.Validate_sametopic_isdisplayed(cbdata.topic)   
    })
    it('Verify value for Avg Search volume is correct or not',()=>{
        cy.wait(5000)
        cbviewaction.Validate_AvgSearchVolume_data()
    })
    it('Verify value Avg Article Length is calculated correct',()=>{
        cbviewaction.Validate_AvgArticleLength()

    })
    it('Verify value for Avg Content score is calulated correct',()=>{
        cbviewaction.Validate_AvgContentScore()
    })
    it('Verify only 10 competitor urls are displayed on the competitor url tab',()=>{
        cbviewaction.verify_urlon_Competitortab()
    })
    it('verify all the competitor URL are not broken links',()=>{
        cbviewaction.validate_brokenlinks_onCompetitorURL()
    })
    it('Verify the Brief has atleast one headline',()=>{
        cbviewaction.validate_atleastoneHeadline_ispresent()
    })
    it('verify that count for the titles displayed is equal to 10',()=>{
        cbviewaction.validate_Title()
    })
    it('verify that meatdescription tab has atlest one Metadescription',()=>{
        cbviewaction.validate_metadescription()
    })
    it('verfiy brief name is not edited after user enters name and hits the cancel button',()=>{
        cbviewaction.validate_editname_functionality()
    })
    it('verify validation is displayed when an empty name is filed is empty',()=>{
        cbviewaction.validate_emptyfield_validation_msg()
    })
    it('verify correct name is saved after user edits the Content Brief name',()=>{
        cbviewaction.validate_correctname_issaved()
    })
})