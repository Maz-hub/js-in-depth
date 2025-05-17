try {
    const message = "Hi !";
    console.log(message);
    throw new Error("Boom !!!");
    
} catch (e) {
    console.error(e);
    console.error("Caught !!!");
}

console.log("Hi again ?")