describe('Login with fixture data', () => {
  beforeEach(() => {
    cy.fixture('user').as('userData');
  }
)

  it('Logs in using data from user.json', function () {
    cy.visit('https://practice.expandtesting.com/login')

    // Use fixture data to fill in login form
    cy.get('#username').type(this.userData.username)
    cy.get('#password').type(this.userData.password)
    cy.get('button[type="submit"]').click()

    // Assertion 
    cy.url().should('include', '/secure')
    
    cy.get('#flash').should('be.visible').and('contain.text', 'You logged into a secure area!');
  }
)
}
)
