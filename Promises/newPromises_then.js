const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Hello, my friend!');
        resolve('Here your ice cream!');
    }, 1000);
});

myPromise.then((resolvedValue) => {
    console.log('Promise seems to be done');
    console.log(resolvedValue);
})

console.log('Hello...???');

console.log(myPromise);