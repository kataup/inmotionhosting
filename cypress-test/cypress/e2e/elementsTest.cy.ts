import mainPage from '../pages/mainPage'

describe('InMotion Hosting Homepage Elements', () => {
    beforeEach(() => {
        cy.visit('https://www.inmotionhosting.com/')
    })
})
it('Should display essential elements on the homepage', () => {
    mainPage.getHeading().should('be.visible')
    mainPage.buttonWebHostingPlans().should('be.visible')
    mainPage.loginButton().should('be.visible')
})