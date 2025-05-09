/*
1. Create an empty Set called "names"
2. Create another empty Set called "capsNames"
3. Add the names to the Set
4. Use a for-of loop to loop over "names" and adds the capitalized version of each name to the "capsNames" Set
*/

const names = new Set(["Bilbo", "Hermione", "Spock", "Leia"]);

const capsNames = new Set();

// names.add("Bilbo");
// names.add("Hermione");
// names.add("Spock");
// names.add("Leia");


for (const name of names) {
    capsNames.add(name.toUpperCase());
}

console.log(capsNames);