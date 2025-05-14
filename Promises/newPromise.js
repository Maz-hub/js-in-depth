const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Hello, my friend!');
    }, 1000);
})

console.log('Hello...???');

console.log(myPromise);

// console.log outcome:
// Hello...???
// Promise { <pending> }
// Hello, my friend!

// As soon as the promise is created, it's immediatly pending
// then in the future it can either go to "fulfill" or "rejected"