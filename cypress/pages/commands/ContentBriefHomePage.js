import { clear } from "console"
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
     cb.elements.searchtextbox().clear().type(briefname)
     cy.wait(4000)
     cb.elements.briefnametext().then((name)=>{
        expect(name.text()).to.contain(briefname)
     })
     cb.elements.searchtextbox().clear()
 }
 export const validate_Search_bytopic=(topicname)=>{
    cb.elements.searchtextbox().clear().type(topicname)
    cy.wait(4000)
    cb.elements.topicnametext().then(($el)=>{
        for (let index = 0; index < $el.length; index++) {
            let actualtopic=$el[index].textContent.trim()
            expect(actualtopic).to.contain(topicname)
        }      
    })
    cb.elements.searchtextbox().clear()
    
 }
 export const validate_retrybtn_isenabled=()=>{
    cb.elements.searchtextbox().type("sunglasses brief")
    cy.wait(4000)
    cb.elements.retrybtn().should('be.enabled')
    cb.elements.searchtextbox().clear()
 }
 export const download_btn_isdisabled=()=>{
     cb.elements.searchtextbox().type("sunglasses brief")
     cy.wait(4000)
     cb.elements.downloadbtnlink().should('have.attr','disabled')
     cb.elements.searchtextbox().clear()
 }
export const searchtopic=(topicname)=>{
    cb.elements.searchtextbox().type(topicname)
}
 export const Validate_Search_Brief_byuser=(Username)=>{
     cb.elements.searchtextbox().clear().type(Username)
     cy.wait(4000)
     cb.elements.Usernametext().then(($el)=>{
         for (let index = 0; index < $el.length; index++) {
            let actualusername=$el[index].textContent.trim() 
            expect(actualusername).to.contain(Username)
         } 
     })
     cb.elements.searchtextbox().clear()
 }
 export const validate_pagination_functionality=()=>{
     let currentpage
     let nextpagenum
     cb.elements.pagenumbertext().then((currentpagenum)=>{
         currentpage=parseInt(currentpagenum.text())
         cy.readFile('cypress/fixtures/userData.json').then((data)=>{
             data.currentpagenum=currentpage
             cy.writeFile('cypress/fixtures/userData.json',JSON.stringify(data,null,'\t'))

         })    
     })
     cb.elements.paginationrightarrow().click()
         cy.wait(2000)  
         cb.elements.pagenumbertext().then((num)=>{
             nextpagenum=parseInt(num.text())
             cy.readFile('cypress/fixtures/userData.json').then((data)=>{
                 expect(data.currentpagenum+1).to.equal(nextpagenum)
             })
         })
 }
 export const Validate_Briefview_functionality=()=>{
    cb.elements.viewbutton().first().click()
    cy.url().should('include','/content-brief-view')
} 
// export const validate_brief_download=(briefname)=>{
//     cb.elements.searchtextbox().type(briefname)
//     cy.wait(5000)
//     cy.window().document().then(function (doc) {
//         doc.addEventListener('click', () => {
//           setTimeout(function () { doc.location.reload() }, 5000)
//         })
//         cb.elements.downloadbtn().first().click()
//       })
    
//     cb.elements.searchtextbox().clear()
//     cy.verifyDownload('Myntra.docx')
// }

