describe('Checkboxes', () => {
  it('check and uncheck each checkbox', () => {
    
    cy.visit('https://practice.expandtesting.com/checkboxes')

    // Step 2: Locate all checkboxes (assume input[type="checkbox"] is used)
    cy.get('input[type="checkbox"]').each(($checkbox) => {
      // Step 3: Check the checkbox
      cy.wrap($checkbox).check().should('be.checked')

      // Step 4: Uncheck the checkbox
      cy.wrap($checkbox).uncheck().should('not.be.checked')
    }
)
  }
)
}
)
