/* Print numbers from 50 to 100. */

console.log("Challenge 1");

for (let i = 50; i <= 100; i++) {
  console.log(i);
}

/* Print all even numbers from 100 down to 2 (in reverse). */
console.log("Challenge 2");

for (let j = 100; j >= 2; j -= 2) {
  console.log(j);
}

/* Sum all numbers between 1 and 50 that are divisible by 3. Print the total sum after the loop. */
console.log("Challenge 3");

let totalSum = 0;

for (let k = 1; k <= 50; k++) {
  if (k % 3 === 0) {
    totalSum += k;
  }
}
console.log("total is: ", totalSum);

/* Print a simple pattern:
 *
 **
 ***
 ****
 *****
 */

console.log("Challenge 4");

for (let a = 1; a <= 5; a++) {
  let string = "";
  for (let b = 1; b <= a; b++) {
    string += "*";
  }
  console.log(string);
}

console.log("reverse");

for (let a = 5; a >= 1; a--) {
  let star = "";
  for (let b = 1; b <= a; b++) {
    star += "*";
  }
  console.log(star);
}

console.log("mirror");

for (let a = 1; a <= 5; a++) {
  let rows = "";
  for (let s = 1; s <= 5 - a; s++) {
    rows += " ";
  }
  for (let b = 1; b <= a; b++) {
    rows += "*";
  }
  console.log(rows);
}
