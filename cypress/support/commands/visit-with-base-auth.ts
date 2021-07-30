declare global {
    namespace Cypress {
        interface Chainable {

            /**
             * Visit the url applying basic authentication
             * @example cy.visitWithBaseAuth('https://alpsqa.smallbizvoices.com/')
             */
            visitWithBaseAuth (url: string): Cypress.Chainable<Window>
        }
    }
}

export const visitWithBaseAuth = (url: string): Cypress.Chainable<Window> => cy.visit(Cypress.env('baseUrl') + url, {
    auth: {
        username: Cypress.env('basicAuthLogin'),
        password: Cypress.env('basicAuthPassword')
    }
})
