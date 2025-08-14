const { merge } = require('mochawesome-merge'); 
const fs = require('fs');

const reportGlob = 'reports/*.json';
const outputFile = 'reports/merged-report.json';

merge({ files: [reportGlob] }).then(report => {
  fs.writeFileSync(outputFile, JSON.stringify(report, null, 2));
  console.log(`Merged report created at: ${outputFile}`);
}).catch(err => {
  console.error(' Merge failed:', err);
});
