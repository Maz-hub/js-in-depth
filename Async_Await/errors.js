const makeTimeout = (ms) => {
const timeout = new Promise((result, reject) => {
    setTimeout(() =>  {
        // result ("All done!");
        reject ("There was an error !!! oh ohhhh")
    }, ms);
});

return timeout;
};

const causeError = async () => {
    try {
    const result = await makeTimeout (2000);
    console.log(result);
    } catch (error) {
        console.log("we are in the error case, all done")
        console.log(error);
    }
};

console.log("Program started");
causeError();
console.log("Program done !")

/*
OUTPUT:
Program started
Program done !
we are in the error case, all done
There was an error !!! oh ohhhh
*/
