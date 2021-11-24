export class CBHomepage{
    constructor (){
        this.elements = {
            cbtab: ()=>cy.get('#content-brief-url'),
            localeDropdown: () => cy.get('#home_keywordSearch_locale_dropdown'),
            topicfield:()=> cy.get('#home_keywordSearch_domain'),
            gobutton:()=> cy.get('#home_keywordSearch_submit_button'),
            validationmessage:()=> cy.get('.sc-jbKcbu.ebPgmJ'),
            searchtextbox:()=> cy.get('#searchBox'),
            briefnametext:()=> cy.get('p[class="sc-AqAhp bHmgHx"]')

        }
    }
}
export const cb=new CBHomepage();