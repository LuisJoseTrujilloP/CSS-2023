// This is a generator function wich let us iterate using a for loop and yield to return this valus using it.next().value to call it

function* iterate(array){
// Logic to is duting each iteration
    for (let value of array){

        // return for each iteration
        yield value;
    }
}

const it = iterate(['Oscar', 'Luis', 'David',]);
console.log(it.next().value)
console.log(it.return())
console.log(it.value)
