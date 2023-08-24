try {
    hello();
}catch{
    console.log(error)
}

// Now we can sent a string to the catch, to display that tenx in case of an error

try {
    hello();
}catch{
    console.log('Data did not load')
}