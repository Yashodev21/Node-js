// Write file upload handling using fs.

const fs = require("fs");

fs.writeFile("uploaded.txt", "File content here", (err) => {
    if (err) throw err;
    console.log("File saved");
});