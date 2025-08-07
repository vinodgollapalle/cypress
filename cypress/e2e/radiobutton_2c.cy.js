describe('Select Blue radio button', () => {
  it('Select the Blue radio button', () => {
    cy.visit('https://practice.expandtesting.com/radio-buttons')

    //blue radio button
    cy.get('input#blue').check().should('be.checked')
  }
)
}
)
