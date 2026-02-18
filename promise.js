// Write promise based function.

function task(){
  return new Promise((res, rej)=>{
    res("Completed");
  });
}
task().then(console.log);