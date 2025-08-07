describe('function expression', () => {
  it('Logs user email', () => {
    const printUserEmail = function(email) {
      cy.log(` User email: ${email}` )
    }

    printUserEmail('cypresstesting@com' )
  }
)
}
)
