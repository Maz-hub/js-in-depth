const myMap = new Map();

console.log(myMap); // Map(0) {} empty object

//  to add
myMap.set("name", "Maz"); // key, value
myMap.set("age", 43);

console.log(myMap); // Map(2) { 'name' => 'Maz', 'age' => 43 }

// to get
const age = myMap.get("age");
console.log(age); // 43

// to change
myMap.set("age", 44);
console.log(myMap); // Map(2) { 'name' => 'Maz', 'age' => 44 }

// check key exists inside the object
console.log(myMap.has("name")); // true
console.log(myMap.has("last name")); // false

// get the size value
console.log(myMap.size); // 2 key value paires

// delete
myMap.delete("age");
console.log(myMap); // Map(1) { 'name' => 'Maz' }
