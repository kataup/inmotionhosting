export default new class VpsHosting {

 clickSeePlansAndPricing() {
    cy.get('[class="btn-primary hero-pricing-cta-text cta-pricing"]')
 }

    clickThirdPlan() {
    cy.contains('Select').eq(2).click({ force: true }).should('contains', 'VPS 12 vCPU')

}
}
 