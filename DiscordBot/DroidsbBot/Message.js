

var readline = require('readline-sync')
var fs = require('fs');
while(true){

var message = readline.question("You: ");

fs.writeFileSync('./learn.js_saves/Message.js', message);

}