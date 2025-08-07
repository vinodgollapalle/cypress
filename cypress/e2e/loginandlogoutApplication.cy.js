describe('loginApp',()=>
{
it('login to an application with valid credentials',()=>
{
    cy.visit("https://practice.expandtesting.com/login")
   
    //cy.get('Username: ').contains('practice')
    cy.get('#username').type('practice')
    cy.get('#password').type('SuperSecretPassword!')
    cy.get('button[type="submit"]').click();
  
     
}
)

it('logout to an application',()=>
{
    cy.visit("https://practice.expandtesting.com/login")
   
  cy.get('#username').type('practice')
  cy.get('#password').type('SuperSecretPassword!')
  cy.get('button[type="submit"]').click();
  cy.get('i[class="icon-2x icon-signout"]').click();
     
}
)

}

)