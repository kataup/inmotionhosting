import  WebHostingPage  from '../pages/WebHostingPage'
import vpsHosting from '../pages/vpsHosting';
import  VpsHosting from '../pages/vpsHosting'

describe('Select the secong plan === Web Hosting', () => {
  it('Select the second plan', () => {
    cy.visit('https://www.inmotionhosting.com/web-hosting')
    WebHostingPage.clickSecondPlan()
  
      cy.url().should('include', '/web-hosting')
    
  })
  it('Should show all plans and pricing', () => {
    cy.visit('https://www.inmotionhosting.com/vps-hosting')
    VpsHosting.clickSeePlansAndPricing();
    vpsHosting.clickThirdPlan();

    
  });

});