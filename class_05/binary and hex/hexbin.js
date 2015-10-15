var readline = require("readline-sync");
var hexnumI = readline.question("Type a decimal to convert to hexadecimal ");
var N = 0;

function hexabin(dec){
function baselog(x){
return Math.log(x)/Math.log(16);
}
var hexDigitCount = Math.ceil(baselog(dec));

console.log(hexDigitCount);


var S = []
while(N<hexDigitCount){
S.push(dec/Math.pow(16, N) %16)

}
/*if (S[i]===10){
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


}*/
console.log(S);
console.log(S[5]+""+S[4]+""+S[3]+""+S[2]+""+S[1]+""+S[0]);

}

hexabin(hexnumI);
