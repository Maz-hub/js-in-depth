/*
1. Create an array called "companies" of the following string:
    ["apple", "tesla", "spaces", "amazon", "meta", "google"];

2. Create a const called "modded" that reduces the companies
    - array to a string of companies that DO NOT start with the letter "a", separated by dashes

3. Print out "companies" and "modded"

BONUS: Get rid of the trailing "-" ?
*/

const companies = [
  "apple",
  "tesla",
  "spaces",
  "amazon",
  "meta",
  "google",
  "ibm",
];

const modded = companies.reduce((result, company, i) => {
  if (company.startsWith("a")) {
    return result;
  }

  if (i === companies.length - 1) {
    return result + company;
  }
  return result + company + " - ";
}, "");

console.log(modded);
