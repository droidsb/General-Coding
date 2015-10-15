//var readline = require("readline-sync");
//var hexnumI = readline.question("Type a decimal to convert to hexadecimal ");
function hexabin(dec){
if(dec>65535){
console.log("No numbers bigger than 65,535 are supported");
return;
}


var S1 = Math.floor(dec%16);
var S2 = Math.floor((dec/16)%16);
var S3 = Math.floor((dec/16/16)%16);
var S4 = Math.floor((dec/16/16/16)%16);

if (S1===10){
S1="A"
}
if (S1===11){
S1="B"
}
if (S1===12){
S1="C"
}
if (S1===13){
S1="D"
}
if (S1===14){
S1="E"
}
if (S1===15){
S1="F"
}
if (S2===10){
S2="A"
}
if (S2===11){
S2="B"
}
if (S2===12){
S2="C"
}
if (S2===13){
S2="D"
}
if (S2===14){
S2="E"
}
if (S2===15){
S2="F"
}
if (S3===10){
S3="A"
}
if (S3===11){
S3="B"
}
if (S3===12){
S3="C"
}
if (S3===13){
S3="D"
}
if (S3===14){
S3="E"
}
if (S3===15){
S3="F"
}
if (S4===10){
S4="A"
}
if (S4===11){
S4="B"
}
if (S4===12){
S4="C"
}
if (S4===13){
S4="D"
}
if (S4===14){
S4="E"
}
if (S4===15){
S4="F"
}

console.log(S4+""+S3+""+S2+""+S1+"");
}
//var dec = Number(hexnumI);
//for (i=0; i<=180; i++){
hexabin(65535);
//}
