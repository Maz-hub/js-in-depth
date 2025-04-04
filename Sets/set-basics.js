// unique values

const mySet = new Set();

mySet.add(10);
mySet.add(20);
mySet.add(30);
mySet.add(40);
mySet.add(50);

console.log(mySet); // Set(5) { 10, 20, 30, 40, 50 }

// Add
mySet.add(10);
mySet.add(10);

console.log(mySet); // Set(5) { 10, 20, 30, 40, 50 }

mySet.add("10");
console.log(mySet); // Set(6) { 10, 20, 30, 40, 50, '10' }

// delete
mySet.delete(20);
console.log(mySet); // Set(5) { 10, 30, 40, 50, '10' }

// test to see if the Set HAS an item
console.log(mySet.has(30)); // true
console.log(mySet.has(300)); // flase

// Get the size value - print out
console.log(mySet.size); // 5
