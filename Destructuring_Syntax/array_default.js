const cities = ["Cairo", "Bern"];

const [, bern = "B", beijing = "Beijin"] = cities;
/*
bern = "B" -> this is saying, if bern ends up underfined, please give it a default value of whatever. And if it's NOT underfined, then just ignore the value.
*/

console.log(bern); // Bern
console.log(beijing); // Beijin