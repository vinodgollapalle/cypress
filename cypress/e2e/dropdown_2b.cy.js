describe('Select "India" from the dropdown', () => {
  it('select India from the country dropdown', () => {
    // Visit the dropdown page
    cy.visit('https://practice.expandtesting.com/dropdown');

    // Select "India" from the dropdown by visible text
    cy.get('#country').select('India').should('have.value','IN')
  }
)
}
)
