import pricingPage from '../pages/pricingPage'
import cartPage from '../pages/cartPage'
import form from '../fixtures/form.json'
import phoneNumbers from '../fixtures/phoneNumber.json'
import { MenuItems } from '../pages/pricingPage'

describe('Pricing Page test', () => {
  beforeEach(() => {
    cy.visit('https://www.inmotionhosting.com/')
  });

  it('Should navigate to Pricing page and verify URL', () => {
    pricingPage.clickMenuItem(MenuItems.PRICING)
      .should('be.visible');
    cy.url().should('include', '/pricing')
  });

  it('Should select Shared Hosting and Power plan on Pricing page, then fill checkout form', () => {
  
    pricingPage.clickMenuItem(MenuItems.PRICING).should('be.visible')
    cy.url().should('include', '/pricing')
  
    pricingPage.getSharedHosting().should('be.visible')
    pricingPage.clickSharedHosting()
  
    pricingPage.getPowerPlanCard().should('be.visible')
    pricingPage.clickPowerPlanSelect()

    cy.url().should('include', '/amp/checkout#domain')

    cartPage.chooseDomain().should('be.visible')
    cartPage.clickButton()

    cartPage.fillForm(form)

    cartPage.openCountryDropdown()
    cy.get('.iti__country-list .iti__country')
      .contains(phoneNumbers.CzechRepublic.name)
      .click()
  
    cartPage.typePhoneNumber(phoneNumbers.CzechRepublic.phoneNumber)

    cy.url().should('include', '/amp/checkout#complete')
  })
})
