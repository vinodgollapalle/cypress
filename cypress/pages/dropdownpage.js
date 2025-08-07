class DropdownPage {
  visit() {
    cy.visit('/dropdown');
  }

  selectOption(value) {
    
    cy.get('#dropdown').select(value);
  }

  getSelectedOption() {
    return cy.get('#dropdown').find(':selected');
  }
}

export default DropdownPage;
