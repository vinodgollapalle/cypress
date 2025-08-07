it('Delete NotesAPI',function (){      
    cy.get('@token').then((token) => {
   cy.get('@noteId').then((noteId) => {
  cy.request({
    method: 'DELETE',
    url: `https://practice.expandtesting.com/notes/api/notes/${noteId}`,
     headers: {
  'x-auth-token': token
   },
    body: noteData
  }).then((res)=>{
      cy.log(res)
      expect(res.status).to.eq(200)
        expect(res.body.message).to.eq('Note successfully deleted');
     
 
  });
});

});


});
