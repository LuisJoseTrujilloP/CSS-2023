const promise1 = new Promise((resolve, reject) => { resolve('Reject') });
const promise2 = new Promise((resolve, reject) => { reject('Resolved') });
const promise3 = new Promise((resolve, reject) => { resolve('Resolved')});


// PROMISE.any
// this will cap the resolve made by the first succesfull promise made
Promise.any([promise1, promise2, promise3])
    .then(response => response.replace('Reject', 'Resolved'))
    .then(response => console.log(response))