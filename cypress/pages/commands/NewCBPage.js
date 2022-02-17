import { newcb } from "../page-selectors/NewCBpage"

export const validateNewCBPage=()=>{
    newcb.elements.NewContentBrief().should('be.visible')
}
export const validateAddKeyworddisabled=()=>{
    newcb.elements.AddkeywordBtn().should('be.disabled')
}
export const validate_GenerateBrief_Btn_isenabled=()=>{
    newcb.elements.GenerateBriefBtn().should('be.enabled')
}
export const validate_briefcancelation=()=>{
    cy.go('back')
    cy.url().should('include', '/content-brief')
}
export const click_inputKeywordtab=()=>{
    newcb.elements.InputKeywordtab().click()
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
export const Addemptyspaces=()=>{
    newcb.elements.AddKWField().type("  ")
    newcb.elements.AddkeywordBtn().click()
}
export const removekeyword=()=>{
    newcb.elements.KWRemovebtn().eq(0).click()
}
export const validate_removeall_KW=()=>{
    newcb.elements.RemoveAllbtn().click()
}
export const validate_showAll_dopdown=()=>{
    newcb.elements.ShowAllbtn().click()
    newcb.elements.ShowAllbtn().then(($el)=>{
        expect($el.text()).to.be.eq('Show Less')
    })
    newcb.elements.ShowAllbtn().click()
    newcb.elements.ShowAllbtn().then(($el)=>{
        expect($el.text()).to.be.eq('Show All')
    })
}
export const validation_error_check=(validationmessage)=>{
    newcb.elements.KWvalidationtext().then((errormessage)=>{
        expect(errormessage.text()).contain(validationmessage)
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
export const Clear_addkwfield=()=>{
    newcb.elements.AddKWField().clear()
}
export const Validate_repeat_KWvalidationtext=()=>{
    newcb.elements.KWvalidationtext().then((message)=>{
        expect(message.text()).contain('One or more keyword(s) is already present')
    })
}
export const Add_single_KW=(keyword)=>{
    for (let index = 0; index < keyword.length; index++) {
        newcb.elements.AddKWField().type(keyword[index])
        newcb.elements.AddkeywordBtn().click()     
    }  
}
export const Add_sggested_Keywords=()=>{
    newcb.elements.SuggestedKeywordtab().click()
    newcb.elements.SuggestedKeywordtable().scrollTo('bottom')
    newcb.elements.SuggestedKeywordscheckbox().then(($el)=>{
        for (let index = 0; index < $el.length; index++) {
            newcb.elements.SuggestedKeywordscheckbox().eq(index).click({force:true})
            if(index==21){
                break;
            }   
        }
    })
}

export const Validate_Notification_messsage=()=>{
    newcb.elements.SuggestedKeywordscheckbox().then(($el)=>{
        for (let index = 0; index < $el.length; index++) {
            newcb.elements.SuggestedKeywordscheckbox().eq(index).click({force:true})
            if(index==21){
                break;
            }   
        }
        newcb.elements.Notificationmessage().then((message)=>{
            expect(message).to.contain('Unable to add keyword. You can only add upto 20 keywords.')
        })
    })
}
export const Validate_SV_on_SelectedKW=()=>{
    newcb.elements.FirstSuggestedKW().click({force:true})
    newcb.elements.FirstKWSV().then(($el)=>{
        let KeywordSV=""
        KeywordSV=$el.text().trim()
        newcb.elements.SelectedKW().then(($el)=>{
            let selectedKeyword=""
            selectedKeyword=$el.text().trim()
            expect(selectedKeyword).to.contains(KeywordSV)
        })
    })
}
export const validate_thousandtolacfilter=()=>{
    newcb.elements.SVFilter().click()
    newcb.elements.ThousandtoLacFilter().click({force:true})
    newcb.elements.FilteredSV().then(($sv)=>{
        for (let index = 0; index < $sv.length; index++) {
            let ConvertedSV
            const arr=($sv.text()).split("K")
            ConvertedSV=parseFloat(arr[0])*1000
            if(ConvertedSV>=10001 && ConvertedSV<=100000){
                cy.log('in range')
            }
            else{
                expect(true).to.be.false
            }
        }
    })
    newcb.elements.ThousandtoLacFilter().click({force:true})
}
export const validate_topicasfirstKW=(topic)=>{
   newcb.elements.defaultselectedKW().then(($el)=>{
       expect($el.text()).to.contain(topic)
   })
}
export const validate_fivetosevenfilter=()=>{
    newcb.elements.RelevanceScoreFilter().click()
    newcb.elements.fivetosevenrelevancescore().click({force:true})
    newcb.elements.FilteredRelevancescore().then(($rs)=>{
        let relevancescore
        for (let index = 0; index < $rs.length; index++) {
             relevancescore=parseFloat(($rs.text()).trim()) 
             if(relevancescore>=0.5 && relevancescore<=0.7){
                 cy.log('in range')
             } 
             else{
                expect(true).to.be.false
             }  
        }
    })
    newcb.elements.fivetosevenrelevancescore().click({force:true})
}
export const search_kw_onsuggestedtab=()=>{
    newcb.elements.SuggestedKWsearchbar().type('medical insurance')
    newcb.elements.SuggestedKWnames().each(($el)=>{
        let searchedele
           searchedele=($el.text()).trim()
           cy.log(searchedele)
            expect(searchedele).to.contain('medical insurance')    
    })
};
export const clear_search_filter=()=>{
    newcb.elements.SuggestedKWsearchbar().clear()
}
export const generate_content_brief=()=>{
    newcb.elements.GenerateBriefBtn().click()
    newcb.elements.PopupViewBtn().should('be.visible').click()
    cy.url().should('include', '/content-brief-view')
}
export const validate_Keyword_sorting=()=>{
    let flag=false
    const arr=[]
    const sortedele=[]
    newcb.elements.Keywordsortingbtn().click({force:true})
    newcb.elements.suggestedkwstext().each(($ele)=>{
        let eletext=$ele.text().trim()
        sortedele.push(eletext)
        arr.push(eletext)
    })
    .then(()=>{
        if(sortedele.length === arr.length && sortedele.every((value, index) => value === arr[index])){
            flag=true;
            expect(flag).to.be.true
    }
    })   
}
export const validate_SearchVolume_sorting=()=>{
    let flag=false;
    const sortedrelvancescore=[]
    const arr2=[]
    newcb.elements.Searchvolumesortingbtn().click({force:true})
    newcb.elements.SuggestedkeywordSearchvolumes().then(($ele)=>{
        for (let i = 0; i< $ele.length; i++) {
          const a=$ele[i].textContent.trim().split("K")
            sortedrelvancescore.push(a[0]) 
            arr2.push(a[0])
        }
    }).then(()=>{
        if(sortedrelvancescore.length === arr2.length &&  sortedrelvancescore.every((value,index)=> value === arr2[index]))
        {
            flag=true;
            expect(flag).to.be.true;
        }
    })
}

export const validate_relevancescore_sorting=()=>{
    newcb.elements.RelevanceScoresortingbtn().click({force:true})
    newcb.elements.SuggestedKeywordRelevance()
}