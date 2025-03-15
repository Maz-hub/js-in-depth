const print = (message) => {
  // parameter
  console.log(message);
};
print("omg, hi"); // argument

const printMany = (message, num) => {
  for (let i = 0; i < num; i++) {
    console.log(message);
  }
};

printMany("hi", 5);

/* 
omg, hi
hi
hi
hi
hi
hi
*/
