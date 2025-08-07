class LoginPage {
  visit() {
    cy.visit('/login');
  }

  enterUsername(username) {
    cy.get('#username').clear().type(username);
  }

  enterPassword(password) {
    cy.get('#password').clear().type(password);
  }

  clickLogin() {
    cy.get('button[type="submit"]').click();
  }
}

export default new LoginPage();
//export default LoginPage;
