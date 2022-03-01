import { cbview } from "../page-selectors/CBViewpage"

export const Validate_sametopic_isdisplayed=(topicname)=>{
    cbview.elements.topic().then((ele)=>{
        expect(ele.text()).to.contain(topicname)
    })
}

export const Validate_AvgSearchVolume_data=()=>{
    let sum=0
    cbview.elements.AvgSearchVolume().then((ele)=>{
        let ConvertedSV
        const arr=(ele.text()).split("K")
        ConvertedSV=parseFloat(arr[0])*1000
        cbview.elements.KWSearchVolumes().each(($el,index,$list)=>{
            const arr1=($el.text()).split("K")
            sum= sum+(parseFloat(arr1[0])*1000)
            if(sum==ConvertedSV){
                expect(sum).to.equal(ConvertedSV)
                return cy.log('valid sum')
            }
        })
    })
}
export const Validate_AvgArticleLength=()=>{
    let lengthsum=0
    cbview.elements.CompetitorURLtab().click()
    cbview.elements.AvgArticleLength().then((ele)=>{
       let actualAvgarticlelength=0
        const newstr=(ele.text()).replace(",","")
        const AvgArticlelen=parseInt(newstr)
        cbview.elements.CmpUrlslengths().then(($el)=>{
            for (let index = 0; index < $el.length; index++) {
               let eletext=$el[index].textContent.trim()
               if(eletext==="0"){
                   lengthsum = lengthsum+ parseInt(eletext)
               }
               else{
                  let newstr1=eletext.replace(",","")
                  lengthsum= lengthsum+ parseInt(newstr1)
               }   
            }
            actualAvgarticlelength=Math.ceil(lengthsum/10)
            expect(AvgArticlelen).to.equal(actualAvgarticlelength)
        })
    })
}
 

 export const Validate_AvgContentScore=()=>{
     let scoresum=0
     let actualscoresum
    cbview.elements.AvgContentScore().then((ele)=>{
        const expectedscore=parseFloat(ele.text())
        cbview.elements.CmpUrlsContentscores().then(($el)=>{
            for (let index = 0; index < $el.length; index++) {
                let eletext = $el[index].textContent.trim()
                scoresum=scoresum+parseFloat(eletext)
                cy.log(scoresum)
            }
            actualscoresum = Math.round((scoresum/10) * 10) / 10
            expect(actualscoresum).to.equal(expectedscore)
        })
    })
}
export const Validate_KW_onModifyPage=()=>{
    let generatedarr=[]
    let selectedarr=[]
    cbview.elements.Keywordstab().click()
    cbview.elements.GeneratedKWList().then(($el)=>{
        generatedarr.push($el.text())
    })
    cbview.elements.ModifyKeywordBtn().click()
    cbview.elements.SelectedKWinModifiedpage().then(($el)=>{
        const arr1=$el.text().split("(")
        selectedarr.push(arr1[0])
    })
    expect(generatedarr).to.eql(selectedarr)

}
export const verify_urlon_Competitortab=()=>{
    cbview.elements.CompetitorURLs().should('have.length',10)
}
export const validate_brokenlinks_onCompetitorURL=()=>{
    cbview.elements.CompetitorURLslinks().then(($el)=>{
        for (let index = 0; index < $el.length; index++) {
            let URL=$el[index].textContent
            cy.request({
                method: 'GET',
                url: URL,
            }).then((res)=>{
                expect(res.status).to.eq(200)
            })
        }
       
    })
}
export const validate_atleastoneHeadline_ispresent=()=>{
    cbview.elements.Headlinestab().click()
    cbview.elements.Headlines().should('have.length.greaterThan',0)
}
export const validate_Title=()=>{
    cbview.elements.Titlestab().click()
    cbview.elements.Titles().should('have.length.greaterThan',0)
}
export const validate_metadescription=()=>{
    cbview.elements.Metadescriptiontab().click()
    cbview.elements.Metadescriptions().should('have.length.greaterThan',0)
}
export const validate_editname_functionality=()=>{
    let briefname=""
    let aftercancelbriefname=""
    cbview.elements.CBnametext().then(($el)=>{
         briefname =$el.text()
        return briefname
    })
    cbview.elements.Editnamebtn().click()
    cy.wait(2000)
    cbview.elements.EditCBnamefield().clear().type('TestAutomation updating the name!!')
    cbview.elements.Editpopupcancelbtn().click()
    cbview.elements.CBnametext().then(($el)=>{
        aftercancelbriefname =$el.text()
     expect(briefname).to.eq(aftercancelbriefname)
   })  
}

export const validate_emptyfield_validation_msg=()=>{
    cbview.elements.Editnamebtn().click()
    cbview.elements.EditCBnamefield().clear()
    cbview.elements.NamefieldValidationmsg().then(($el)=>{
        expect($el.text()).to.eq('Please enter a valid Content brief name')
    })
}
export const validate_correctname_issaved=()=>{
    let Editedname=""
    cbview.elements.Editnamebtn().click()
    cbview.elements.EditCBnamefield().clear().type('TestAutomation updating the name!!')
    cbview.elements.Editpopupsavebtn().click()
    cbview.elements.CBnametext().then(($el)=>{
             Editedname =$el.text()
     expect(Editedname).to.eq('TestAutomation updating the name!!')
   }) 
}
export const validate_BriefDownload=()=>{
    cbview.elements.BriefDownloadBtn().click()
    cy.verifyDownload('content_brief_01833df7e31c4bedb53aab0042963211')
}
