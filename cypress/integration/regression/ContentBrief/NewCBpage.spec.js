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
    it('verfiy user is redirected to the New Content Brief Page after submiting the topic',()=>{
        cbaction.selectcontentbrief()
        cbaction.selectLocale(newcbdata.locale)
        cbaction.Enterbrieftopic(newcbdata.topic)
        cbaction.clickgobutton()
        NewCBaction.validateNewCBPage()
    })
    it('validate topic enterd by the user is the 1st selectd keyword',()=>{
        NewCBaction.validate_topicasfirstKW(newcbdata.topic)
    })
    it('verify Generate Content Brief button is enabled',()=>{
        NewCBaction.validate_GenerateBrief_Btn_isenabled()
    })
    it('verify AddKeyword button is disabled when no keywords are added',()=>{
        NewCBaction.click_inputKeywordtab()
        NewCBaction.validateAddKeyworddisabled()
    })
    it('verify user is able to cancel the brief new content brief page',()=>{
        NewCBaction.validate_briefcancelation()
    })
    it('verify user is able to add keywords on New Content Brief page',()=>{
        cbaction.Enterbrieftopic(newcbdata.topic)
        cbaction.clickgobutton()
        NewCBaction.click_inputKeywordtab()
        NewCBaction.Addkeyword(['Credit card','test1','test2','test4'])
    })
    it('verify that user is able to remove the Keyword using the X button',()=>{
        NewCBaction.removekeyword()
    })
    it('Verify user is able to remove all keywords using the RemoveAll Button',()=>{
        NewCBaction.validate_removeall_KW()
    })
    it('Verify validation message is displayed when no keyword is added and user clicks on Add Button.',()=>{
        NewCBaction.Addemptyspaces()
        NewCBaction.validation_error_check(newcbdata.noKWvalidationtext)
    })
    it('verify validation is displayed when user adds more than 20 keywords',()=>{
        NewCBaction.Addkeyword(['Credit card','test1','test2','test4','test5','test6','test7','test8','test9','test10','test1451','test11','test12','test14','test15','test16','test17','test18','test19','test20','test1321'])
        NewCBaction.validation_error_check(newcbdata.morethan20kwvalidationtext)
    })
    it("Verify the functionality of showAll and Show Less button functionality on Selected keyword dropdown",()=>{
        NewCBaction.Addkeyword(['Credit card','test credit card1','test Credit card2','test credit card3','test credit card5','test credit card6','test credit card7','test credit card8','test credit card9','test credit card10'])
        NewCBaction.validate_showAll_dopdown()
    })
    it('verify validation is displayed when user adds a keyword of more than 100 charcters',()=>{
        NewCBaction.add100charKW(['Finance companies charging low interest rates on EMIs and offering Personal loans on low civil scores'])
        NewCBaction.validate_kwcharacterlength()
    })
    it('Verify validation message is displayed for a repeating Keyword on the Keyword field',()=>{
        NewCBaction.validate_removeall_KW()
        NewCBaction.Clear_addkwfield()
        NewCBaction.Add_single_KW(['Credit card','test1','test2','test4','Credit card'])
        NewCBaction.Validate_repeat_KWvalidationtext()
    })
    it('Verify user is able to add Keywords from the Suggested keywords tab',()=>{
        NewCBaction.validate_removeall_KW()
        NewCBaction.Add_sggested_Keywords()
    })
    it('Verify Notification is displayed when user adds more than 20 Keywords from the Suggested Keywords tab',()=>{
        NewCBaction.validate_removeall_KW()
        NewCBaction.Validate_Notification_messsage()
    })
    it('Verify Search volume is displayed on the selected Keyword is same as it is displayed on the Suggested keyword for the respective keyword',()=>{
        NewCBaction.validate_removeall_KW()
        NewCBaction.Validate_SV_on_SelectedKW()

    })
    it('Verify that user is able to apply thousandtolac search volume filter',()=>{
        NewCBaction.validate_removeall_KW()
        NewCBaction.validate_thousandtolacfilter()
    })
    // it('verify that user is able to apply 0.5-0.7 relevance score filter',()=>{
    //     NewCBaction.validate_fivetosevenfilter() 
    // })
    it ('verify the search functionality on suggested keyword tab',()=>{
        NewCBaction.search_kw_onsuggestedtab()
        NewCBaction.clear_search_filter()
    })
    it('verify user is able to sort the suggested keyword table by keywords',()=>{
        NewCBaction.validate_Keyword_sorting()
    })
    it('verify user is able to sort the suggested keyword table by Relevance score',()=>{
        NewCBaction.validate_SearchVolume_sorting()
    })
    it('validate user is able to generate a Content Brief and view the same brief',()=>{
        NewCBaction.Add_sggested_Keywords()
        NewCBaction.generate_content_brief()
    })
})