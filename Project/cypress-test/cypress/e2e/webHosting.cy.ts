import  WebHostingPage  from '../pages/WebHostingPage'

describe('Choose plan on Web Hosting', () => {
  it('Select the second plan', () => {
    cy.visit('https://www.inmotionhosting.com/web-hosting')
    WebHostingPage.clickSecondPlan()
  
      cy.url().should('include', '/web-hosting')
    
  })

});