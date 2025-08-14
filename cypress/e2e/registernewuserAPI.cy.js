describe('Register New User using API', () => {
  it('create a new user', () => {
    //const timestamp = Date.now()
    const apidata = {
      name: "QAtester30",
      email: "sssf29@abcd.com",
      password: "QAPassword29"
    }

    cy.request({
      method: 'POST',
      url: 'https://practice.expandtesting.com/notes/api/users/register',
      body: apidata,
      failOnStatusCode: false // allows manual status check
    }).then((res) => {
      cy.log(res)
      // Step 2: Assert response status
      expect(res.status).to.eq(201);

      // Step 3: Validate success message
      expect(res.body.message).to.eq('User account created successfully');
    });
  });
});
