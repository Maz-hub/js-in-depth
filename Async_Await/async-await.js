/*
async/await is a cleaner way to write code that waits for a Promise to finish — instead of chaining .then().

! can only use await inside an async function
*/

const makeTimeout = (ms) => {
const timeout = new Promise((result, reject) => {
    setTimeout(() =>  {
        result ("All done!");
    }, ms);
});

return timeout;
};

console.log("Program starting...") // 1

makeTimeout(1000).then((result) => {
    console.log("from .then()", result) // 3
});


const fetchStuff = async() => {
    const result = await makeTimeout(1000);
    console.log("from async()", result)   
}

// call the function to execute the code
fetchStuff();


console.log("Program complete") // 2

/*
Program starting...
Program complete
All done!
*/