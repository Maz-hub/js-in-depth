/*
1. Create the following array called "row":
    [10, 20, 30, 40, 50];

2. Create a new array called "matrix" that:
    - maps over "row" and return each item, but in an array
    (a 2-dimensional array as a result)

3. Print out both arrays
*/

const row = [10, 20, 30, 40, 50];

const matrix = row.map((e) => {
    const array = [];
    array.push(e)
    return array;
})

console.log(matrix);

// return[e];