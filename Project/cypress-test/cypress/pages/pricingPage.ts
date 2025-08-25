export default new class PricingPage {

 clickSharedHostingTab() {
    cy.contains('button, a', 'Shared Hosting')
      .then($tab => {
        if (!$tab.hasClass('active') && $tab.attr('aria-selected') !== 'true') {
          cy.wrap($tab).click({ force: true });
        }
      });
  }

  selectFirstSharedHostingPlan() {
 
    cy.get('.imh-term-switcher > div:visible')  
      .within(() => {
        cy.contains('button, a', 'Select')
          .filter(':visible')
          .first()
          .click({ force: true });
      });
  }
}