const promise1 = new Promise((resolve, reject) => { resolve('Resolved') });
const promise2 = new Promise((resolve, reject) => { reject('Reject') });
const promise3 = new Promise((resolve, reject) => { resolve('Resolved')});


// PROMISE.ALLSET
// with this logic we can work if every promise was resulved succesfuly 

Promise.allSettled([promise1, promise2, promise3])
    .then(response => console.log(response))