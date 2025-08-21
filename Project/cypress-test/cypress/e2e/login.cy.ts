import loginPage from "../pages/loginPage"

describe('Invalid login flow', () => {
  it('should show an error message', () => {
    cy.visit('https://secure1.inmotionhosting.com/index/login')
    loginPage.usernameInput()
  })
})