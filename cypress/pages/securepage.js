class SecurePage {
  getSuccessAlert() {
    return cy.get('#flash'); 
  }

  logout() {
    cy.get('a.button').contains('Logout').click(); 
  }

  isAtSecurePage() {
    return cy.url().should('include', '/secure');
  }
}

export default new SecurePage();
//export default SecurePage;

