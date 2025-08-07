describe('Log Each Browsername and its cpu usage', () => {
  it('use .each() to log each browser name and its CPU usage.', () => {
    cy.visit('https://practice.expandtesting.com/dynamic-table')
cy.get("table[class='table table-striped'] tbody tr ").each(($tr,i)=>{

    const $td = $tr.find('td');
    const browsername = $td.eq(0).text();
     const cpuUsage = [...$td].find(td => td.innerText.includes('%'))?.innerText;

    cy.log('Browser Name is ',browsername , 'cpu usage', cpuUsage);
    
    })
  })
  it('Count how many browsers have CPU usage over 20%.',()=>{     
       let count=0
 cy.visit('https://practice.expandtesting.com/dynamic-table')
   cy.get("table[class='table table-striped'] tbody tr ").each(($tr,i)=>{

    const $td = $tr.find('td');
    const browsername = $td.eq(0).text();
    const cpuUsageText = [...$td].find(td => td.innerText.includes('%'))?.innerText;
    
    if (cpuUsageText) {
      const cpuValue = parseFloat(cpuUsageText.replace('%', ''));

      if (cpuValue > 20) {
        count++;
             }
    }
  }).then(() => {
    cy.log('Total browser count with>20 % is' , count )


   }
  )
  }
)
})
