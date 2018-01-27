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



let prefix = "Jarvis, ";
let prefix2 = "The answer is, ";

client.on("ready", () => {
  console.log("I am ready!");
  client.user.setStatus("invisible");
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

message.channel.send("Systems booted up!");
startup=false;

}
  
  

		//console.log(`(Private) ${message.author.name}: ${message.content}`);
  
	 
	  var name=`${message.author.username}`;


var read = name+":"+`${message.cleanContent}`;
console.log(read);
Asave=0;

QA=0;
i=0;
check=0;
answerKnown=false;
A=-1;
//client.user.setStatus('offline')
client.user.setPresence({ status: 'Idle', game: { name: 'logging chat' } });
// Set the bot's online/idle/dnd/invisible status


  


  console.log();

  
});
  
client.login('MzY3MTc4MDY1NTQ3MzYyMzA1.DL3p2w.5RKn6jC_B4DpnUQWew3MXYu80cQ');


