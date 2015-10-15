var readline = require("readline-sync");
var hexnumI = readline.question("Type a decimal to convert to hexadecimal ");
function hexabin(dec){
console.log(dec%16);

console.log(dec);

if(Math.round(dec%16)===10){
console.log("A"+"A");
}
else if(Math.round(dec%16)===11){
console.log("A"+"B");
}
else if(Math.round(dec%16)===12){
console.log("A"+"C");
}
else if(Math.round(dec%16)===13){
console.log("A"+"D");
}
else if(Math.round(dec%16)===14){
console.log("A"+"E");
}
else if(Math.round(dec%16)===15){
console.log("A"+"F");
}
else if(dec%16===10){
console.log(Math.round(dec/16)-1+"A");
}
else if(dec%16===11){
console.log(Math.round(dec/16)-1+"B");
}
else if(dec%16===12){
console.log(Math.round(dec/16)-1+"C");
}
else if(dec%16===13){
console.log(Math.round(dec/16)-1+"D");
}
else if(dec%16===14){
console.log(Math.round(dec/16)-1+"E");
}
else if(dec%16===15){
console.log(Math.round(dec/16)-1+"F");
}

else{
console.log(dec);
}


}
var dec = Number(hexnumI);

hexabin(dec);