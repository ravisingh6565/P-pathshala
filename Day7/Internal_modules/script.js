const fs = require('node:fs');

 const data = fs.readFileSync('myReadMe.txt',{encoding:'utf8'});

 console.log(data);
