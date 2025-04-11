const characters = ["Frodo", "Harry", "Thanos", "Iron Man"];

for (let i = 0; i < characters.length; i++) {
  console.log(characters[i]);
}

console.log("----------------------------------------------");

for (const character of characters) {
  console.log(character);
}

console.log("---Capitalize---------------------------------");

for (let i = 0; i < characters.length; i++) {
  characters[i] = characters[i].toUpperCase();
}

console.log(characters);

for (const character of characters) {
  console.log(character);
}
