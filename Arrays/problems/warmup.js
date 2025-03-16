/*
1. Create an array with solar system strings
2. Add the string "Jupiter" to the end of the array
3. Add the string "Sun" to the start of the array
4. Remove the last 2 strings from the array
5. Remove the first 2 strings from the array
*/

const planets = ["Mercury", "Venus", "Earth", "Mars"];

// Add the string "Jupiter" to the end of the array
planets.push("Jupiter");
console.log(planets);
// Add the string "Sun" to the start of the array
planets.unshift("Sun");
console.log(planets);
// Remove the last 2 strings from the array
planets.pop();
planets.pop();
console.log(planets);
// Remove the first 2 strings from the array
planets.shift();
planets.shift();
console.log(planets);
