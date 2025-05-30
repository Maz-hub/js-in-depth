const countryPop = {
    Germany: 83,
    Brazil: 212,
    Egypt: 102
};

console.log(countryPop); // { Germany: 83, Brazil: 212, Egypt: 102 }

// -----------------------------------------------------------------

const countryPopExt = {}

for(const entry of Object.entries(countryPop)) {
    console.log(entry);
    /*
    [ 'Germany', 83 ]
    [ 'Brazil', 212 ]
    [ 'Egypt', 102 ]
    */

    const country = entry[0]; // country
    const pop = entry[1]; // population

    countryPopExt[country] = pop;

    countryPopExt["Russia"] = 762;
    countryPopExt["Switzerland"] = 34;
}

console.log(countryPopExt); // { Germany: 83, Russia: 762, Switzerland: 34, Brazil: 212, Egypt: 102 }

// -----------------------------------------------------------------

const countryPopExtended = {
    ...countryPop,
    Indonesia: 273,
    Japan: 125
}

console.log(countryPopExtended); // { Germany: 83, Brazil: 212, Egypt: 102, Indonesia: 273, Japan: 125 }