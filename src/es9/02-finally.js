const anotherFunction = () => {

    return new Promise((resolve, reject) => {
        (true)
        ?    resolve('It did work')
        :    reject('did not work')
        
    } )

}

anotherFunction()
    .then(response => console.log(response))
    .catch(err => console.log(err))
    // THIS NEW METHOD LETS US TAKE ACTIONS ONCE THE FUNCTION FINISHED 
    .finally(() => console.log('Finally'))

