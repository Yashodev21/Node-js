// Write fs code to rename file.

    const fs = require("fs");
fs.rename("old.txt","new.txt", err=>{
    if(err) throw err;
});