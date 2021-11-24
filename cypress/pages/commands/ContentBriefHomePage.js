import { cb } from "../page-selectors/CBHomepage"

// import cb from '../page-selectors/CBHomepage'
export const selectcontentbrief = ()=>{
    cb.elements.cbtab().click({force:true}) 
}

export const Enterbrieftopic = (brieftopic)=>{
    cb.elements.topicfield().clear().type(brieftopic)
}
export const selectLocale = (locale) => {
    cb.elements.localeDropdown().click()
    cy.get('div').contains(locale).click()
    
}
 export const clickgobutton = () =>{
     cb.elements.gobutton().click()
 }
 export const gopreviouspage=()=>{
     cy.go('back')
 }
 export const validate_topicvalidation_message=()=>{
     cb.elements.validationmessage().then((message)=>{
         expect(message.text()).to.equal('Unable to add character as the limit is 50 characters.')
     })
     cb.elements.gobutton().should('be.disabled')
 }
 export const validate_Search_Brief_byname=(briefname)=>{
     cy.log(briefname)
     cb.elements.searchtextbox().type(briefname)
     cy.wait(4000)
     cb.elements.briefnametext().then((name)=>{
        expect(name.text()).to.contain(briefname)
     })
     cb.elements.searchtextbox().clear()
 }
 export const validate_Search_bytopic=(topicname)=>{
    cb.elements.searchtextbox().type(briefname)
    
 }
