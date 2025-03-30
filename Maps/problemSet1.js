/*
1. Create a Map called "mexico" with the following properties:
    - id: 24
    - name: "Mexico"
    - capital: "Mexico City"
    - neigbours: ["USA", "Guatemala", "Belize"]

2. Print out "Mexico" to the terminal
3. Change "id" to be 25
4. Add "Honduras" to the list of neigbours to "mexico"
5. Print out "mexico" to the terminal again
*/

const mexico = new Map();

mexico.set("id", 24);
mexico.set("name", "Mexico");
mexico.set("capital", "Mexico City");
mexico.set("neigbours", ["USA", "Guatemala", "Belize"]);

console.log(mexico);

mexico.set("id", 25);

// ["USA", "Guatemala", "Belize"]
mexico.get("neigbours").push("Honduras");

console.log(mexico);
