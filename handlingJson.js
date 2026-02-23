// Write code handling JSON request body.

req.on("data", chunk => body += chunk);
req.on("end", ()=>{
    const data = JSON.parse(body);
    console.log(data);
});