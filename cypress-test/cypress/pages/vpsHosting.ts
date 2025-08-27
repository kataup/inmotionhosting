export default new class VpsHosting {

getVpsHosting() {
   return cy.contains('a', 'VPS Hosting')
}
 clickSeePlansAndPricing() {
   return cy.contains('a', 'See Plans and Pricing')
 }

clickOneMonthPlan() {
   return cy.contains('button','1 Month')
}
}

 