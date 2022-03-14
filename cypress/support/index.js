// / <reference types="cypress-xpath" />
import 'cypress-real-events/support'
import addContext from 'mochawesome/addContext'
import 'cypress-file-upload'
import 'fs'
// eslint-disable-next-line @typescript-eslint/no-var-requires
require('cy-verify-downloads').addCustomCommand()

// import * as commands from './commands'

// eslint-disable-next-line import/no-unassigned-import
require('cypress-xpath')

require('cypress-xpath')

Cypress.on('uncaught:exception', (err, runnable) => {
    return false
})

Cypress.Commands.add('visitWithBaseAuth', () => {
    if (Cypress.env('alpsUrl').includes('alps.iquanti.com')) {
        cy.visit(Cypress.env('alpsUrl'))
    }
    else {
        cy.visit(Cypress.env('alpsUrl'), {
            auth: {
                username: Cypress.env('basicAuthLogin'),
                password: Cypress.env('basicAuthPassword')
            }
        })
    }
})

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

Cypress.Commands.add('getIframeBody', (iframeLoc) => {
    // get the iframe > document > body
    // and retry until the body element is not empty
    return cy
        .get(iframeLoc)
        .its('0.contentDocument.body').should('not.be.empty')
    // wraps "body" DOM element to allow
    // chaining more Cypress commands, like ".find(...)"
    // https://on.cypress.io/wrap
        .then(cy.wrap)
})

Cypress.Commands.add('iframeCustom', { prevSubject: 'element' }, ($iframe) => {
    return new Cypress.Promise((resolve) => {
        $iframe.ready(function () {
            resolve($iframe.contents().find('body'))
        })
    })
})

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
require('cy-verify-downloads').addCustomCommand()

Cypress.Commands.add(
    'loginUser',
    (tenant = Cypress.env('tenant'), index = 1) => {
        cy.visitWithBaseAuth('')
        cy.get('input[type="email"]').clear()
        cy.get('input[type="email"]').type(Cypress.env('username'))
        cy.get('input[type="password"]').clear()
        cy.get('input[type="password"]').type(Cypress.env('password'))
        cy.get('.btn-primary').click()
        cy.get('#menu1').click()
        // cy.get('li').contains(tenant).eq(index).click()
        cy.xpath(`//li[contains(text(),'${tenant}')][${index}]`).click()
        cy.get('.multiple_bttn').click()
    }
)

Cypress.Commands.add('logout', () => {
    cy.get('#profile-nav').click()
    cy.get('#profile-logout-nav').click()
})
