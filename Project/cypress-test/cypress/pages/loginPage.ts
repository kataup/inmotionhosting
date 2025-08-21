export default new class LoginPage {
  usernameInput() {
    return cy.get('input[id="username"]');
  }
  passwordInput() {
    return cy.get('input[id="password"]');
  }

  showPasswordButton() {
    return cy.get('input[id="password-toggle"]')
  }
  loginButton() {
    return cy.get('button[id="login-submit"]');
  }
  login(username: string, password: string) {
    this.usernameInput().type(username)
    this.passwordInput().type(password)
    this.showPasswordButton().click()
    this.loginButton().click()
  }
}