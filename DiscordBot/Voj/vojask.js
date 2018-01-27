const Discord = require("discord.js");
const client = new Discord.Client();
var readline = require('readline-sync');

var Serena = require('./Serena.js');


var readline = require('readline-sync');
var fs = require('fs');
var saveQim = fs.readFileSync('./learn.js_saves/learnQsave.js', "utf8");
var saveAim = fs.readFileSync('./learn.js_saves/learnAsave.js', "utf8");
var saveQTEMP = fs.readFileSync('./learn.js_saves/QtempSave.js', "utf8");

var saveQ = JSON.parse(saveQim);
var saveA = JSON.parse(saveAim);
var  math = require('mathjs');
var questions = saveQ;
var answers = saveA;
var say = require('say');

var Asave=0;

var QA=0;
var i=0;
var check=0;
var answerKnown=false;
var A=-1;


var d = new Date();
	
		var h = d.getHours();
		var m = d.getMinutes();
		var s = d.getSeconds();
		m = checkTime(m);
		s = checkTime(s);
function sleep(miliseconds) {
   var currentTime = new Date().getTime();

   while (currentTime + miliseconds >= new Date().getTime()) {
   }
}		
		
	
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
 




var startup = false;



let prefix = "Vojteche, ";
let prefix2 = "The answer is, ";

client.on("ready", () => {
  console.log("I am ready!");
  startup=true;
  
});



		


client.on("message", (message) => {




setInterval(() => {

var announcment = fs.readFileSync('./learn.js_saves/Message.js', "utf8");


if(announcment!=0){
	
	
		
		message.channel.send(announcment);
		
		
		announcment=0;
		fs.writeFileSync('./learn.js_saves/Message.js', 0);
	
	}


}, 1000);
if (startup==true){

message.channel.send("_Greetings mortals..._");
startup=false;

}
  
  
 /*	
		//console.log(`(Private) ${message.author.name}: ${message.content}`);
  
	  if (message.content.startsWith("What is love?")) {
		message.channel.send("Love is eteerrrrnnnaaalll and foreeevverrr (don't mind me)");
		console.log("Sent reply to question!");
	  }
  
	  if (message.content.startsWith("Potato")) {
		message.channel.send("I have potatoes");
		console.log("Sent reply to question!");
	  }
	  if (message.content.startsWith("Ping")) {
		message.channel.send("Nope");
		console.log("Sent reply to question!");
	  }
	  /*if (message.content.startsWith("What is the meaning of life?")) {
		message.channel.send("The meaning of life is 42");
		console.log("Sent reply to question!");
	  }*/
	  var name=`${message.author.username}`;


var read = name+":"+`${message.cleanContent}`;
console.log(read);
Asave=0;

QA=0;
i=0;
check=0;
answerKnown=false;
A=-1;

client.user.setPresence({ status: 'dnd', game: { name: 'with the minds of mortals' } });


  

if(message.content.startsWith(prefix) && message.author.bot==false){
  
  
  
	  var QUpper=`${message.content}`.replace('Vojteche, ','');
  
	  var Q=QUpper.toLowerCase();
	  //console.log("ERROR CHECK Q "+Q);
	  fs.writeFileSync('./learn.js_saves/QtempSave.js', Q);
  

			/*while(check<questions.length){
				if(Q===questions[check] && answerKnown===false){
					console.log();
					say.speak(answers[check], 'Serena');
					console.log(answers[check]);
					console.log();
					answerKnown=true;
				
				
				}
			
				
			
				check++;
				}*/
	
	
			//console.log(Q);
			//console.log("ERROR CHECK ONE");
			
			while(check<answers.length){
				if(Q===questions[check] && answerKnown===false){
					console.log();
					//console.log("ERROR CHECK TWO");
					//say.speak(answers[check], 'Serena');
					message.channel.send("_"+answers[check]+"_");
					console.log();
					answerKnown=true;
				
				
				}
			
				
			
				check++;
			}
		
		
		//console.log("Test one "+saveQTEMP);
	}
	




	if(message.author.bot==false){
			if(answerKnown===false){
			if(message.content.startsWith(prefix) && message.author.bot==false && Q!="what is my name?"){
				saveQTEMP = fs.readFileSync('./learn.js_saves/QtempSave.js', "utf8");
				//say.speak("What is the answer to that question?", 'Serena');
				message.channel.send("_Why should I answer that question... Mortal..._");
				}
			}
				/*if(message.content.startsWith(prefix2)){
		 
					
			
					var A =`${message.content}`.replace('The answer is, ','');
					console.log(A);
					//console.log("Test two"+saveQTEMP);
					Asave=A;
			
				
					questions.push(saveQTEMP);
					answers.push(A)
			
					A=0;
					QA=0;
				
			
					while(i<answers.length){

			
					i++
					}
					A=0;
					QA=0;
					check=0;
					fs.writeFileSync('./learn.js_saves/QtempSave.js', '');
					//answerKnown=false;
					fs.writeFileSync('./learn.js_saves/learnQsave.js', JSON.stringify(questions));	
					fs.writeFileSync('./learn.js_saves/learnAsave.js', JSON.stringify(answers));
					}		*/
  
		}
		
	if(Q=="what is my name?"){
		
		message.reply("is your name");
	
	
	}
	
	
	
		

		
		
	
	
	Q=0;
	A=0;
	check=0;
	Asave=0;

  
  
  
  
  //console.log(server);
  /*var FQ = readline.question("You: ");
  
  message.channel.send(FQ);*/
  
  console.log();

  
});
  
client.login('NDAyNTY3NTczOTc3NDMyMDg2.DT6n1g.qDddEVca6h8-dx2rRBs7_W1PYiE');


