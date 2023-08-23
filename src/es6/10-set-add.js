// this is how we create a list with Set(), wich basically is an instance of this class
const list = new Set()

// using the method .add included on the instance of Set() we created
list.add('item 1')
// we can also apply it more than once
list.add('item 2').add('item 3')

// this creates an objected named Set with the items we added Set { 'item 1', 'item 2', 'item 3' }
console.log(list)

