/* 
Write a function called "noRemainder":

1. This function has 2 parameters:
    - number
    - mod
2. The function will return:
    - true: if "number" is evenly divisible by "mod" (no remauînder)
    - false: if "number" is not evenly divisible by "mod" (has a remainder)

3. Call your function like so:
    const result1 = noRemainder(10, 7) // result should be false
    const result2 = noRemainder(100, 10) // result should be true
*/

const noRemainder = (number, mod) => {
  /*  if (number % mod === 0) {
    return true;
  } else {
    return false;
  }*/
  if (number % mod === 0) {
    return true;
  }
  // in this case, no need to add else statement
  return false;
};

const result1 = noRemainder(10, 7);
const result2 = noRemainder(100, 10);

console.log(result1);
console.log(result2);
