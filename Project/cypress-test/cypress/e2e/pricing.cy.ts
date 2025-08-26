import PricingPage from '../pages/pricingPage'

describe('Pricing page - Shared Hosting selection', () => {

  beforeEach(() => {
    cy.visit('https://www.inmotionhosting.com/pricing');
  });

  it('should select Shared Hosting plan', () => {
    PricingPage.clickSharedHostingTab().click()
    PricingPage.selectPlan().click()

    cy.url().should('include', '/domain')
  });
});