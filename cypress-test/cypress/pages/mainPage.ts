import menuCompontent from "./components/menuCompontent"

export default new class MainPage {


searchInput() {
    return cy.get('input[type="search"]')
  }

  viewPlans() {
    return cy.get('class["ppb-button.btn-tertiary.cta-pricing"]')
  }


}

export enum getMenuBar {
    VPS_HOSTING = "VPS Hosting",
    DEDICATED_SERVERS = "Dedicated Servers",
    HOSTING_FOR_WORDPRESS = "Hosting for WordPress",
    WEB_HOSTING = "Web Hosting",
    WEBSITE_SERVICES = "Website Services",
    PRICING = "Pricing"


}