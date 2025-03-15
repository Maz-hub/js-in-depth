/* 
1. Create a variable called "loggedIn" that starts off as false
2. Create a for loop that loops while "loggedIn" is false
3. Each loop, print out "Incorrect login credentials"
4. After 3 loop iterations, change "loggedIn" to be true
5. After the loop is done, print out "Successfully logged in !"
*/

for (let loggedIn = false, i = 1; !loggedIn; i++) {
  console.log("Incorrect login credentials");

  if (i === 3) {
    loggedIn = true;
  }
}
console.log("Successfully logged in !");
