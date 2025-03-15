/* 
Challenge 6 — Multiples of 7 with a twist (Medium-Hard, but you're ready!):
👉 Instructions:

Loop through numbers from 1 to 100.
If a number is a multiple of 7, print "Lucky Number: X" (X is the number).
If a number is a multiple of both 7 and 2, print "Super Lucky: X".
If it's not a multiple of 7, just print the number.
*/

for (let i = 1; i <= 100; i++) {
  if (i % 7 === 0 && i % 2 == 0) {
    console.log("Super Lucky: ", i);
  } else if (i % 7 === 0) {
    console.log("Lucky Number: ", i);
  } else {
    console.log(i);
  }
}
