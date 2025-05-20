const makeTimeout = (ms) => {
const timeout = new Promise((result, reject) => {
    setTimeout(() =>  {
        result ("All done!");
    }, ms);
});

return timeout;
};

console.log("Program starting..."); // 1

const fetchData = async () => {
    console.log("Fetching first set of data"); // 2
    const result1 = await makeTimeout(2000);
    console.log("Fetching second set of data...", result1); // 4
    const result2 = await makeTimeout(2000);
    console.log("Done fetching data !!! ->", result2); // 5

}

fetchData();

console.log("Program complete...") // 3

/*
Program starting...
Fetching first set of data
Program complete...
Fetching second set of data... All done!
Done fetching data !!! -> All done!
*/