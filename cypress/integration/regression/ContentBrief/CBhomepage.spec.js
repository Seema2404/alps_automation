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
    it('verify that user is able to search a brief by name',()=>{
        cbaction.validate_Search_Brief_byname(cbdata.briefname)
    })
    it("verify that user is able to enter the topic name",()=>{
        cbaction.Enterbrieftopic(cbdata.topic)
        cbaction.clickgobutton()
        cbaction.gopreviouspage()
    })
    after (()=>{
        cy.logout()
        cy.clearCookies()
    })
    
})