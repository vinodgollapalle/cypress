import DynamicPage from '../pages/dynamicpage';

describe('Dynamic Content Validation', () => {
  it('should detect dynamic content change after refresh', () => {
    cy.visit('/dynamic-content');

    // Step 1: Get initial content
    let firstLoadContent = [];
    DynamicPage.getTextBlocks().then(($blocks) => {
      $blocks.each((index, el) => {
        firstLoadContent.push(el.innerText.trim());
      });

      // Step 2: Refresh the page
      cy.reload();

      // Step 3: Get new content
      let secondLoadContent = [];
      DynamicPage.getTextBlocks().then(($newBlocks) => {
        $newBlocks.each((index, el) => {
          secondLoadContent.push(el.innerText.trim());
        });

        // Step 4: Compare the content
        DynamicPage.compareContent(firstLoadContent, secondLoadContent);
      });
    });
  });
});
