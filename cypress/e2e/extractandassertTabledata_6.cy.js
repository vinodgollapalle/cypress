describe('Find the column index for "Memory" and Print each row browser and corresponding memory usage', () => {
  it('Find the column index for "Memory"', () => {
    cy.visit('https://practice.expandtesting.com/dynamic-table')
cy.get("table.table-striped thead tr th").then(($tr) => {
    let memoryColumnIndex = -1;

    $tr.each((index, th) => {
      const tr = th.innerText;
      if (tr == 'Memory') {
        memoryColumnIndex = index;
      }
    });

    cy.log('Memory column index: ',memoryColumnIndex);
   
    cy.get("table.table-striped tbody tr").each(($trow) => {
      const $cells = $trow.find('td');
      const browserName = $cells.eq(0).text().trim();
      const memory = $cells.eq(memoryColumnIndex).text();

      cy.log(browserName ,' Memory:',memory);
    });

    
    })
  })
})
