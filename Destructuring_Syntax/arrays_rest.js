const countries = ["Switzerland", "Russia", "USA", "Croatia", "China", "Sweden"];

const [swiss, MotherRussia, ...rest] = countries;

/*
...rest -> doesn't matter the name of variable !
*/

console.log(swiss); // Switzerland
console.log(MotherRussia); // Russia

console.log(rest); // [ 'USA', 'Croatia', 'China', 'Sweden' ]