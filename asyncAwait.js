// Write async/await example.
async function test(){
  return "Hello";
}
async function run(){
  let data = await test();
  console.log(data);
}
run();
