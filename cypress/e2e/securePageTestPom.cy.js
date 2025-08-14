import LoginPage from '../pages/loginpage';
import SecurePage from '../pages/securepage';


const loginPage = new LoginPage();
const securePage = new SecurePage();

describe('secure Page Testcase with POM', () => {
  beforeEach(() => {
    loginPage.visit();

  });

  it('user should login and redirect to secure area', () => {
    loginPage.enterUsername('practice');
    loginPage.enterPassword('SuperSecretPassword!');
    loginPage.clickLogin();
    securePage.isAtSecurePage();
    securePage.getSuccessAlert().should('contain.text', 'You logged into a secure area!');
  });
  it('User should be able to logout successfully', () => {
    loginPage.enterUsername('practice');
    loginPage.enterPassword('SuperSecretPassword!');
    loginPage.clickLogin();

    securePage.logout();

    cy.url().should('include', '/login');
    cy.get('#flash, .flash.info').should('contain.text', 'You logged out of the secure area!'); // Adjust based on actual message
  });
});
