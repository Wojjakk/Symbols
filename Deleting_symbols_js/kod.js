const fs = require('fs')

// Data with symbol you dont want.
let data= "a-a----------------------"

// Deleting symbols from Data.
let znak = "-";
let a = data.split(znak).join('');
    
// Writing data in 'Output.txt'.
fs.writeFile('Output.txt', a, (err) => {
    // In case of a error throw err.
    if (err) throw err;
})