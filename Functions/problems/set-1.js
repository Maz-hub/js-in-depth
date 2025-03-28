/* 
Write a function called "chill" that does the following:
1. Prints out at the start: "Doing some chilling:"
2. Then, print out:
    "Chill...1"
    "Chill...2"
    "Chill...3"
    ...
    "Chill...10"
3. Then finally prints out "That was ice cold"

When you are done, call the function once.
*/

const chill = () => {
  console.log("Doing some chilling: ");

  for (let i = 1; i <= 10; i++) {
    console.log("Chill...", i);
  }
  console.log("That was ice cold !");
};

chill();
