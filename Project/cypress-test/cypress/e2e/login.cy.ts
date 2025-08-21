import loginPage from "../pages/loginPage"

describe('Login flow', () => {
  it('passes', () => {
    cy.visit('https://secure1.inmotionhosting.com/index/login')
  })
})