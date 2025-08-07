import ContextMenuPage from '../pages/contextmenupage';

const contextMenuPage = new ContextMenuPage();

describe('Context Menu Interaction Test', () => {
  beforeEach(() => {
    contextMenuPage.visit();
  });

  it('Should right click the box and validate the alert message', () => {
     contextMenuPage.rightClickBox();
     //cy.get('a[target="_blank"]').invoke('removeAttr', 'target').click();
    contextMenuPage.handleAlert('You selected a context menu');
    
   

  });
});
