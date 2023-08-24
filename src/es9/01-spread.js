// NOW WE CAN USE ... WITH OBJECTS

const user = { username : "ljtp", age : 24, country : 'CO' };

const { username, ...values } = user;
console.log(username)
console.log(values)
