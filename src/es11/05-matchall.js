// rejex we van calidate standars such as validate inside of an imput if the email passed is functional
const regex = /\b(Apple)+\b/g;

const fruit = 'Apple, Banana Kiwi, Apple, orange';
// use this resourse to find the string inside of const fruit

for (const match of fruit.matchAll(regex)){
    console.log(match)
}