import * as kgaAction from '../../../../pages/commands/kgahomepage'
import * as simAction from '../../../../pages/commands/simulation'

describe('As a KGA user', () => {
    before(() => {
        cy.loginUser()
    })
    beforeEach(() => {
        cy.restoreLocalStorage()
    })
    afterEach(() => {
        cy.saveLocalStorage()
    })
})