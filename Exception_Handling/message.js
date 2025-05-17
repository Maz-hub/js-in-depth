try {
    const message = "Hi !";
    console.log(message);
    throw "Boom !"
} catch (e) {
    console.error(e);
    console.error("Caught !!!");
}

console.log("Hi again ?")

/*
Hi !
Boom !
Caught !!!
Hi again ?
*/