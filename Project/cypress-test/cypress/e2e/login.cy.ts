import loginPage from "../pages/loginPage";

describe('Invalid login flow', () => {
  beforeEach(() => {
    cy.visit('https://secure1.inmotionhosting.com/index/login');
  });

  it('should show an error message with invalid credentials', () => {

    cy.fixture('login').then((loginData) => {
      const { username, password } = loginData.invalidUser;
      loginPage.login(username, password);

    
      cy.url().should('contain.text', 'Invalid e-mail address and/or password');
    });
  });
});