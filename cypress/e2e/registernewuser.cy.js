describe('Register New User using API', () => {
  it('create a new user', () => {
    const timestamp = Date.now()
    const user = {
      name: 'QAtest',
      email: `user${timestamp}@abc.com`,
      password: 'QAPassword'
    };

    cy.request({
      method: 'POST',
      url: 'https://practice.expandtesting.com/notes/api/users/register',
      body: user,
      //failOnStatusCode: false // allows manual status check
    }).then((res) => {
      // Step 2: Assert response status
      expect(res.status).to.eq(201);

      // Step 3: Validate success message
      expect(res.body).to.have.property('message', 'User account created successfully');
    });
  });
});
