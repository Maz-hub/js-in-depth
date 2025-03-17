/*
1. Create an array called "prices" with the following values:
    [1.23, 19.99, 85.2, 32.87, 8, 5.2]

2. Create a new array using map called "taxedPrices" that:
    - If the price is greater than 10, add 20% tax to it
    - Otherwise do not add any tax to it
*/

const prices = [1.23, 19.99, 85.2, 32.87, 8, 5.2];

// 1.20:
// 1 = 100% (the original price)
// 0.20 = 20% (the tax)
// Together: 1.20 = 120% of the price

const taxedPrices = prices.map((price) => price >= 10 ? price * 1.20 : price);

console.log(prices);
console.log(taxedPrices);



/* const taxedPrices = prices.map((price) => {
    if (price >= 10) {
        return price + (price * 0.20)
    }
    return price
}); */
