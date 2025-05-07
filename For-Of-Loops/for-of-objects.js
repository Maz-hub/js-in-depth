const stockItem = {
    id: 54,
    price: 1.32,
    name: "Apple",
    quantity: 6,
};

for (const item of Object.entries(stockItem)) {
    console.log(item) // giving back an ARRAY !!!
}

/*
Output:
[ 'id', 54 ]
[ 'price', 1.32 ]
[ 'name', 'Apple' ]
[ 'quantity', 6 ]
*/

console.log(Object.keys(stockItem)); // [ 'id', 'price', 'name', 'quantity' ]

console.log(Object.values(stockItem)); // [ 54, 1.32, 'Apple', 6 ]


