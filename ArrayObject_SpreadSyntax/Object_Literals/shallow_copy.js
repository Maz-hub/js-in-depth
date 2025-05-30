const price = [[10], [20], [30], [40], [50]]; // 2 dimensional array

const copy = [...price]; // Shallow copy

console.log(copy); // [ [ 10 ], [ 20 ], [ 30 ], [ 40 ], [ 50 ] ]
/*
If we spread out prices, we will get a copy of prices but it turns out that the copies ONLY work for PRIMITIVE TYPES !
Not making copies of reference types -> like objects and arrays and other objects (maps, sets)
*/

price [0].push(15);
console.log(price); // [ [ 10, 15 ], [ 20 ], [ 30 ], [ 40 ], [ 50 ] ]

console.log(copy); // [ [ 10, 15 ], [ 20 ], [ 30 ], [ 40 ], [ 50 ] ]

/*
Arrays objects and other reference type do not get copied when using spread operator. Super important !!!
*/

price[4].pop();
console.log(price); // [ [ 10, 15 ], [ 20 ], [ 30 ], [ 40 ], [] ]

console.log(copy); // [ [ 10, 15 ], [ 20 ], [ 30 ], [ 40 ], [] ] Copy has also been changed, even though we never popped from copy. 