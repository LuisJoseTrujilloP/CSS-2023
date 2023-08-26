class User {
}

const newUser = new  User()

class user {

    greating(){
        return 'Hello'
    }
}

const hllo = new user();
console.log(hllo.greating())

const hello = new user();
console.log(hello.greating())


class userConstr {

    constructor(){
        console.log('Nuevo usuario');
    }
    greating(){
        return 'Hello'
    }

}

const luis = new userConstr();

class thisLecture {
    constructor(name){
        this.name = name;
    }
    // Private methods makes then unusable outside of this class
    #speak(){
        return 'Hello'
    }
    greeting(){
        return `${this.speak()} ${this.name} `
    }
}

const thisL = new thisLecture('Luis')
console.log(thisL.greeting())


class userSetGet {

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
    get #uAge(){
        return this.age;
    }
    set #uAge(n){
        this.age = n;
    }
}

const setG = new userSetGet('Luis', 30);

console.log(setG.uAge)
console.log(setG.uAge = 20)