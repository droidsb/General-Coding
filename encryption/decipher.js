/**************************************************************************************/

// module prefix
var decipher = function(){};

/**************************************************************************************/


decipher.prototype.decipher = function(key, scrambledword){
var todecipher = key;
var alpha = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"," "];
var firstmessage = String(scrambledword);
var finalmessage = [];
var originalnum = [];
var word = "";
for (var i = 0, len = firstmessage.length; i < len; i++) {
  finalmessage.push(firstmessage[i]);
}
	
for(i=0; i<todecipher.length; i++){
if(finalmessage[i]!=" "){
originalnum.push(alpha.indexOf(finalmessage[i])-todecipher[i]);
}
if(finalmessage[i]===" "){
originalnum.push(alpha[26]);
}
}
for(i=0; i<todecipher.length; i++){
if(finalmessage[i]===" "){
word=word+alpha[26];
}
if(finalmessage[i]!=" "){


word=word+alpha[originalnum[i]];

}

}

//console.log(finalmessage);
//console.log(word);
return word;

};



/**************************************************************************************/
// module suffix
module.exports = new decipher();

/**************************************************************************************/