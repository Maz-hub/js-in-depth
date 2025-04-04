/*
1. Create an array called "points" with the following calues: 
[10, 20, 10, 30, 15, 15, 35, 60, 10]

2. Print out the UNIQUE points inside "points" (hint: use sets, as it only uses unique values)
*/

const points = [10, 20, 10, 30, 15, 15, 35, 60, 10];

const uniquePoints = new Set();

for (let i = 0; i < points.length; i++) {
  uniquePoints.add(points[i]);
}

console.log(uniquePoints);
