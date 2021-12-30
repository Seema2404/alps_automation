declare global {
    namespace Cypress {
        interface Chainable {

            /**
             * Visit the url applying basic authentication
             * @example cy.visitWithBaseAuth('https://alpsqa.smallbizvoices.com/')
             */
            visitWithBaseAuth (): Cypress.Chainable<Window>
        }
    }
}

export const visitWithBaseAuth = (): Cypress.Chainable<Window> => cy.visit(Cypress.env('alpsUrl'), {
    auth: {
        username: Cypress.env('basicAuthLogin'),
        password: Cypress.env('basicAuthPassword')
    }
})
