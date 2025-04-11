const myMap = new Map();

myMap.set("name", "Maz");
myMap.set("age", 20);
myMap.set("location", "Switzerland");

console.log(myMap);

for (const item of myMap) {
  console.log(item);
  console.log(item[0], item[1]);
}
