// SET: no duplicate value
const mySet = new Set();

mySet.add("Ironman");
mySet.add("Thor");
mySet.add("Black Widdow");
mySet.add("Ironman");

console.log(mySet); // Set(3) { 'Ironman', 'Thor', 'Black Widdow' }

const mySetCopy = [...mySet, "Batman"];

console.log(mySetCopy); // [ 'Ironman', 'Thor', 'Black Widdow', 'Batman' ] no longer a Set, but an array

