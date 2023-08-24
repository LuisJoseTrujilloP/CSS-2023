// FLAT
const array = [ 13 , 9, 25, 31, 21, [ 1, 2, 3, 4, [ 110, 222 , 351,]]]
const flat = array.flat(3)
console.log(flat)

// FLAT MAP
const array2 = [1, 2, 3, 4, 5]
console.log(array2.flatMap(v => [v, v * 2]))