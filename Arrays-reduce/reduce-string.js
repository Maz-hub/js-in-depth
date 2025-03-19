const cities = ["moscow", "berlin", "rome", "madrid"];

const concatCities = cities.reduce((concatStrings, city) => {
    if(city === "rome") {
        return concatStrings;
    }

    return concatStrings + city + " - ";

}, "")

console.log(concatCities);