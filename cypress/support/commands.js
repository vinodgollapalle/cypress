// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('login', (username, password) => {
  cy.visit('https://practice.expandtesting.com/login')

  cy.get('#username') .type(username)

  cy.get('#password') .type(password)
  cy.get('button[type="submit"]') .click()
}
)

Cypress.Commands.add('PrevCommand',{ prevSubject: 'element'} ,(userNameLocator,username,password) => {    //login with prevsubj
    cy.wrap(userNameLocator).should('be.visible');
    cy.login(username, password)
 })


 
 Cypress.Commands.add('fillinput',{ prevSubject: 'element'} ,(locator,text) => {   //fillinput
    cy.wrap(locator).should('be.visible');
     cy.get(locator).type(text)
 })

 import '@4tw/cypress-drag-drop'
