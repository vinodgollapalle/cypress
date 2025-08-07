class DynamicPage {
  getTextBlocks() {
  return cy.get('div#content').eq(0)
    //return cy.get('.content'); 
  }

  compareContent(oldContent, newContent) {
    expect(oldContent).to.not.deep.equal(newContent);
  }
}

export default new DynamicPage();
