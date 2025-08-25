
import PricingPage from '../pages/pricingPage'


describe('Pricing page - Shared Hosting selection', () => {

  beforeEach(() => {
    cy.visit('https://www.inmotionhosting.com/pricing');
  });

  it('should select the first Shared Hosting plan', () => {
    PricingPage.clickSharedHostingTab()
    PricingPage.selectFirstSharedHostingPlan()

    cy.url().should('include', 'Domain')
  });
});