
import {KGASerp} from '../page-selectors/KGASerpPage'



export const clickSerpPageKGA = () => {
    KGASerp.elements.serpPageKGA().click()
}



export const clickSerpPageSimulation = () => {
    KGASerp.elements.serpPageSimulation().click()
}


export const clickSerpPageMultikeyWordToggleButton = () => {
    KGASerp.elements.serpPageMultikeyWordToggleButton().click()
}

export const clickSubmit = () => {
    KGASerp.elements.submit().click()
}




// ======================== Need to work on for fetching the text from application=============

const filename = 'cypress/fixtures/test.json'
 
export const writeDispSerpUrlheading =() => {

    KGASerp.elements.serpUrlheading().then((fetchDispText) => {
     {
         const serpUrlheadingText=fetchDispText.text()
        //  cy.log(serpUrlheadingText)
         cy.writeFile(filename, { newScore: serpUrlheadingText })
     }
    })
}

 export const readDispSerpUrlheading =() => {
     
    return cy.readFile(filename).then((obj) => {
        // cy.log(obj.newScore)
        return obj.newScore
        // obj.readSerpUrlheadingText = fetchDispText
        // write the merged object
        // cy.writeFile(filename, obj)
    })
}


// export const writeDispSerpUrlheading1 =() => {

//     KGASerp.elements.serpUrlheading().then((elem) => {
//     const txt = elem.text()

//     cy.log(txt)

//     cy.writeFile(filename, { newScore: txt })
//     // })

//     // KGASerp.elements.serpUrlheading().then((elem) => {
//     //     const txt = elem.text()
 
//     //     cy.log(txt)

//     cy.readFile(filename).then((obj) => {
//         obj.newScore2 = txt
//         // write the merged object
//         cy.writeFile(filename, newScore2)
//     })
// })
// }


//     KGASerp.elements.serpUrlheading().then(function(fetchDispText)
//      {
//          const readSerpUrlheadingText=fetchDispText.text()
//          cy.log(serpUrlheadingText)
//          cy.writeFile(filename, { newScore: txt })
//      })
//  }

//     cy.readFile(filename).then((obj) => {
//         obj.newScore2 = txt
//         // write the merged object
//         cy.writeFile(filename, obj)
//     })
// })



// Cypress.Commands.add("dispSerpUrlheading", () => {
//     cy.get('#serpResult_metaInfo_url_text').invoke('text').then((text1) => {
//        const isHidden = text1
//        console.log(isHidden); // This returns either true or false and that is good  
//        return isHidden; // this returns $chainer but I want to return either true or false 
//     })
 
//  })
 

// export const dispSerpUrlheading =() => {
//     let pin = ""
    
//     cy.get('#serpResult_metaInfo_url_text').invoke('text').then((text1) => {
//         pin = text1; //assign text1 value to global pin variable, does not work
    
//         cy.log(text1) // this works and logs the value of text1
//     })
    
//      cy.log(pin) //this just logs an empty
//     return pin
// }


export const dispSerpUrlheading =() => {

    const url = KGASerp.elements.serpUrlheading().then(function(fetchDispText)
     {
         const serpUrlheadingText=fetchDispText.text()
         return serpUrlheadingText
     })
     return url
 }
 
 
//  export const dispserpKeywordheading =() => {
 
//      const kw =KGASerp.elements.serpKeywordheading().then(function(fetchDispText)
//      {
//          const serpKeywordheadingText=fetchDispText.text()
 
//          return serpKeywordheadingText
 
//      })
//      return kw
//  }





