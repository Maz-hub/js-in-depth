try {
    const message = "Hello";
    console.log(message);
    throw new Error("Oh no !")
} catch(e) {
    console.error(e);
    console.error(message); // ReferenceError: message is not defined
}

// we won't see the message below, because the error above crushes everything and other codes won't run
console.log("Programm complete")