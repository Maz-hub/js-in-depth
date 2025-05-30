const countryPop = {
    Germany: 83,
    Brazil: 212,
    Egypt: 102,
    Canada: {
        pop:38,
    }
};

const countryPopCopy = {...countryPop};

console.log(countryPop); // { Germany: 83, Brazil: 212, Egypt: 102, Canada: { pop: 38 } }

console.log(countryPopCopy); // { Germany: 83, Brazil: 212, Egypt: 102, Canada: { pop: 38 } }

console.log("------------")

countryPop.Canada.capital = "Ottawa";

console.log(countryPop); 
/*
{
  Germany: 83,
  Brazil: 212,
  Egypt: 102,
  Canada: { pop: 38, capital: 'Ottawa' }
}
*/

console.log(countryPopCopy);
/*
{
  Germany: 83,
  Brazil: 212,
  Egypt: 102,
  Canada: { pop: 38, capital: 'Ottawa' }
}
*/

// Both of them (countryPop & countryPopCopy) are pointing to the same object in memory. Because this object that has been kind of moved into countryPopCopy is just a REFERENCE to that point in memory (existing object). So if we change it, we change it in both of these places.