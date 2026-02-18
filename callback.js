// Write callback based asynchronous function.

function fetchData(callback){
    setTimeout(() => callback("Done"),1000);
}
fetchData(console.log);