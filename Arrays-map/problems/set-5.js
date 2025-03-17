/*
You are given an array of lowercase names like this:

const names = ["alice", "bob", "charlie", "daniel"];

Create a new array using map() that capitalizes only the first letter of each name.
The rest of the letters should stay lowercase.
*/

const names = ["alice", "bob", "charlie", "daniel"];

const capitalize = names.map((string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
})

console.log(capitalize);