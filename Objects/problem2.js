/*
1. Create 3 objects: banana, apple, candy
2. Create an object, called "store" with properties
3. Print out "store"
4. Only print out all the products objects in "store"
6. Change the price of the banana object through the store object to be 1.75
7. Print out both "store" and "banana"
8. Change the price of the candy object directly to be 4.99
9. Print out both "store" and "candy"
*/

const banana = {
  name: "banana",
  quantity: 1,
  price: 1.95,
};

const apple = {
  name: "apple",
  quantity: 1,
  price: 1.45,
};

const candy = {
  name: "candy",
  quantity: 1,
  price: 3.5,
};

const store = {
  storeNumber: 1,
  locationCity: "Milan",
  locationCountry: "Italy",
  products: [banana, apple, candy],
};

for (let i = 0; i < store.products.length; i++) {
  console.log(store.products[i]);
}

console.log(store.products[2]);

console.log("--- 5 ---");
store.products[0].price = 1.75;
// console.log(store);
console.log(banana);

console.log("--- 6 ---");

store.products[2].price = 4.99;

console.log(store);
console.log(candy);
