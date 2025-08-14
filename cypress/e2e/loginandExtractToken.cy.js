describe('User Login API and Extract Token', () => {
  const apidata = {
    name: "QAtester18",
    email: 'sssf18@abcd.com',
    password: 'QAPassword18'
  };

  it('log in and extract the token', () => {
    cy.request({
      method: 'POST',
      url: 'https://practice.expandtesting.com/notes/api/users/login',
      body: apidata,
      failOnStatusCode: false
    }).then((res) => {
      cy.log(res)
      // Step 3: Assert response status
      expect(res.status).to.eq(200);

      // Step 2: Extract and validate token
      //expect(response.body).to.have.property('token');
      cy.log(res.body.message)
      expect(res.body.message).to.eq("Login successful")
      
      const token = res.body.data.token;
      expect(res.body.data.token).to.not.be.null
       //cy.log(authToken)

      // Save token to alias for reuse
      cy.wrap(token).as('authToken');
     
    })
  })
}
)
