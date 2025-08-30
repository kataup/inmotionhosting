import menuCompontent from "./components/menuCompontent"

export default new class MainPage {

searchInput() {
    return cy.get('input[type="search"]')
  }

  viewPlans() {
    return cy.get('class["ppb-button.btn-tertiary.cta-pricing"]')
  }


}

