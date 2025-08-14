describe('Registration Form Tests', () => {
 const url = 'https://practice.expandtesting.com/register'

  beforeEach(() => {

    cy.visit(url)
  }
)

  it(' Registration Page', () => {
    cy.get('#username').type('QATest13')
    cy.get('#password').type('QATest12')
    //cy.get('input#confirmPassword', { timeout: 10000 }).should('be.visible').type('test1234');
    cy.get('#confirmPassword').type('QATest12')
    cy.get('button[type=submit]').click()

    // Redirect to login and show success message
    cy.url().should('include', '/login')
    cy.get('#flash')
      .should('be.visible')
      .and('contain.text', 'Successfully registered, you can log in now.')
  })

  it( 'username validation', () => {
    cy.get('#password').type('ValidPass');
    cy.get('#confirmPassword').type('ValidPass');
    cy.get('button[type=submit]').click();

    cy.get('#flash')
      .should('be.visible')
      .and('contain.text', 'All fields are required.');
  });

  it('Missing Password validation', () => {
    cy.get('#username').type('test');
    cy.get('#confirmPassword').type('test123');
    cy.get('button[type=submit]').click();

    cy.get('#flash')
      .should('be.visible')
      .and('contain.text', 'All fields are required.');
  });

  it('Non-matching passwords', () => {
    cy.get('#username').type('test');
    cy.get('#password').type('test123');
    cy.get('#confirmPassword').type('Mismatch123!');
    cy.get('button[type=submit]').click();

    cy.get('#flash')
      .should('be.visible')
      .and('contain.text', 'Passwords do not match.');
  });
});
