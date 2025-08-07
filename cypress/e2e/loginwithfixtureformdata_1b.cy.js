describe('Login using fixture data', () => {
  it('Login with form data from JSON file', () => {
    // Load fixture
    cy.fixture('formData').then((data) => {
     
      cy.visit('https://practice.expandtesting.com/login')

      // Fill in the form
      cy.get('#username').type(data.username)
      cy.get('#password').type(data.password)
      cy.get('button[type="submit"]').click();

      // Validate login success
     cy.url().should('include', '/secure')
    
    cy.get('#flash').should('be.visible').and('contain.text', 'You logged into a secure area!');
    }
)
  }
)
}
)
