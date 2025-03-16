/*
Write a function called "login":

1. The function has 2 parameters:
    - username: this should be a string
    - password: this should be a string too

2. Return true in the following casse:
    - username is "admin" (any password, doesn't matter)
    - username is "monkey" and password is "123"
    - username is "moomoo" and password is "farm"

3. In all other cases, return false-
*/

const login = (username, password) => {
  if (
    username === "admin" ||
    (username === "monkey" && password === 123) ||
    (username === "moomoo" && password === "farm")
  ) {
    return true;
    console.log("True");
  }
  return false;
};
const test = login("hello", "meow");
const test2 = login("admin", "lol");
const test3 = login("monkey", 123);
const test4 = login("moomoo", "farm");
const test5 = login("moomoo", "moo");

console.log(test, test2, test3, test4, test5);
