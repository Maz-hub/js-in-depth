const message = "Hi";

try {
    console.log(message);
    throw new Error ("Boom!")
} catch (e) {
    console.error(e); // Boom !
    console.error(message)
}

/*
Hi
Error: Boom!
Hi
*/