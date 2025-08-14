// import LoginPage from '../pages/loginpage';
// //import LoginPage from '../pageObjects/loginPage';

// const loginPage = new LoginPage(); 

// describe('Login Page Testcase with POM', () => {
//   beforeEach(() => {
//     loginPage.visit();
//   });

//   it('user should login and redirect to secure area', () => {
//     LoginPage.enterUsername('practice');
//     LoginPage.enterPassword('SuperSecretPassword!');
//     LoginPage.clickLogin();
//     cy.url().should('include', '/secure');
//     //cy.url().should('include', '/login');
//     cy.contains('You logged into a secure area!').should('be.visible');
//   });

//   it('Invalid user login should show error message', () => {
//     LoginPage.enterUsername('abdcdef');
//     LoginPage.enterPassword('dfdfdfd');
//     LoginPage.clickLogin();

//     cy.contains('Your username is invalid!').should('be.visible');
//     cy.url().should('include', '/login');
//   });
// });
import LoginPage from '../pages/loginpage';

const loginPage = new LoginPage();

describe('Login Page Testcase with POM', () => {
  beforeEach(() => {
    loginPage.visit(); // ✅ instance method
  });

  it('user should login and redirect to secure area', () => {
    loginPage.enterUsername('practice');
    loginPage.enterPassword('SuperSecretPassword!');
    loginPage.clickLogin();

    cy.url().should('include', '/secure');
    cy.contains('You logged into a secure area!').should('be.visible');
  });

  it('Invalid user login should show error message', () => {
    loginPage.enterUsername('abdcdef');
    loginPage.enterPassword('dfdfdfd');
    loginPage.clickLogin();

    cy.contains('Your username is invalid!').should('be.visible');
    cy.url().should('include', '/login');
  });
});
