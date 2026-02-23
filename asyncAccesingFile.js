// Write async function accessing file system.

const fs = require("fs").promises;
async function read(){
    const data = await fs.readFile("file.txt","utf8");
    console.log(data);
}
read();