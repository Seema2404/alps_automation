import { newcb } from "../page-selectors/NewCBpage"

export const validateNewCBPage=()=>{
    newcb.elements.NewContentBrief().should('be.visible')
}
export const validateAddKeyworddisabled=()=>{
    newcb.elements.AddkeywordBtn().should('be.disabled')
}
export const validate_GenerateBrief_Btn_isdisabled=()=>{
    newcb.elements.GenerateBriefBtn().should('be.disabled')
}
export const validate_briefcancelation=()=>{
    cy.go('back')
    cy.url().should('include', '/content-brief')
}
export const Addkeyword=(keyword)=>{
    typekeyword(keyword)
    newcb.elements.AddkeywordBtn().click()
}
const typekeyword=((keyword)=>{
    for (let index = 0; index < keyword.length; index++) {
        newcb.elements.AddKWField().type(keyword[index])
        newcb.elements.AddKWField().type(',')   
    }
})
export const removekeyword=()=>{
    newcb.elements.KWRemovebtn().eq(0).click()
}
export const validate_removeall_isclickable=()=>{
    newcb.elements.RemoveAllbtn().click()
}
export const validation_error_check=()=>{
    newcb.elements.KWvalidationtext().then((errormessage)=>{
        expect(errormessage.text()).contain('Unable to add keyword as the limit is 10 keyword. Please try again by reducing the keyword(s)')
    })
    newcb.elements.AddKWField().clear()
}
export const add100charKW=(keyword)=>{
    typekeyword(keyword)
}
export const validate_kwcharacterlength=()=>{
    newcb.elements.KWvalidationtext().then((message)=>{
        expect(message.text()).contain('Unable to add keyword character as the limit is 100 characters.')
    })
}