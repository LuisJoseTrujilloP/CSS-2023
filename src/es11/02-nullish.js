const anotherNumber = 1;
const anotherNumberNull = null;
// WORKING WITH NULL NUMBERS
// a way to return a default value while trying to validate a value and in case that returns null select a number to return instead

const validate = anotherNumber ?? 5;
console.log(validate)
// As we can see validate2 returns the number 5 due to the fact that anotherNumberNull's value is null
const validate2 = anotherNumberNull ?? 5;
console.log(validate2)