const message = "Hi";

try {
    console.log(message);
    throw "Boom!"
} catch (e) {
    console.error(e); // Boom !
    console.error(message)
}

/*
Hi
Boom!
Hi
*/