// Explain how Promises solve callback hell.

function step(msg) {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log(msg);
      resolve();
    }, 1000);
  });
}
step("Step1")
.then(() => step("Step2"))
.then(() => step("Step3"));