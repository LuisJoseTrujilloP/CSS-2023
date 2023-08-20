// Working with asyncronus Js with promises

const anotherFunction = () => {

    return new Promise((resolve, reject) => {
        if (true){
            resolve('It did work')
        }
        else {
            reject('did not work')
        }
    } )

}

anotherFunction()
    .then(response => console.log(response))
    .catch(err => console.log(err))
    