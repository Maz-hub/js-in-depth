/*
1. Create an object called "houseForSale"
2. Print out "houseForSale"
3. Delete the property with the key "built"
4. Change the age of the owner to be 30 inside the "houseForSale"
5. Print out the maximum offerPrice (use reduce)
6. Add a new property: "sale price" -> 31200
7. Print out "houseForSale" to the terminal
*/

console.log("---1---");
const houseForSale = {
  area: 940,
  value: 320000,
  streetName: "Fifth Street",
  built: "2012",
  owner: {
    name: "Blake",
    age: 29,
  },
  offers: [290000, 295000, 315000, 312000],
};
console.log(houseForSale);

console.log("---3---");
delete houseForSale.built;
console.log(houseForSale);

console.log("---4---");
houseForSale.owner.age = 30;
console.log(houseForSale);

console.log("---5---");
const offerPrice = houseForSale.offers.reduce((result, offer) => {
  return result > offer ? result : offer;
}, 0);
console.log(offerPrice);

console.log("---6---");
houseForSale["sale price"] = 31200;
console.log(houseForSale);
