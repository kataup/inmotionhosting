import pricingPage from '../pages/pricingPage'

describe('Menu navigation test', () => {
  it('should go to Pricing -> Shared Hosting -> Power plan', () => {
  
    cy.visit('https://www.inmotionhosting.com/')

   
    pricingPage.getPricingMenu().click()
    cy.url().should('include', '/pricing')
    pricingPage.getSharedHosting().click()

  pricingPage.getPowerPlanSelectButton()
  .should('be.visible')
  .click();
  })
})