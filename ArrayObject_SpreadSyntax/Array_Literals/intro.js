const array = [10, 20, 30, 40, 50];

const arrayCopy1 = [];
for(const value of array) {
    arrayCopy1.push(value);
}

arrayCopy1.push(60);
arrayCopy1.push(70);
arrayCopy1.push(80);

console.log(array); // [ 10, 20, 30, 40, 50 ]
console.log(arrayCopy1); // [10, 20, 30, 40, 50, 60, 70, 80]

const arrayCopy2 = [1, 2, 3, 4, 5, ...array, 11, 22, 33, 44, 55];
console.log(arrayCopy2);

/*
[
   1,  2,  3,  4,  5, 10,
  20, 30, 40, 50, 11, 22,
  33, 44, 55
]
*/