// Write code demonstrating callback hell.

fs.readFile("a.txt","utf8",(e,data)=>{
    fs.writeFile("b.txt",data,(e)=>{
        fs.readFile("b.txt","utf8",(e,data2)=>{
            console.log(data2);
        });
    });
});