import DropdownPage from '../pages/dropdownpage';

const dropdownPage = new DropdownPage();

describe('Dropdown Handling Tests', () => {
  beforeEach(() => {
    dropdownPage.visit();
  });

  it('Should select Option 1 and validate', () => {
    dropdownPage.selectOption('Option 1');
    dropdownPage.getSelectedOption().should('have.text', 'Option 1');
  });

  it('Should select Option 2 and validate', () => {
    dropdownPage.selectOption('Option 2');
    dropdownPage.getSelectedOption().should('have.text', 'Option 2');
  });
});
