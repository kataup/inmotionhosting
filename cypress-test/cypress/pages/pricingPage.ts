export default new class PricingPage {

  getPricingMenu() {
    return cy.contains('a', 'Pricing')
  }

  getSharedHosting() {
    return cy.contains('button', 'Shared Hosting')
  }

  getPowerPlanCard() {
    return cy.contains('h3', 'Power');
  }
  
  getPowerPlanSelectButton() {
  return this.getPowerPlanCard().then($card => {
    return cy.wrap($card).find('a.atc.central-atc.btn-primary[data-product="eleventh"]').contains('Select');
  })
}
}
