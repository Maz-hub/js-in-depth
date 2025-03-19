/*
1. Create the following array called "items"
    ["light", "banana", "phone", "book", "mouse"];

2. Create a new array called "caps" that:
    - maps over "items" and capitalizes each item

3. Create a const called "concat" that:
    - uses reduce to concatenate all strings in "caps", using a space to seperate each item

4. Print out "items", "caps" and "concar"

BONUS: Can you do steps 1-3 in one line ?
*/

const items = ["light", "banana", "phone", "book", "mouse"]
  .map((item) => {
    return item.toUpperCase();
  })
  .reduce((result, cap) => {
    return result + cap + " ";
  }, "");

console.log(items); //LIGHT BANANA PHONE BOOK MOUSE

// before when declaring const:
// [ 'light', 'banana', 'phone', 'book', 'mouse' ]
//[ 'LIGHT', 'BANANA', 'PHONE', 'BOOK', 'MOUSE' ]
//LIGHT BANANA PHONE BOOK MOUSE
