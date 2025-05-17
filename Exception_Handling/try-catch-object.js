try {
    const user = {
        name: "Alex",
        age: 21
    };
    console.log(user.profile.color); // TypeError: Cannot read properties of undefined (reading 'color')
} catch(e) {
    console.error(e);
}

// Other code .....

// if we don't have "catch" any code after the "try" WOULD NOT RUN