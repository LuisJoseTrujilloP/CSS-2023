// old way, we can change it to reduce the amount of code per function we need to create and a more freindly format
function square(num){   
    let result = num * num;
    return result
} 

// NEW VERTION WITH ECMASCRIPT
const squareNew = num => num * num;
// as we can se this is a better way to create functions since is a lot more summarized


//print results
console.log(square(3));
console.log(squareNew(3));