const nums = [5, 6, 7, 8, 9, 10, 11, 12];

const oddNumbers = nums.filter((num) => {
  if (num % 2 === 1) {
    return 100; // truthy value
  }
  // false ???
});

console.log(nums);
console.log(oddNumbers);

// filter method always has to have TRUE or FALSE !!!
