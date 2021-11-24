export class NewCBHomepage{
    constructor(){
        this.elements={
            NewContentBrief: ()=> cy.get('#content-brief-new'),
            SelectedLocale: ()=> cy.get('div[class*="flag-icon"]+div'),
            AddkeywordBtn: ()=> cy.get('#add-keyword_button'),
            GenerateBriefBtn: ()=> cy.get('#submit-btn_button'),
            CancelBtn:()=> cy.get('#cancel_cb_button'),
            AddKWField:()=> cy.get('#keyword_input_keyword'),
            KWRemovebtn:()=>cy.get('.sc-bstyWg.kZYGSG'),
            RemoveAllbtn:()=>cy.get('button[class="sc-eqIVtm cZJNjX"] span'),
            KWvalidationtext:()=>cy.get('.sc-fhiYOA.cPgHQz')

        }
    }
}
export const  newcb =new NewCBHomepage();