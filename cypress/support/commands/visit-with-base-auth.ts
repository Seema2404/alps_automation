declare global {
    namespace Cypress {
        interface Chainable {

            /**
             * Visit the url applying basic authentication
             * @example cy.visitWithBaseAuth('https://dev.childcareseer.com/')
             */
            visitWithBaseAuth (url: string): Cypress.Chainable<Window>
        }
    }
}

export const visitWithBaseAuth = (url: string): Cypress.Chainable<Window> => cy.visit(url, {
    auth: {
        username: Cypress.env('basicAuthLogin'),
        password: Cypress.env('basicAuthPassword')
    }
})
