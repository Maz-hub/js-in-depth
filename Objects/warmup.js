/*
1. Create an object called "mexico" with the following properties:
    - id: 24
    - name: "Mexico"
    - capital: "Mexico City"
    - neigbours: ["USA", "Guatemala", "Belize"]

2. Print out "Mexico" to the terminal
3. Change "id" to be 25
4. Add "Honduras" to the list of neigbours to "mexico"
5. Print out "mexico" to the terminal again
*/

const mexico = {
  id: 24,
  name: "Mexico",
  capital: "Mexico City",
  neigbours: ["USA", "Guatemala", "Belize"],
};

console.log(mexico);

mexico.id = 25;

mexico.neigbours.push("Honduras");

console.log(mexico);
