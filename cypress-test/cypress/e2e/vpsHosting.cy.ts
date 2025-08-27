import VpsHosting from "../pages/vpsHosting";


describe('Plans flow', () => {
    it('should go to Pricing -> Shared Hosting -> Power plan', () => {
    cy.visit('https://www.inmotionhosting.com/')

    VpsHosting.getVpsHosting().click()
    VpsHosting.clickSeePlansAndPricing().click()
    VpsHosting.clickOneMonthPlan().click


})
})