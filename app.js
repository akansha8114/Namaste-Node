//Including xyz.js file in this file

//require("./xyz.js");
const {multiply,add} = require("./calculate");
const data = require ("./data.json"); // Importing JSON data

console.log(JSON.stringify(data)); // Printing JSON data

var name = "Namaste NodeJS";
var a = 10;
var b = 20;
add(a, b); // Calling the add function from sum.js
multiply(a, b); // Calling the multiply function from multiply.js
