export default new class LoginPage {
  usernameInput() {
    return cy.get('');
  }
  passwordInput() {
    return cy.get('');
  }
  loginButton() {
    return cy.get('');
  }
  login(username: string, password: string) {
    this.usernameInput().type(username);
    this.passwordInput().type(password);
    this.loginButton().click();
  }
}