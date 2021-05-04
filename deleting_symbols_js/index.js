const fs = require('fs');

// In " " type your symbol that you want to remove
let znak = "-";

// Making data string form Input.txt 
var global_data = fs.readFileSync("Input.txt").toString();

// Function clearing old Output.txt file
function clearing(){
    console.log("Clearing old Output file...");
    fs.writeFile('Output.txt', '', function(){console.log('File cleared...')})
}
clearing();

// Reading data you typed to Input.txt
fs.readFile('Input.txt', 'utf-8', function(err, data) {
    if (err) throw err;
    global_data = data.toString();
    
});
// Deleting unwanted symbols
let a = global_data.split(znak).join("");  

// Writing your finished text to Output.txt
    fs.writeFile('Output.txt', a, (err) => {
        // In case of a error throw err.
        if (err) throw err;
        console.log("Your file is done!")
});
//Now, open Output.txt and get your text cleared :D
