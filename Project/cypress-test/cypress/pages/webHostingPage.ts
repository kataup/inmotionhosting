  export default new class WebHostingPage {
  
  selectPlan() {
    return cy.get('button=["href="/vps-hosting"]')
  }
  
  clickSecondPlan() {
    this.selectPlan().eq(1).click({force: true})
  }
}