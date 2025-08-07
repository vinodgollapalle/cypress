describe('Login Functionality Positive scenarios', () => {
  it('Login in to application with valid credentials', () => {

    cy.visit('https://practice.expandtesting.com/login')

    cy.get('#username').type('practice')
    cy.get('#password').type('SuperSecretPassword!')


    cy.get('button[type="submit"]').click()

   //Assert URL
    cy.url().should('include', '/secure')

    //Assert Success Message
    cy.get('#flash').should('be.visible').and('contain.text', 'You logged into a secure area!');

    //Assert Logout Button
    cy.get('a.button.secondary.radius').should('be.visible')
      .and('contain.text', 'Logout')
  }
)
}
)
