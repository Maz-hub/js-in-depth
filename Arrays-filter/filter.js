const cities = ["madrid", "vancouver", "moscow", "new york "];

const mCities = cities.filter((city) => {
    return city.startsWith("m");
});

console.log(cities);
console.log(mCities);

const nums = [5, 6, 7, 8, 9, 10, 11, 12];

const evenNumbers = nums.filter((num) => {
    if (num % 2 === 0) {
        return true;
    }
    return false; 
});

console.log(nums);
console.log(evenNumbers);

const oddNumbers = nums.filter((num) => num % 2 !== 0)

console.log(nums);
console.log(oddNumbers);