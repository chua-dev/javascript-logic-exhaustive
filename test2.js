const testFolder = './img/';
const fs = require('fs');

fs.readdirSync(testFolder).forEach(file => {
  console.log(file);
});