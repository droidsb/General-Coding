

var readline = require('readline-sync');
var x=0;
while(x===0){
var code2 = readline.question("Enter text: ");
var code = code2;
var code2 = [];
var coded = [];
var finalw="";

var alpha = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"," ","!","?",".","-",",","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var alphac = ["z","w","u","s","q","o","y","v","t","r","p","n","x","l","j","h","f","d","b","k","i","g","e","m","c","a"," ","!","?",".","-",",","Z","W","U","S","Q","O","Y","V","T","R","P","N","X","L","J","H","F","D","B","K","I","G","E","M","C","A"];

var numkey = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26];

for (var i = 0, len = code.length; i < len; i++) {
  code2.push(code[i]);
}


for(var i = 0; i < len; i++){

	if(code[i] !=" "){
		//console.log(alpha[scrambler]);
		for(var p = 0; p<alpha.length; p++){
			if(code[i]===alpha[p]){
				
				coded.push(alphac[p]);
			
			}
			
			}
		
			
			
		
			
		}
		if(code[i]===" "){
				
				coded.push(alpha[26]);
			
			}
		

}

for(i=0; i<coded.length; i++){
		finalw=finalw+coded[i];
		
	}




console.log(finalw);




var code = code2;
var code2 = [];
var coded = [];
var finalw="";
for(var i = 0; i < len; i++){

	if(code[i] !=" "){
		//console.log(alpha[scrambler]);
		for(var p = 0; p<alpha.length; p++){
			if(code[i]===alphac[p]){
				
				coded.push(alpha[p]);
			
			}
			
			}
		
			
			
		
			
		}
		if(code[i]===" "){
				
				coded.push(alpha[26]);
			
			}
		

}

for(i=0; i<coded.length; i++){
		finalw=finalw+coded[i];
		
	}
	
	console.log(finalw);

/*
console.log

.replace("a", "z")
.replace("b", "w")
.replace("c", "u")
.replace("d", "s")
.replace("e", "q")
.replace("f", "o")
.replace("g", "y")
.replace("h", "v")
.replace("i", "t")
.replace("j", "r")
.replace("k", "p")
.replace("l", "n")
.replace("m", "m")
.replace("n", "l")
.replace("o", "j")
.replace("p", "h")
.replace("q", "f")
.replace("r", "d")
.replace("s", "b")
.replace("t", "k")
.replace("u", "i")
.replace("v", "g")
.replace("w", "e")
.replace("x", "c")
.replace("y", "a");
*/

}
 
