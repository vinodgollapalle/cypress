describe('Fetch All Notes', () => {
  let token;
  let createdNoteId;
  const noteTitle = 'Test Note Fetch';
  const noteDescription = 'Note to verify in GET request';

  before(() => {
    // Step 1: Log in and get token
    cy.request({
      method: 'POST',
      url: 'https://practice.expandtesting.com/notes/api/users/login',
      body: {
        name: "QAtester4",
        email: 'sssf4@abcd.com',
        password: 'QAPassword4'
      }
    }).then((response) => {
      expect(response.status).to.eq(200);
      token = response.body.data.token;
      expect(token).to.exist;
    });
  });

  it('create a new note', () => {
    // Step 2: Create a note
    cy.request({
      method: 'POST',
      url: 'https://practice.expandtesting.com/notes/api/notes',
      headers: {
        'x-auth-token': token,
        'Content-Type': 'application/json'
      },
      body: {
        title: noteTitle,
        description: noteDescription,
        category: 'Personal'
      }
    }).then((response) => {
      expect(response.status).to.eq(200);
      createdNoteId = response.body.data.id;
      expect(createdNoteId).to.exist;
    });
  });

  it('should fetch all notes and contain the newly created note', () => {
    // Step 3: Fetch all notes
    cy.request({
      method: 'GET',
      url: 'https://practice.expandtesting.com/notes/api/notes',
      headers: {
        'x-auth-token': token
      }
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('data');
      expect(response.body.data).to.be.an('array');

      // Step 4: Assert the created note exists in the array
      const found = response.body.data.find(note => 
        //note.id === createdNoteId && note.title === noteTitle
        note.title === noteTitle &&
  note.description === noteDescription
      );

      expect(found, 'Newly created note should be in the list').to.exist;
    });
  });
});
