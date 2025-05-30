const stock = new Map();

stock.set("Apples", 3);
stock.set("Banana", 10);
stock.set("Pineapple", 4);

console.log(stock); // Map(3) { 'Apples' => 3, 'Banana' => 10, 'Pineapple' => 4 }

const myMapArray = [...stock];

console.log(myMapArray); // [ [ 'Apples', 3 ], [ 'Banana', 10 ], [ 'Pineapple', 4 ] ]
