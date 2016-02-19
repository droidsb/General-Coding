var readline = require('readline-sync');
var fs = require('fs');
var saveQim = fs.readFileSync('./learn.js_saves/learnQsave.js', "utf8");
var saveAim = fs.readFileSync('./learn.js_saves/learnAsave.js', "utf8");
var saveQ = JSON.parse(saveQim);
var saveA = JSON.parse(saveAim);
var  math = require('mathjs');
var questions = saveQ;
var answers = saveA;



var QA=0;
var i=0;
var check=0;
var answerKnown=false;

	
		var d = new Date();
	
		var h = d.getHours();
		var m = d.getMinutes();
		var s = d.getSeconds();
		m = checkTime(m);
		s = checkTime(s);
		
		
	
	function checkTime(i) {
		if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
		return i;
	}


var DateDiff = {
 
    inDays: function(d1, d2) {
        var t2 = d2.getTime();
        var t1 = d1.getTime();
 
        return parseInt((t2-t1)/(24*3600*1000));
    },
 
    inWeeks: function(d1, d2) {
        var t2 = d2.getTime();
        var t1 = d1.getTime();
 
        return parseInt((t2-t1)/(24*3600*1000*7));
    },
 
    inMonths: function(d1, d2) {
        var d1Y = d1.getFullYear();
        var d2Y = d2.getFullYear();
        var d1M = d1.getMonth();
        var d2M = d2.getMonth();
 
        return (d2M+12*d2Y)-(d1M+12*d1Y);
    },
 
    inYears: function(d1, d2) {
        return d2.getFullYear()-d1.getFullYear();
    }
}
 
var dString = "Feb, 17, 2016";
var UntilChrist = "Dec, 25, 2016";
 





var learner = function(){
	
	while(Q !="done"){
		d = new Date();
		h = d.getHours();
		m = d.getMinutes();
		s = d.getSeconds();
		m = checkTime(m);
		s = checkTime(s);
		console.log("Type 'math' for math equations below otherwise type word questions below");
		var Q = readline.question("What is the answer to: ");
		var checkQ=Q;
		if(Q==="math"){
			var Q = readline.question("Type in a math equation: ");
		}
		
		
		QA++;
		if(Q==="what time is it" || Q==="what time is it?" || Q==="What time is it?" || Q==="What time is it"){
			console.log(h + ":" + m);
			answerKnown=true;
		}
		if(Q==="how long have you existed?" || Q==="how long have you existed" || Q==="How long have you existed?" || Q==="How long have you existed" || Q==="how old are you" || Q==="How old are you?" || Q==="how old are you?"){
			var d1 = new Date(dString);
			var d2 = new Date();
			console.log();
			console.log("I have existed for");
			console.log(DateDiff.inDays(d1, d2)+" days, "+DateDiff.inWeeks(d1, d2)+" weeks, and "+DateDiff.inMonths(d1, d2)+" months, "+DateDiff.inYears(d1, d2)+" years.");
			console.log("I was created on "+dString);
			console.log();

			answerKnown=true;
		}
		if(Q==="how many days until christmas?" || Q==="How many days until Christmas?" || Q==="how many days until christmas" || Q==="How many days until christmas" || Q==="How many more days until Christmas?"){
			var d1 = new Date(UntilChrist);
			var d2 = new Date();
			console.log();
			console.log("There are");
			console.log(DateDiff.inDays(d1, d2)*-1+" days till Christmas.");
			
			console.log();

			answerKnown=true;
		}
		if(Q==="how much information do you have stored?" || Q==="how much information do you have stored" || Q==="How much information do you have stored?" || Q==="How much information do you have stored" || Q==="how much information do you have?" || Q==="how much information do you have" || Q==="How much information do you have?"){
			console.log();
			console.log("I have "+JSON.parse(questions.length+4)+" questions and answers stored.");
			console.log();
			answerKnown=true;
		}
		if(checkQ==="math"){
		console.log();
		console.log(math.eval(Q));
		console.log();
		answerKnown=true;
		}
		while(check<answers.length){
			if(Q===questions[check] && answerKnown===false){
				console.log();
				console.log(answers[check]);
				console.log();
				answerKnown=true;
				
				
			}
			
				
			
			check++;
		}
		
		
		if(answerKnown===false){
			console.log("what does it equal?"); 
			var A = readline.question("Answer here: ");
	

			questions.push(Q);
			answers.push(A)
			A=0;
			QA=0;

			}
			while(i<answers.length){

			
			i++
			}
			A=0;
			QA=0;
			check=0;
			answerKnown=false;
			fs.writeFileSync('./learn.js_saves/learnQsave.js', JSON.stringify(questions));	
			fs.writeFileSync('./learn.js_saves/learnAsave.js', JSON.stringify(answers));
			
		}
		
		
		
}
var learner2 = function(){
		
	while(Q !="done"){
		var Q = readline.question("Ask a question: ");
		while(check<answers.length){
			if(Q===questions[check]){
				console.log(answers[check]);
				
				
				answerKnown=true;
				
			}
			
				
			
			check++;
		}
		if(answerKnown===false){
			while(A !="yes"){
				console.log("do you go left?"); 
				var A = readline.question("Yes or no: ");
				if(A==="yes"){
						QA="go left";
					}
				if(A==="no"){
				console.log("do you go right?"); 
				var A = readline.question("Yes or no: ");
				if(A==="yes"){
						QA="go right";
					}
				}
				if(A==="no"){
				console.log("do you go forward?"); 
				var A = readline.question("Yes or no: ");
				if(A==="yes"){
						QA="go forward";
					}
				}
				if(A==="no"){
				console.log("do you go backward?"); 
				var A = readline.question("Yes or no: ");
					if(A="yes"){
						QA="go backward";
					}
			}
				questions.push(Q);
				answers.push(QA);
		}
	
		
		
		
		}
		A=0;
		QA=0;
		check=0;
		answerKnown=false;
		
		fs.writeFileSync('/Users/SethBaird/Desktop/learn.js_saves/learnQsave.js', questions);	
		fs.writeFileSync('/Users/SethBaird/Desktop/learn.js_saves/learnAsave.js', answers);
		}
		while(i<answers.length){
	
		console.log(questions[i]+"="+answers[i]);
		i++
		}
		
}
learner();
