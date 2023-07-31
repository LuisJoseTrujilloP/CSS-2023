// old way, we can change it to reduce the amount of code per function we need to create and a more freindly format
function square(num){   
    let result = num * num;
    return result
} 

// NEW VERTION WITH ECMASCRIPT
const squareNew = num => num * num;



//print results
console.log(square(3));
console.log(squareNew(3));