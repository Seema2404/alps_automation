export class CBHomepage{
    constructor (){
        this.elements = {
            cbtab: ()=>cy.get('#content-brief-url'),
            localeDropdown: () => cy.get('#home_keywordSearch_locale_dropdown'),
            topicfield:()=> cy.get('#home_keywordSearch_domain'),
            gobutton:()=> cy.get('#home_keywordSearch_submit_button'),
            validationmessage:()=> cy.get('div[id="home_keywordSearch_domain_inputError"]>div'),
            searchtextbox:()=> cy.get('#searchBox'),
            briefnametext:()=> cy.get('div[id="breadcrumb"] +div>div:nth-child(3)>div:nth-child(2)>div:nth-child(2)>div>div:nth-child(1) p'),
            Usernametext:()=> cy.get('div[id="breadcrumb"] +div>div:nth-child(3)>div:nth-child(2)>div:nth-child(2)>div>div:nth-child(2)+div'),
            topicnametext:()=> cy.get('div[id="breadcrumb"] +div>div:nth-child(3)>div:nth-child(2)>div:nth-child(2)>div>div:nth-child(2) p'),
            paginationrightarrow:()=> cy.get('#pagination-rightActivate-arrow'),
            pagenumbertext:()=> cy.get('div[id="pagination-leftDeactivate-arrow"]'),
            retrybtn:()=> cy.get('div[id*="index"]>button:nth-of-type(1)'),
            viewbutton:()=> cy.get('div[id*="index"]>button:nth-of-type(1)'),
            downloadbtnlink:()=> cy.get('div[class="fright download_right_container"]>a')
        }
    }
}
export const cb=new CBHomepage();