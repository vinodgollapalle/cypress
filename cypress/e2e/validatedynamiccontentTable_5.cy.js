describe('Validate Chrome CPU usage matches the label', () => {
  it('Locate Chrome Row and Compare its CPU value in the table with the yellow label ', () => {
    cy.visit('https://practice.expandtesting.com/dynamic-table')

    // Wait until Chrome row appears
   cy.get("table.table-striped tbody tr").each(($tr) => {
    const $td = $tr.find('td');
    const browserName = $td.eq(0).text().trim();

        if (browserName == 'Chrome') {
      
      const cpuUsageFromTable = [...$td].find(td => td.innerText.includes('%'))?.innerText.trim();    
      cy.get('#chrome-cpu').invoke('text').then((fullText) => {
       
        const match = fullText.match(/(\d+(\.\d+)?%)/); 
        const cpuUsageFromCard = match ? match[0] : null;      
        
        expect(cpuUsageFromCard).to.eq(cpuUsageFromTable);
      }
        
           )
        }
      }
    )
  }
)
}
)
