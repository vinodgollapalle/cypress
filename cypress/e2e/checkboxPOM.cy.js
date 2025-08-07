import CheckboxPage from '../pages/checkboxpage';

const checkboxPage = new CheckboxPage();

describe('Checkboxes Test with POM', () => {
  beforeEach(() => {
    checkboxPage.visit();
  });

  it('Should check the first checkbox and uncheck the second', () => {
    checkboxPage.checkFirstBox();
    checkboxPage.uncheckSecondBox();
    checkboxPage.validateCheckboxState([true, false]); // Validate both checkboxes
  });
});

