

var scramble = function(){
var str = "droidsb";
var CLetter = [];
var word = [];
var finalw = "";
var len = str.length;
var key = [];

for (var i = 0, len = str.length; i < len; i++) {
  word.push(str[i]);
}
var alpha = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"," "];
var numkey = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26];

	for(var i = 0; i < len; i++){
	var keycode=alpha.indexOf(word[i])+1;
		var scrambler = Math.floor(Math.random() * 26);
		if(word[i] !=" "){
		//console.log(alpha[scrambler]);
		
		key.push(keycode);
		CLetter.push(alpha[scrambler]);
		}
		if(word[i] ===" "){
		CLetter.push(alpha[26]);
		key.push(alpha[26]);
		}
		
	}
	//console.log(str);
	//console.log(word);
	//console.log(CLetter); 
	
	//var joined = CLetter.join("");
	var joinedkey = key.join(" ");
	console.log(joinedkey); 
	//console.log(joined); 
	for(i=0; i<CLetter.length; i++){
		finalw=finalw+CLetter[i];
	}
	
	console.log(finalw);
	    
};
scramble();


    