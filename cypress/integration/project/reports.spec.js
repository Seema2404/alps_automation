describe('As a Project user', () => {

    before(() => {
        cy.loginUser('Iquanti Training')
    })
    beforeEach(() => {
        cy.restoreLocalStorage()
    })
    afterEach(() => {
        cy.saveLocalStorage()
    })
    it('verify Reports homepage', () => {
        cy.wait(7000)
        cy.get('div#root header div div:nth-child(2) nav div:nth-child(3)').click()
        cy.get('a').contains('REPORTS').click()
        cy.get('div.filter_left_coloum').should('be.visible')
    })
})