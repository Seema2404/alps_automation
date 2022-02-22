import * as cbaction from '../../../pages/commands/ContentBriefHomePage'
describe('Content brief test',()=>{
    let cbdata;
    before(() => {
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
    it('verify go button is disabled when user adds topic more than 50 characters',()=>{
        cbaction.selectcontentbrief()
        cbaction.selectLocale(cbdata.locale)
        cbaction.Enterbrieftopic(cbdata.longtopic)
        cbaction.validate_topicvalidation_message()
    })
    it("verify that user is able to enter the topic name",()=>{
        cbaction.Enterbrieftopic(cbdata.topic)
        cbaction.clickgobutton()
        cbaction.gopreviouspage()
    })
    it('verify that user is able to search a brief by name',()=>{
        cbaction.validate_Search_Brief_byname(cbdata.briefname)
    })
    
    it('verify user is able to search brief with user created the brief',()=>{
        cbaction.Validate_Search_Brief_byuser(cbdata.Username)
    })
    it('verify that user is able to search the brief by topic',()=>{
        cbaction.validate_Search_bytopic(cbdata.topic)
    })
    // it('verfiy that user is able to download brief on the Content brief homepage',()=>{
    //     cbaction.validate_brief_download(cbdata.briefname)
    // })
    it('verify view Link is disabled for a failed brief',()=>{
        cbaction.validate_retrybtn_isenabled()
    })
    it('verify download button is disabled for a failed brief',()=>{
        cbaction.download_btn_isdisabled()
    })
    it('verify the pagination functionaity of Content brief listing table',()=>{
        cbaction.validate_pagination_functionality()
    })
        
    it('verify user is able to view the Content brief',()=>{
        cbaction.searchtopic(cbdata.topic)
        cy.wait(4000)
        cbaction.Validate_Briefview_functionality()

    })
})