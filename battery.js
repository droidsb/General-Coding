'use strict';
var say = require('say');
var fs = require('fs');
let macstats = require('/usr/local/lib/node_modules/macstats'); 
var i=0;
var speakOne = fs.readFileSync('./Speak.js', "utf8");
var chargeL = fs.readFileSync('./Charge.js', "utf8");



var weather = require('weather');
 
weather({location: 'Melbourne'}, function(data) {
   
   
   console.log(data.temp);
   
   
 });
/*



temp: 18, // Current temperature 
  high: 20, // High for the day 
  low: 9,   // Low for the day 
  
  
  */
//CHARGING SECTION!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! 
		var charge=macstats.battery.charged;
		
		//console.log(charge+"%");
		
		if(chargeL!=charge){
			fs.writeFileSync('./Speak.js', true);
			fs.writeFileSync('./Charge.js', charge);
		
		}
	
		if(charge==100){
		
			
		
			
			
			
			if(JSON.parse(speakOne)===true){
				console.log("Jarvis: Power levels are at "+charge+"% sir.");
				say.speak("Power levels are at "+charge+"% sir.");
				fs.writeFileSync('./Speak.js', false);	
				
			
			}
		
		}
		
		if(charge==96){
		
			
		
			
			
			
			if(JSON.parse(speakOne)===true){
				console.log("Jarvis: Power levels are at "+charge+"% sir.");
				say.speak("Power levels are at "+charge+"% sir.");
				fs.writeFileSync('./Speak.js', false);	
				
			
			}
		
		}
		
		if(charge==75){
		
			
		
			
			
			
			if(JSON.parse(speakOne)===true){
				console.log("Jarvis: Power levels are at "+charge+"% sir.");
				say.speak("Power levels are at "+charge+"% sir.");
				fs.writeFileSync('./Speak.js', false);	
				
			
			}
		
		}
		
		
		if(charge==50){
		
			
		
			
			
			
			if(JSON.parse(speakOne)===true){
				console.log("Jarvis: Power levels are at "+charge+"% sir.");
				say.speak("Power levels are at "+charge+"% sir.");
				fs.writeFileSync('./Speak.js', false);	
				
			
			}
		
		}
		
		
		if(charge==25){
		
			
		
			
			
			
			if(JSON.parse(speakOne)===true){
				console.log("Jarvis: Power levels are at "+charge+"% sir.");
				say.speak("Power levels are at "+charge+"% sir.");
				fs.writeFileSync('./Speak.js', false);	
				
			
			}
		
		}
		
		if(charge==10){
		
			
		
			
			
			
			if(JSON.parse(speakOne)===true){
				console.log("Jarvis: Power levels are at "+charge+"% sir, I suggest connecting to a power source soon.");
				say.speak("Power levels are at "+charge+"% sir, I suggest connecting to a power source soon.");
				fs.writeFileSync('./Speak.js', false);	
				
			
			}
		
		}
		
		if(charge==5){
		
			
		
			
			
			
			if(JSON.parse(speakOne)===true){
				console.log("Jarvis: Power levels are at "+charge+"% sir, I suggest connecting to a power source as soon as possible.");
				say.speak("Power levels are at "+charge+"% sir, I suggest connecting to a power source as soon as possible.");
				fs.writeFileSync('./Speak.js', false);	
				
			
			}
		
		}
//CHARGING SECTION!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! 		
		
		
			
		
		
		
		
	
		


/*
while true
do 
    node battery
    sleep 1
done
*/
	
	
	
/*

battery.battery_installed	Is battery installed, true or false [Boolean]
battery.design_capacity	Battery design capacity in mAh [Int]
battery.max_capacity	Max battery capacity in mAh [Int]
battery.current_capacity	Current battery capacuty in mAh [Int]
battery.percentage	Current capacity percentage [Int]
battery.design_cycle_count	Design cycle count [Int]
battery.cycle_count	Current battery cycle count [Int]
battery.cycle_percentage	Cycle count percentage [Int]
battery.temparature	Battery temperature in °C [Float]
battery.charged	Current battery charge percentage [Int]
battery.time_remaining	Remaining time in minutes, if plugged in time until full, otherwise time until empty [Int]
battery.time_remaining_hours	Time remaining in hours. Use in a combination with time_remaining_minutes [Int]
battery.time_remaining_minutes	Time remaining in minutes. Use in a combination with time_remaining_hours [Int]
cpu.temp	CPU Temperature in °C [Float]
fan.num	Total number of fans [Int]
fan.fans	Array of Objects (properties: id [Int], rpm [Int]), example: [ { id: 0, rpm: 2007 }, { id: 1, rpm: 1999 } ] }
*/