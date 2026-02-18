// Write code to parse JSON file.

const fs = require('fs');

let data = fs.readFileSync('data.json');
let obj = JSON.parse(data);
console.log(obj);