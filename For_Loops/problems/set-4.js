/* 
1. Create a for loop that runs from 1-100
2. Every 10 loops, print out: Checkpoint! and the loop number
3. On loop 50, print out ONLY: Half way there !
4. On the final loop (100) print out ONLY: You made it!
5. AFTER the loop is done, print out: All, done!
*/

for (let i = 1; i <= 100; i++) {
  if (i === 50) {
    console.log("Half way there !!!");
  } else if (i == 100) {
    console.log("You made it!");
  } else {
    if (i % 10 === 0) {
      console.log("Checkpoint! ", i);
    }
  }
}
console.log("All done!");
