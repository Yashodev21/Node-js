// Write async/await with try-catch.

async function run() {
    try {
        let data = await Promise.resolve("Success");
        console.log(data);
    } catch (err) {
        console.log(err);
    }
}
run();