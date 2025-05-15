/*
1. Print out "Program started" at the start of your code
2. Create a Promise that resolves after 3 seconds and rejects after 2 seconds
3. Log out the promise while it's pending
4. Print out "Program in progre..." as well
5. Print out "Program complete" if the promise fulfills
6. Print out "Program failure" if the promise rejects
*/

console.log("Program started");

const myProgram = new Promise ((resolve, reject) => {
    setTimeout(() => {
        resolve("Program complete");
    }, 3000)

    setTimeout(() => {
        reject("Program failure");
    }, 2000)
})

console.log(myProgram);
console.log("Program in progress...")

myProgram.then((resValue) => {
    console.log(resValue);
})
.catch((rejValue) => {
    console.log(rejValue)
});