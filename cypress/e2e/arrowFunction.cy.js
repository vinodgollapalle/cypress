describe('Multiply three Numbers Example', () => 
    {
  it('Multiplies three numbers', () => {
    const multiplyThreeNumbers = (a, b, c) => a * b * c;

    const result = multiplyThreeNumbers(4, 6, 8);
    cy.log(`The multiplication of three numbers: ${result}` )
  }
)
}
)