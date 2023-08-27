import fetch from "node-fetch";


// NOW WE DONT NEED TO USE AZYNG 
const response = await fetch('https://api.escuelajs.co/api/v1/products');
const products = response.json();

export { response };




// CREATING AN API CALL

// 1 STEP WILL BE INSTALLING FETCH TO BE ABLE TO USE IT IN NODE WITH npm install node-fetch
// 2 CREATE THE LOGIC NEEDED TO CAL PLATZI'S API
