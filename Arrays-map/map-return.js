const numbers = [5, 10, 15, 20, 25];

const timesTen = numbers.map((number) => {
    console.log(number * 10);
})

// id NO RETURN value is provided, JavaScript is going to return "underfined"

console.log(timesTen);

/* 
(5) [undefined, undefined, undefined, undefined, undefined]
0
: 
undefined
1
: 
undefined
2
: 
undefined
3
: 
undefined
4
: 
undefined
length:5
*/
