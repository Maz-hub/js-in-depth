/*
1. Create an array called "bools" of the following booleans:
    [true, true, false, true, false, false]

2. Map over "bools" and do the following:
    - if "true" return a ramdom number in it's place
    - if "false", return 0

3. Print out both arrays
*/

const bools = [true, true, false, true, false, false];

/*const mapOver = bools.map((bool) => {
    if(bool === true) {
        return Math.random();
    }
    return 0;
});*/

// TERNARY OPERATOR
const mapOver = bools.map((bool) => bool ? Math.floor(Math.random() * 10) + 1 : 0);

console.log(bools);
console.log(mapOver);

