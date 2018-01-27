const Discord = require("discord.js");
const client = new Discord.Client();


var readline = require('readline-sync');
var fs = require('fs');

client.on("ready", () => {
  console.log("I am ready!");
  startup=true;
  
});



function output(error, token) {
        if (error) {
                console.log(`There was an error logging in: ${error}`);
                return;
        } else
                console.log(`Logged in. Token: ${token}`);
}



client.on("message", (message) => {




setInterval(() => {

var announcment = fs.readFileSync('./learn.js_saves/Message.js', "utf8");


if(announcment!=0){
	
	
		console.log(announcment);
		
		message.channel.send(announcment);
		
		
		announcment=0;
		fs.writeFileSync('./learn.js_saves/Message.js', 0);
	
	}


}, 1000);

});


client.login('MzE0MDkwNDEyMzc1ODAxODU3.DL71bg.TncR6HwxEkRtUNey1_1eN9cHn40');


//DROIDSB TOKEN: MjE0MzY2NTAxNjg2MjE0NjU2.DL3pmA.eZL2jcAZtr4zZnaHG7U40x5wfUI

//JARVIS TOKEN: MzY3MTc4MDY1NTQ3MzYyMzA1.DL3p2w.5RKn6jC_B4DpnUQWew3MXYu80cQ

//TIME: MzE0MDkwNDEyMzc1ODAxODU3.DL71bg.TncR6HwxEkRtUNey1_1eN9cHn40