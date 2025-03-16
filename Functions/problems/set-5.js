/*
Create a function called greetUser that:

Takes one parameter called name.
Returns: "Hello, [name]!"
*/
console.log("Challenge 1: ");
const greetUser = (name) => {
  return name;
};

const userName = greetUser("John");

console.log("Hello, ", userName);

/* --------------------------------------------------------------- */

/*
Create a function called doubleTrouble that:

Takes one parameter called number.
If number is less than 10, return number * 2.
If number is 10 or more, return number.
*/
console.log("Challenge 2: ");

const doubleTrouble = (number) => {
  if (number < 10) {
    return number * 2;
  } else if (number > 10) {
    return number;
  }

  return false;
};
console.log(doubleTrouble(4)); // 8
console.log(doubleTrouble(12)); // 12

/* --------------------------------------------------------------- */

/*
Create a function called countdownChill that:

Takes one parameter called start.
It prints: "Chill... [number]" for each number from start down to 1.
After finishing, print "Done chilling!".

countdownChill(5);
// Chill... 5
// Chill... 4
// Chill... 3
// Chill... 2
// Chill... 1
// Done chilling!
 */

console.log("Challenge 3: ");

const countdownChill = (start) => {
  for (let c = start; c >= 1; c--) {
    console.log("Chill...", c);
  }

  console.log("Done Chilling!");
};

countdownChill(5);

/* --------------------------------------------------------------- */

/*
Create a function called sumMultiplesOf that:

Takes two parameters: limit, multiple.
Sums all numbers from 1 to limit that are divisible by multiple.
Returns the sum.
*/

console.log("Challenge 4: ");

const sumMultiplesOf = (limit, multiple) => {
  let sum = 0;
  for (let i = 1; i <= limit; i++) {
    if (i % multiple === 0) {
      sum += i;
    }
  }
  return sum;
};

console.log(sumMultiplesOf(10, 3)); // 18 (3 + 6 + 9)
console.log(sumMultiplesOf(20, 5)); // 50 (5 + 10 + 15 + 20)

/* --------------------------------------------------------------- */

/*
Write a cube function that takes one number and returns its cube.
Write a sumOfCubes function that takes two numbers:
Call cube() for each.
Add results.
Return the sum.
Test it with a few examples (like 2 and 3, or 3 and 4).
*/

console.log("Challenge 5:");

const cube = (number) => {
  return number ** 3;
};

const sumOfCubes = (num1, num2) => {
  return cube(num1) + cube(num2);
};

const sum = sumOfCubes(2, 3);

console.log(sum);

/* --------------------------------------------------------------- */

/* 
Create a function called sumUntilLimit that:

Takes one parameter called limit (a number).
Loops from 1 to limit.
Adds up all numbers from 1 to limit.
After the loop, returns the total sum.
*/

console.log("Challenge 6:");

const sumUntilLimit = (limit) => {
  let sum = 0;
  for (let i = 1; i <= limit; i++) {
    sum += i;
  }
  return sum;
};
const result = sumUntilLimit(5);
console.log(result);
