import * as NewCBaction from '../../../pages/commands/NewCBPage'
import * as cbaction from '../../../pages/commands/ContentBriefHomePage'
describe('Verfiy functionality at New Content Brief Page',()=>{
    let newcbdata;
    before(()=>{
        cy.loginUser()
        cy.fixture('userData').then((userdata) => {
            newcbdata=userdata;
        })
    })
    beforeEach(() => {
        cy.restoreLocalStorage()
    })
    afterEach(() => {
        cy.saveLocalStorage()
    })
    after(()=>{
        cy.logout()
        cy.clearCookies()
    })
    it('verfiy user is redirected to the New Content Brief Page after submiting the topic',()=>{
        cbaction.selectcontentbrief()
        cbaction.selectLocale(newcbdata.locale)
        cbaction.Enterbrieftopic(newcbdata.topic)
        cbaction.clickgobutton()
        NewCBaction.validateNewCBPage()
    })
    it('verify AddKeyword button is disabled when no keywords are added',()=>{
        NewCBaction.validateAddKeyworddisabled()
    })
    it('verify Generate Content Brief button is disabled when no keyword is added',()=>{
        NewCBaction.validate_GenerateBrief_Btn_isdisabled()
    })
    it('verify user is able to cancel the brief new content brief page',()=>{
        NewCBaction.validate_briefcancelation()
    })
    it('verify user is able to add keywords on New Content Brief page',()=>{
        cbaction.Enterbrieftopic(newcbdata.topic)
        cbaction.clickgobutton()
        NewCBaction.Addkeyword(['Credit card','test1','test2','test4'])
    })
    it('verify that user is bale to remove the Keyword using the X button',()=>{
        NewCBaction.removekeyword()
    })
    it('Verify user is able to remove all keywords using the RemoveAll Button',()=>{
        NewCBaction.validate_removeall_isclickable()
    })
    it('verify validation is displayed when user adds more than 10 keywords',()=>{
        NewCBaction.Addkeyword(['Credit card','test1','test2','test4','test5','test6','test7','test8','test9','test10','test1451'])
        NewCBaction.validation_error_check()
    })
    it('verify validation is displayed when user adds a keyword of more than 100 charcters',()=>{
        NewCBaction.add100charKW(['Finance companies charging low interest rates on EMIs and offering Personal loans on low civil scores'])
        NewCBaction.validate_kwcharacterlength()
    })
    

})