class Viewpage{
    constructor(){
        this.elements={
            topic:()=>cy.get('#cb_topic_text'),
            KWSearchVolumes:()=> cy.get('span[id*="kw_tbl_row"]'),
            AvgSearchVolume:()=>cy.get('div[id="breadcrumb"] +div>div:nth-child(3)>div:nth-of-type(1)+p'),
            AvgArticleLength:()=>cy.get('div[id="breadcrumb"] +div>div:nth-child(3)>div:nth-of-type(3)+p'),
            AvgContentScore:()=>cy.get('div[id="breadcrumb"] +div>div:nth-child(3)>div:nth-of-type(5)+p'),
            CompetitorURLtab:()=>cy.get('#breadcrumb +div > div:nth-of-type(4) span:nth-child(2)'),
            Keywordstab:()=>cy.get('#breadcrumb +div > div:nth-of-type(4) span:nth-child(1)'),
            CmpUrlslengths:()=>cy.get(`label[id*="cp_length"]`),
            CmpUrlsContentscores:()=>cy.get(`span[id*="cp_row"]`),
            ModifyKeywordBtn:()=>cy.get('#modify-btn'),
            CompetitorURLs:()=>cy.get('div[id*="container_"]'),
            CompetitorURLslinks:()=>cy.get('div[id*="container_"] div[id*="undefined"]'),
            Headlines:()=>cy.get('div[id="breadcrumb"] +div>div:nth-child(5)>div:nth-child(2) p'),
            Headlinestab:()=>cy.get('#breadcrumb +div > div:nth-of-type(4) span:nth-child(5)'),
            Titlestab:()=>cy.get('#breadcrumb +div > div:nth-of-type(4) span:nth-child(6)'),
            Titles:()=>cy.get('div[id="breadcrumb"] +div>div:nth-child(5)>div:nth-child(2) p'),
            Metadescriptiontab:()=>cy.get('#breadcrumb +div > div:nth-of-type(4) span:nth-child(7)'),
            Metadescriptions:()=>cy.get('div[id="breadcrumb"] +div>div:nth-child(5)>div:nth-child(2) p'),
            Editnamebtn:()=>cy.get('#edit_name_button'),
            EditCBnamefield:()=>cy.get('#edit_input'),
            Editpopupcancelbtn:()=>cy.get('#cancel_modal_button'),
            Editpopupsavebtn:()=>cy.get('#save_modal_button'),
            CBnametext:()=>cy.get('#cb_name_text'),
            NamefieldValidationmsg:()=>cy.get('div[id="breadcrumb"]+div>div>div>div i+div'),
            BriefDownloadBtn:()=>cy.get('#download-btn_button'),
            GeneratedKWList:()=>cy.get('p[id*="keyword"]'),
            SelectedKWinModifiedpage:()=>cy.get('div[id*="cb_keyword_list"] label')
        }
    }
}
export const cbview= new Viewpage()