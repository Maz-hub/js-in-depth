const nums = [5, 10, 15, 20, 25];

// ----------------------------------------------------------------------
console.log("------- 1 -------");
let sum = 0;
for(let i = 0; i < nums.length; i++) {
    console.log(sum, nums[i]);
    sum += nums[i];

}    

console.log(sum);


// ----------------------------------------------------------------------

console.log("------- 2 -------");

const initialValue = 0;

const sumWithInitial = nums.reduce((accumulator, currentValue) => 
    accumulator + currentValue, initialValue
);

console.log(sumWithInitial);


// ----------------------------------------------------------------------

console.log("------- 3 -------");

const sum2 = nums.reduce((result, number) => {
    console.log(result, number);
    return result + number;
}, 0);

console.log(sum2);

// ----------------------------------------------------------------------

console.log("------- 4 -------");


const sum3 = nums.reduce((result, number) => {
    if (number < 20) {
        return result + number
    } 

    return result;

}, 0);

console.log(sum3);

