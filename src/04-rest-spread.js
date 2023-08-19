// REST AND SPREAD EXAMPLES
// arrays destructuring

let fruits = ['Apple', 'Bannana'];
let [a, b] = fruits;
console.log ([a, b])
// Object destructuring
let user = { username: 'Oscar', age: 34 }
let { username, age } = user;

// spread operator
let person = { name: 'oscar', age : 28 };
let country = 'MX'

let data = { ...person, country }
console.log(data)