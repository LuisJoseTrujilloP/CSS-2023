const string = 'Hello';
// With padStart we can chose an  amount of characters  of a string and also fill with the second value we pass
console.log(string.padStart(10, '1'))
console.log(string.padStart(10, '- '))

// padEnd is similar  
console.log(string.padEnd(10, '- '))
