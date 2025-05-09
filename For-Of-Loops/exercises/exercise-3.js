/*
1. Create a Map called "backpack" and add entries
2. Use a for-of loop to loop over "backpack" and print out the name and the value for each item in the following format:
Name: $Value
For example: Sword: $300
3. Also print out the total value of all items in the backpack
*/

const backpack = new Map([["Sword", 300], ["Banana", 5], ["Gold Nagget", 10000], ["Pants", 100]]);

let total = 0;

for (const [name, price] of backpack) {
    // print out the name and the value for each item
    console.log(`${name}: $${price}`);

    // print out the total value of all items in the backpack
    total += price;
    
}

console.log(`Total: $${total}`);