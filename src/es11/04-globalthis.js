// The problem was that to acces the global object you had to use different names depending on the browser you are runing the code in, 
// Global this is a function to call the main object without having to worry about the name based on the browser used

// how to acces the global object
console.log(globalThis)

console.log(window) // navegador
console.log(global) // node
console.log(selft) // webworker
