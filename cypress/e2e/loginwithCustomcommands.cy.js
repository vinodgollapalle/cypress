//import 'C:\Cypress\cypress\support/commands';


describe('Login Application', () => {
  it('Log in with valid credentials', () => {

    cy.login('practice', 'SuperSecretPassword!');
    
  cy.url().should('include', '/secure')
  
  }
)

}
)
