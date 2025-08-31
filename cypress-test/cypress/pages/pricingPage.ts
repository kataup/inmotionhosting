export default new class PricingPage {

  getPricingMenu() {
    return cy.contains('a', 'Pricing')
  }
 
  getSharedHosting() {
    return cy.get('button.imh-term-selector').contains('Shared Hosting')
  }

  clickSharedHosting() {
    return cy.get('button.imh-term-selector').contains('Shared Hosting').click()
  }

  getPowerPlanCard() {
    return cy.contains('a', 'Power')
  }

  clickPowerPlanSelect() {
  return cy.contains('.imh-rostrum-card', 'Power')
    .should('be.visible')
    .find('a.btn-primary, button.btn-primary')
    .contains('Select')
    .should('be.visible')
    .click()
}

  clickMenuItem(item: MenuItems) {
    return cy.contains('nav a', item).click()
  }
}

export enum MenuItems {
  VPS_HOSTING = 'VPS Hosting',
  DEDICATED_SERVERS = 'Dedicated Servers',
  HOSTING_FOR_WORDPRESS = 'Hosting for WordPress',
  WEB_HOSTING = 'Web Hosting',
  WEBSITE_SERVICES = 'Website Services',
  PRICING = 'Pricing'
}
