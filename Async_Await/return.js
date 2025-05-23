const fetchData = async() => {
    return "hello";
};

const result = fetchData() // call the function
console.log(result); // Promise { 'hello' }

result.then((value) => {
    console.log(value); // hello
});

const useHello = async () => {
    const result = await fetchData();
    console.log(result); // hello
};

useHello(); // calling the function