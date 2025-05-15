/*
1. Print out "Program started" at the start of your code
2. Create a Promise that resolves after 3 seconds
3. Log out the promise while it's pending
4. Print out "Program in progress..." as well
5. Print out "Step 1 completed" when the first promise fulfills
6. Have the first promise return another new Promise that will fulfill 3 seconds with the message: "Step 2 complete"
7. Print out the message from the second promise after it fulfills ("Step 2 complete")
HINT: Use setTimeout for the delay
*/

console.log("Program Started");

const myPromise = new Promise ((resolve, reject) => {
    setTimeout(() => {
        console.log("Program in progress...")
        resolve();
    }, 3000)
});

console.log(myPromise);

myPromise.then(() => {
    console.log("Step 1 completed");
    
})
.then(() => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            console.log("Step 2 complete");
        }, 3000)
    })
})