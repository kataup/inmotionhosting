  export default new class WebHostingPage {

  clickSecondPlan() {
    cy.contains('Select Plan').should('exist')
    cy.contains('Select Plan').eq(1).click({ force: true });
  }
}