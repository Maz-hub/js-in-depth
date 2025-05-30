const animals = {
    Cat: 33,
    Dog: 12,
    Bird: 11,
    Pig: 2
};

console.log(animals); // { Cat: 33, Dog: 12, Bird: 11, Pig: 2 }

const animalsPop = {
    ...animals,
    Tiger: 3,
    Pig: 200,
}

console.log(animalsPop); // { Cat: 33, Dog: 12, Bird: 11, Pig: 200, Tiger: 3 }

const animalsPop2 = {
    Cat: 33333333333,
    ...animalsPop,
    Mouse: 9,
}

console.log(animalsPop2); // { Cat: 33, Dog: 12, Bird: 11, Pig: 200, Tiger: 3, Mouse: 9 }