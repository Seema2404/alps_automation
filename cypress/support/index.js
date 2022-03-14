import addContext from 'mochawesome/addContext'

require('cypress-xpath')

Cypress.on('uncaught:exception', (err, runnable) => {
    return false
})

Cypress.Commands.add('visitWithBaseAuth', () => cy.visit(Cypress.env('alpsUrl'), {
    auth: {
        username: Cypress.env('basicAuthLogin'),
        password: Cypress.env('basicAuthPassword')
    }
}))

Cypress.Commands.add(
    'iframeLoaded',
    { prevSubject: 'element' },
    ($iframe) => {
        const contentWindow = $iframe.prop('contentWindow')

        return new Promise(resolve => {
            if (
                contentWindow &&
                contentWindow.document.readyState === 'complete') {
                resolve(contentWindow)
            }
            else {
                $iframe.on('load', () => {
                    resolve(contentWindow)
                })
            }
        })
    }
)

Cypress.Commands.add(
    'getInDocument',
    { prevSubject: 'document' },
    (document, selector) => Cypress.$(selector, document)
)

Cypress.Commands.add(
    'getWithinIframe',
    (targetElement) => cy.get('iframe').iframeLoaded().its('document')
        .getInDocument(targetElement)
)

Cypress.Commands.add('iframe', { prevSubject: 'element' }, ($iframe, selector) => {
    Cypress.log({
        name: 'iframe',
        consoleProps () {
            return {
                iframe: $iframe
            }
        }
    })

    return new Cypress.Promise(resolve => {
        resolve($iframe.contents().find(selector))
    })
})

Cypress.on('test:after:run', (test, runnable) => {
    if (test.state === 'failed') {
        let item = runnable
        const nameParts = [runnable.title]

        // Iterate through all parents and grab the titles
        while (item.parent) {
            nameParts.unshift(item.parent.title)
            item = item.parent
        }

        const fullTestName = nameParts
            .filter(Boolean)
            .join(' -- ')           // this is how cypress joins the test title fragments

        const imageUrl = `screenshots/${
            Cypress.spec.name
        }/${fullTestName} (failed).png`

        addContext({ test }, imageUrl)
    }
})

Cypress.Cookies.defaults({
    preserve: '__iQ_ALPS_SESSION'
})

const LOCAL_STORAGE_MEMORY = {}

Cypress.Commands.add('saveLocalStorage', () => {
    Object.keys(localStorage).forEach(key => {
        LOCAL_STORAGE_MEMORY[key] = localStorage[key]
    })
})

Cypress.Commands.add('restoreLocalStorage', () => {
    Object.keys(LOCAL_STORAGE_MEMORY).forEach(key => {
        localStorage.setItem(key, LOCAL_STORAGE_MEMORY[key])
    })
})

Cypress.Commands.add(
    'loginUser',
    () => {
        cy.visitWithBaseAuth()
        cy.get('input[type="email"]').clear()
        cy.get('input[type="email"]').type(Cypress.env('username'))
        cy.get('input[type="password"]').clear()
        cy.get('input[type="password"]').type(Cypress.env('password'))
        cy.get('.btn-primary').click()
        cy.get('#menu1').click()
        cy.get('li').contains(Cypress.env('tenant')).click()
        cy.get('.multiple_bttn').click()
    }
)
