# 💡 What is Destructuring in JavaScript?

Destructuring is a **shorter, cleaner way to pull values** out of arrays or objects and store them in variables.

> Instead of digging into a box every time, you just **unpack what you need**.

---

## 📦 Object Destructuring

```js
const user = { name: "Maz", age: 43 };

// Normal way
const name = user.name;
const age = user.age;

// Destructuring way ✅
const { name, age } = user;


## 📦 Array Destructuring

const colors = ["blue", "green", "purple"];

// Destructuring ✅
const [firstColor, secondColor] = colors;

console.log(firstColor); // "blue"
console.log(secondColor); // "green"

## Real Use Case

const response = { data: { user: "Monkey", admin: true } };

// Instead of:
const user = response.data.user;

// You can do:
const { data: { user } } = response;



