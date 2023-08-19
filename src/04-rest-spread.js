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

let data =  { id: 1, ...person, country }
console.log(data)

// rest 

function sum(num, ...values) {
    console.log(values)
    console.log(num+values[2])
    return num + values
}

sum(1, 1, 2, 3);


// exercise using spread operator

// export function solution(json1 = {
//     name: 'Mr. Michi',
//     food: 'Pescado',
//   },
//     json2 = {
//       age: 12,
//       color: 'Blanco',
//     }
//   ) {
//     return { ...json1, ...json2 };
//   }