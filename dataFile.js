// /Write code to write data into file.

const fs = require('fs');

fs.writeFile('file.txt', 'Hello JS', (err) =>{
    if (err) throw err;
});