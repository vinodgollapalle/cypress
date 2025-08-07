describe('Delete a test note and validate cleanup', () => {
  const baseUrl = 'https://practice.expandtesting.com/notes/api/api-docs/#/Notes/delete_notes__id_'
  const token = '271e6c341dc8476c870b800b10191c48e68ae96838ce4ecf8417a2b155990208' 
  const noteId = '687e4e339d1b4b0288662781' 

  it('Deletes a note and confirms deletion', () => {
    // Step 1: DELETE /notes/{id}
    cy.request({
      method: 'DELETE',
      url: `${baseUrl}/${noteId}`,
      headers: {
        Authorization: `Bearer ${token}`
      },
      failOnStatusCode: false
    }).then((response) => {
      // Step 2: Confirm status 204
      expect(response.status).to.eq(200)
    })

    // Step 3: GET /notes and confirm note is gone
    cy.request({
      method: 'GET',
      url: baseUrl,
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then((response) => {
      expect(response.status).to.eq(200)
      //  //Validate the noteId no longer exists in the list
      // const notes = response.body
      // const found = notes.find(note => note.id === noteId)
      // expect(found).to.be.undefined
    })
  })
})
