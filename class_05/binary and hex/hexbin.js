//var readline = require("readline-sync");
//var hexnumI = readline.question("Type a decimal to convert to hexadecimal ");
function hexabin(dec){
if(dec>65535){
console.log("No numbers bigger than 65,535 are supported");
return;
}

var S = [Math.floor(dec%16), Math.floor((dec/16)%16), Math.floor((dec/16/16)%16), Math.floor((dec/16/16/16)%16)]
var S1 = Math.floor(dec%16);
var S2 = Math.floor((dec/16)%16);
var S3 = Math.floor((dec/16/16)%16);
var S4 = Math.floor((dec/16/16/16)%16);
for (i=0; i<=3; i++){
if (S[i]===10){
S[i]="A"
}
if (S[i]===11){
S[i]="B"
}
if (S[i]===12){
S[i]="C"
}
if (S[i]===13){
S[i]="D"
}
if (S[i]===14){
S[i]="E"
}
if (S[i]===15){
S[i]="F"

}
}

console.log(S[3]+S[2]+S[1]+S[0]);

}
//var dec = Number(hexnumI);
//for (i=0; i<=180; i++){
hexabin(65535);
//}
