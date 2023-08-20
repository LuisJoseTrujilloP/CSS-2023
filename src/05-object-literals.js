// enahced object literals

function newUser(user, age, country){
    return {
        user:user,
        age:age,
        country:country
    }
}

// new way to usaer params on a fucntrion to export them
function newUser(user, age, country){
    return {
        user,
        age,
        country,
        // we can still bring params from another object or function we can all it with :
    }
}

console.log(newUser('gnxd', 34, 'mx'));

