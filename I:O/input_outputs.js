
var readline = require("readline-sync");

var answer = readline.question("What's your name? ");

console.log("Well then! Welcome to my office "+ answer + "!");

setTimeout(QF2,2000)

function QF2(){
	
	var Q2 = readline.question("What seems to be the problem? ");
	setTimeout(QF3,2000)
}

function QF3(){
	
	console.log('Ah, I see...');
	setTimeout(how,2000)
	
	function how(){
		var Q3 = readline.question("How does it make you feel? ");
		var pre = 'My prescription for feeling ' +Q3+ ' is, ';
		console.log('Hmmmm...');
		if(Q3==='sad' || Q3==='Sad' || Q3==='Very sad' || Q3==='very sad' ){
		pre=pre+'go hang out with some friends or enjoy a good joke.'
		}
		else if(Q3==='Hungry' || Q3==='hungry' || Q3==='Very hungry' || Q3==='very hungry'){
		pre=pre+'to go to the store and buy some more food.';
		}
		else if(Q3!='sad' || Q3!='Sad' || Q3!='Very sad' || Q3!='very sad' || Q3!='Hungry' || Q3!='hungry'){
		pre=pre+"to go and ask a real doctor for help. I don't have that problem in my programming yet.";
		}
		setTimeout(AF4,2000)
   
   function AF4(){
		
console.log(pre);
	}

    }
}


