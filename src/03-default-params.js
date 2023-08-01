// old way to work with default params, we had to use || to define those values.
function newUser(name, age, country){
    var name = name || 'Luis';
    var age = age || 34;
    var country = country || 'MX';
    console.log(name, age, country)
}

// what would happen without params
newUser()
newUser('David', 15, 'CO');

// with this new version we can define a default param with just =  wich is more view friendly
function newAdmin(name = 'Oscar', age = 32, country = 'CL'){
    console.log(name, age, country)
}

newAdmin()
newAdmin('Daniel', 19, 'CA')
