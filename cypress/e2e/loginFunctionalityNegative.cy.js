describe('Login Functinality with Negative scenarios', () => {
  const url = 'https://practice.expandtesting.com/login'

  beforeEach(() => {

    cy.visit(url)
  }
)

  it('invalid username', () => {
   
    cy.get('#username').type('testAbcd')
    cy.get('#password').type('SuperSecretPassword!')
    
    
    cy.get('button[type="submit"]').click()
    // Assert error message for invalid username
    cy.get('#flash')
      .should('be.visible')
      .and('contain.text', 'Your username is invalid!')

  })

  it('invalid password', () => {
    
    cy.get('#username').type('practice');
    cy.get('#password').type('cdeef!')
    
   
    cy.get('button[type="submit"]').click()

    // Assert error message for invalid password
     cy.get('#flash')
      .should('be.visible')
      .and('contain.text', 'Your password is invalid!')
   
  }
)
}
)
