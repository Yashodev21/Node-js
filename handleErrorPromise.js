// Write code to handle error in promise.

new Promise((res, rej)=>{
  rej("Error occurred");
})
.catch(err=> console.log(err));
