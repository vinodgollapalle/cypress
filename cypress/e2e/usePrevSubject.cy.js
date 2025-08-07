
 describe('usePrevSubject', () => {

  beforeEach(() => {

     cy.visit("https://practice.expandtesting.com/login")     
  
})


   it('Login Application',()=>{       //Use Commands in test
   
    cy.login('practice','SuperSecretPassword!')
    cy.get("a[href='/logout']").should('be.visible') 

  
  });



   it.only('Login using Fillinput',()=>{   //Use previous subject
   
  
   cy.get('#username').fillinput('practice')
   cy.get('#password').fillinput('SuperSecretPassword!')
   cy.get('#login > .btn') .click()  
   cy.get('b').should('have.text','You logged into a secure area!')  

  
  });

  
});