it('scroll in an element',()=>{     
       cy.visit("https://practice.expandtesting.com/scrollbars")
   //scroll in to an element

   //cy.get("[id='search-input']").type("scrollbars")  
   cy.get('[style="height:150px;overflow-y: scroll;width:300px;overflow-x:scroll"]').click()
   cy.get('#hidingButton').scrollIntoView().click()

  
  })
   //drag and drop
   it('Drag and drop',()=>{     
       cy.visit("https://practice.expandtesting.com/drag-and-drop")
    // Drag Box A and drop it on Box B
    cy.get('#column-a').drag('#column-b')

    // Optional: assert that they’ve swapped
    cy.get('#column-a header').should('have.text', 'B')
    cy.get('#column-b header').should('have.text', 'A')
  })

   