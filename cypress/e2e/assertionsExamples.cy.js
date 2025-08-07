describe('Assertions Page - Cypress Tests', () => {
  it('should assert element existence, visibility, and text content', () => {
   
    cy.visit('https://practice.expandtesting.com/#assertions');
   

    //Assert: Element exists
    
    cy.get('.btn-warning').should('exist')

    //cy.get('#exist-element') .should('exist');

    // Assert: Element has specific text
   
cy.get('.btn-primary').should('have.text','Test Cases')
    // Assert: Element is visible
    cy.get('.btn-success') .should('be.visible')
  }
)
}
)
