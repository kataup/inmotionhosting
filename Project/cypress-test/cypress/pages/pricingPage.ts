export default new class PricingPage {

selectPlan() {
    return cy.get('button[class="imh-term-selector active"]')
}
}