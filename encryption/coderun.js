var cipher=require('./cipher.js');
var readline=require('readline-sync');
var decipher=require('./decipher.js');

var message = readline.question("Type your message: ");
console.log(cipher.cipher(message));

var scrambled = readline.question("Type the message you got: ");
var key = readline.question("Type the key you got: ");
console.log(decipher.decipher(JSON.parse(key), scrambled));