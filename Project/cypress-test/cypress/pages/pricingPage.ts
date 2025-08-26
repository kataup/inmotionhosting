export default new class PricingPage {

 clickSharedHostingTab() {
   return cy.get('span[class="button-text"]')

 }
  selectPlan() {
    return cy.get('a[class="atc central-atc btn-primary"]')
  }
   sharedHostingTab() {
    this.clickSharedHostingTab().click({force:true })

  
    }
  }
