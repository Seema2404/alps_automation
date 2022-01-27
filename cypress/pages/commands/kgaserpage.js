
import {KGASerp} from '../page-selectors/KGASerpPage'



export const clickSerpPageKGA = () => {
    KGASerp.elements.serpPageKGA().click()
}



export const clickSerpPageSimulation = () => {
    KGASerp.elements.serpPageSimulation().click({ force: true })
}


export const clickSerpPageMultikeyWordToggleButton = () => {
    KGASerp.elements.serpPageMultikeyWordToggleButton().click()
}

export const clickSubmit = () => {
    KGASerp.elements.submit().click()
}



export const txtSerpKWBox = (SerpKw) => {
    KGASerp.elements.MultiKeyword().clear()
    KGASerp.elements.MultiKeyword().type(SerpKw)
    
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






export const dispSerpUrlheading =() => {

    const url = KGASerp.elements.serpUrlheading().then(function(fetchDispText)
     {
         const serpUrlheadingText=fetchDispText.text()
         return serpUrlheadingText
     })
     return url
 }
 
 





