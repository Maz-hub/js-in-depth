/*
1. Create an array called "countries"
2. Filter over "countries" and keep only the countries that have
a blank space in their name.
3. Print out both arrays
*/

const countries = [
  "Russia",
  "China",
  "South Africa",
  "Sweden",
  "United States",
];

const blankSpace = countries.filter((country) => {
  if (country.includes(" ")) {
    return true;
  }

  return false;
});

console.log(countries);
console.log(blankSpace);
