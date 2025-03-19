const cities = ["london", "vancouver", "moscow", "new york"];

const concatCities = cities.reduce((result, city) => {
    return result + city
}, "");

console.log(cities);
console.log(concatCities);

// londonvancouvermoscownew york