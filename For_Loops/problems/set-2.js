/* 
Create a for loop that will print out all the even numbers between 10 and 40. 

Do the same for all odd numbers as well.
*/
console.log("EVEN NUMBERS");

for (let i = 10; i <= 40; i += 2) {
  console.log(i);
}

console.log("ODD NUMBERS");

for (let j = 10; j <= 40; j++) {
  if (j % 2 === 1) {
    console.log(j);
  }
}
