/*
You are given an array of prices.

1. Use map() to create a new array called discountedPrices.
2. For each price in the array:
    - If the price is greater than 100, apply a 15% discount.
    - If the price is 100 or less, leave it unchanged.
3. Print the new array of discounted prices.
*/

const prices = [45, 120, 87, 200, 150, 30];

const discountedPrices = prices.map((price) => {
    if (price >= 100) {
        return price - (price * 0.15);
    }
    return price;
});

console.log(prices);
console.log(discountedPrices);
