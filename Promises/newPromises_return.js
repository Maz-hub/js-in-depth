const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Hello, my friend!');
        resolve("Here's your ice cream!");
        reject('Sorry no ice cream for you !!!!!!!!!!!')
    }, 1000);
});

myPromise
.then((resolvedValue) => {
    console.log('Promise seems to be done');
    console.log(resolvedValue);
    console.log(myPromise);

    return 'yo !';
})
.then((anotherValue) => {
    console.log(anotherValue);
})
.catch((error) => {
    console.log(error);
})

console.log('Hello...???');

console.log(myPromise);