  export default new class WebHostingPage {
  
  selectPlan() {
    return cy.get('[button="href="/vps-hosting"]').should('contains','VPS 4 vCPU')
  }
  
  clickSecondPlan() {
    this.selectPlan().eq(1).click({ force: true })
  }
}