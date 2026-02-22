// Explain async/await execution flow.

// Function pauses at await
// Event loop handles other tasks
// Promise resolves
// Function resumes

async function load() {
  try {
    let a = await readA();
    let b = await readB();
    console.log(a,b);
  } catch(e){
    console.log(e);
  }
}