/*
1. Create an object called "myPet"
2. Print out "myPet" to the terminal
3. Add a new property: color: "Black"
4. Change "breed" to be "Beagle"
5. Remove "Data" from the list of friends for "myPet"
6. Print out "myPet" to the terminal again
7. Add "Chip" to the list of friends for "myPet"
8. Print out "myPet" to the terminal again
*/

const myPet = {
  name: "Sudo",
  type: "Dog",
  breed: "Poodle",
  age: 7,
  friends: ["Bit", "Byte", "Data"],
};

console.log(myPet);

myPet.color = "Black";

myPet.breed = "Beagle";

myPet.friends.pop();

myPet.friends.push("Chip");

console.log(myPet);
