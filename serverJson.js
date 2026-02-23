// Write server returning JSON response.

res.setHeader("Content-Type","application/json");
res.end(JSON.stringify({msg:"Hello"}));