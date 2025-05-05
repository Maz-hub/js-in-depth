/*
🧪 Exercise 3: Total cost calculator 🛒
🧠 Your goal: Create a function that takes two numbers:
- the price of one item
- the number of items
And returns the total cost.

✅ Requirements:
1. Name the function calculateTotalCost
2. Parameters: price and quantity
3. Multiply them and return the result
4. Store it in a variable
5. console.log() the final cost
*/

const calculateTotalCost = (price, quantity) => {
    return (price * quantity).toFixed(2);
}

const result = calculateTotalCost(3.99, 3);

console.log(typeof result);