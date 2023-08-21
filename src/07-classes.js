// creeating a class

class User {

}

// creating a instance

const newUser = new  User()

// adding methods to a clas

class user {

    // 1 create a function
    greating(){
// and add the logic you want the method to do
        return 'Hello'
    }
}

// now we create an instance of user
const hllo = new user();

// using the method declared on the class user
console.log(hllo.greating())

// now using another instance with a different name we can still use the methods declared

// instance
const hello = new user();
// using the method inside this instanced class
console.log(hello.greating())

// CONSTRUCTOR

class userConstr {

    // this functrion is automatically runing the constructor function that way the secound code that is a method no a contructor will not be execured unless we called them using .
    constructor(){
        console.log('Nuevo usuario');
    }
    greating(){
        return 'Hello'
    }

}

const luis = new userConstr();

// THIS reference to the father element that calls it

class thisLecture {
    constructor(name){
        this.name = name;
    }
    speak(){
        return 'Hello'
    }
    greeting(){
        return `${this.speak()} ${this.name} `
    }
}

const thisL = new thisLecture('Luis')
console.log(thisL.greeting())

// setters and getters

class userSetGet {
    // constructor, here we define the different variables duch as name and age
    constructor(name, age) {
    this.name = name;
    this.age = age;
    }
    speak(){
        return 'Hello'
    }
    greeting(){
        return `${this.speak()} ${this.name} `
    }
    get uAge(){
        return this.age;
    }
    set uAge(n){
        this.age = n;
    }
}

const setG = new userSetGet('Luis', 30);

console.log(setG.uAge)
console.log(setG.uAge = 20)

