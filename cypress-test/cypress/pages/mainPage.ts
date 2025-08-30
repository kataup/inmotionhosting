export default new class MainPage {

  getHeading() {
    return cy.contains('h2', 'The Hosting Partner Behind Ambitious Brands')
  }

  buttonWebHostingPlans() {
    return cy.contains('a', ' Web Hosting Plans')
  }

  loginButton() {
    return cy.contains('a', 'Login')
  }

}

