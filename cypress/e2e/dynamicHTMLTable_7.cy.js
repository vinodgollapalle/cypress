describe('Log browser name and CPU usage on dynamic-table', () => {
  it('Logs browser and CPU usage', () => {
    cy.visit('https://practice.expandtesting.com/dynamic-table')

    cy.get('table.table-striped tbody tr').each(($row, index) => {
      
      const browserName = $row.find('td').eq(0).text()
      const cpuUsage = $row.find('td').eq(2).text()
      cy.get('table.table-striped tbody tr').should('have.length.at.least', 1)

      cy.log(`Row ${index + 1}: Browser = ${browserName}, CPU Usage = ${cpuUsage}`);

      expect(browserName).to.not.be.empty
      expect(cpuUsage).to.not.be.empty
    }
)
}
  )

  it('Assert No cell is empty and Verify at least one browser has CPU usage above 15%', () => {
    cy.visit('https://practice.expandtesting.com/dynamic-table')
  let cpuAbove15Found = false;

  cy.get("table.table-striped tbody tr").each(($row, rowIndex, $rows) => {
    const $cells = $row.find('td');
   
    const browserName = $cells.eq(0).text().trim();    // 1. Assert browser name is not empty
    expect(browserName).to.not.be.empty;


 $cells.each((i, td) => {
      const cellText = td.innerText;
      expect(cellText).to.not.be.empty;      // 2. Assert no cell is empty
    });

   
    const cpuCell = [...$cells].find(td => td.innerText.includes('%'));     // 3. Check if any CPU usage > 15%
    if (cpuCell) {
      const cpuValue = parseFloat(cpuCell.innerText.replace('%', ''));
      if (cpuValue > 15) {
        cpuAbove15Found = true;
      }
    }
  }).then(() => {
    
    expect(cpuAbove15Found,"CPU Usage above 15 not found").to.be.false;   // Final assertion after looping all rows
  });
}
)
}
)