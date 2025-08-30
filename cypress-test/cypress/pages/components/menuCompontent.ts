import { MenuItems } from '../pricingPage';

export default class MenuBar {
  getMenuBar() {
    return cy.get('div[id="navbarNavDropdown"]');
  }

  vpsHosting() {
    return cy.contains('nav a', 'VPS Hosting');
  }

  dedicatedServers() {
    return cy.contains('nav a', 'Dedicated Servers');
  }

  hostingForWordPress() {
    return cy.contains('nav a', 'Hosting for WordPress');
  }

  webHosting() {
    return cy.contains('nav a', 'Web Hosting');
  }

  websiteServices() {
    return cy.contains('nav a', 'Website Services');
  }

  pricing() {
    return cy.contains('nav a', 'Pricing');
  }

  cart() {
    return cy.contains('span', 'Cart');
  }

  clickMenuItem(item: MenuItems) {
    switch(item) {
      case MenuItems.VPS_HOSTING:
        return this.vpsHosting().click();
      case MenuItems.DEDICATED_SERVERS:
        return this.dedicatedServers().click();
      case MenuItems.HOSTING_FOR_WORDPRESS:
        return this.hostingForWordPress().click();
      case MenuItems.WEB_HOSTING:
        return this.webHosting().click();
      case MenuItems.WEBSITE_SERVICES:
        return this.websiteServices().click();
      case MenuItems.PRICING:
        return this.pricing().click();
      default:
        throw new Error(`Menu item ${item} not exists`);
    }
  }
}