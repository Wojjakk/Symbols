//=============================
var znak = "-"
//=============================

const fs = require('fs');
const readline = require('readline');

const readInterface = readline.createInterface({
  input: fs.createReadStream('input.txt')
});

if (fs.existsSync('output.txt')) {
  fs.unlink('output.txt',function(err){if(err) return console.log(err)});
}

readInterface.on('line', function(line) {
  let linefixed = line.split(znak).join('');
  fs.appendFileSync('output.txt', `${linefixed}\r\n`, function (err) {});
});