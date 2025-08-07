class ContextMenuPage {
  visit() {
    cy.visit('/context-menu');
  }

  rightClickBox() {
   
    cy.get('#hot-spot').rightclick();
  }

  handleAlert(expectedText) {
   
    cy.on('window:alert', (alertText) => {
      expect(alertText).to.equal(expectedText);
    });
  }
}

export default ContextMenuPage;
