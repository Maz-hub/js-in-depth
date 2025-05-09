/*
1. Create a variable called "ages" that points to an array
2. Create an array called "results" that starts off empty
3. Use a for-of loop to loop over "ages" and add an Object to "results" with "age" key having the value of the "age" beeing looped over. 
Also add a "name" key that is always "Dragon" (e.g. {age: 10, name Dragon}, {age:42, name: "Dragon"})
4. Print out the results
*/

const ages = [10, 42, 15, 22, 11, 74, 39, 2];

const results = [];

for (const age of ages) {
    const result = {
        age: age,
        name: "Dragon"
    }
    results.push(result);
}

console.log(results);