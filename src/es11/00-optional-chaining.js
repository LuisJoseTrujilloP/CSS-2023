// OPTIONAL CHAINING tool to validate that the information is present withour breaking the code
const users = {
    gndx: {
        country : 'MX'
    },
    daniel: {
        country : 'CO'
    }
}
console.log(users.gndx.country)
// If we try to access 'AGE' that is not declared this will sent us an error and breake the code
// now we can validate the value using OPTIONAL CHAININGQ
// this way, all it wont brake all the code, it will only return an undefined in case the if ended up been(false)
console.log(users?.bebeloper?.country)