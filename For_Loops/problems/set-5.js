/* Print all numbers from 1 to 20. */
console.log("Challenge 1");
for (let i = 1; i <= 20; i++) {
  console.log(i);
}

/* Print all even numbers from 2 to 40. */
console.log("Challenge 2");

for (let j = 2; j <= 40; j += 2) {
  console.log(j);
}

/* Print all odd numbers between 15 and 35. */
console.log("Challenge 3");
for (let k = 15; k <= 35; k += 2) {
  console.log(k);
}

/* Sum all numbers from 1 to 50 and print the total. */
console.log("Challenge 4");

let sum = 0; // ✅ You declared sum OUTSIDE the loop — correct! It needs to keep adding values.

for (let i = 1; i <= 50; i++) {
  // ✅ Looping from 1 to 50 — perfect!
  sum += i; // ✅ Adding each number to sum / sum = sum + i — you accumulate the total sum.
  console.log(sum); // ✅ (Optional for tracking progress — nice touch to see how sum grows!)
}
console.log("Final sum", sum); // to only print the final sum (result)

/* 
Print numbers from 1 to 100, but:

1. If a number is divisible by 3, print "Fizz" instead of the number.
2. If a number is divisible by 5, print "Buzz" instead of the number.
3. If a number is divisible by both 3 and 5, print "FizzBuzz".
4. If none of these, just print the number itself.
*/

console.log("Challemge 5");

for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}

/* First check if divisible by BOTH 3 and 5 — ✅ Super important to put this first, so numbers like 15, 30, 45 become "FizzBuzz", not just "Fizz" or "Buzz". */
