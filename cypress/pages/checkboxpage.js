class CheckboxPage {
  visit() {
    cy.visit('/checkboxes');
  }

  checkFirstBox() {
    
    cy.get('input[type="checkbox"]').eq(0).check().should('be.checked');
  }

  uncheckSecondBox() {
    cy.get('input[type="checkbox"]').eq(1).uncheck().should('not.be.checked');
  }

  validateCheckboxState(expectedStates = [true, false]) {
    cy.get('input[type="checkbox"]').each(($checkbox, index) => {
      if (expectedStates[index]) {
        cy.wrap($checkbox).should('be.checked');
      } else {
        cy.wrap($checkbox).should('not.be.checked');
      }
    });
  }
}

export default CheckboxPage;
