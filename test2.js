var readline = require('readline-sync');
var waitTime=0;

var friend=false;
var RoseLikesPlayer=0;

function sleep(miliseconds) {
   var currentTime = new Date().getTime();

   while (currentTime + miliseconds >= new Date().getTime()) {
   }
}

console.log("---------------------------------------------------------");
sleep(500);
console.log("You wake up suddenly and, though your eyes are open, you can't see at all. All you hear is dripping water echoing through an otherwise silent room. Suddenly you hear the clicking of distant footsteps. You feel a strange panic rising and struggle, but you discover you are restrained. The footsteps come closer until you are sure there is a person standing before you and you hear the sliding of a chair.");
console.log("---------------------------------------------------------");
sleep(500);
var Menu = readline.question("Female Voice: Hello, welcome to initiation. We have a few questions to ask you: ");
console.log("---------------------------------------------------------");
sleep(500);
var Q1 = readline.question("Female Voice: What is your name?(Roleplay name or your real name): ");

if (Q1==="Dylan"){
	console.log("---------------------------------------------------------");
	sleep(500);
	var Q2D = readline.question("Female Voice: Do you know why you are here?(Yes/No): ");
	


}

if (Q2D==="Yes"){
	console.log("---------------------------------------------------------");
	sleep(500);
	console.log("Female Voice: Sam, he admits to his actions, we can kill him now.");
	var what = readline.question("Sam: Alright, get out of the room: ");
	console.log("---------------------------------------------------------");
	sleep(500);
	var lastwords = readline.question("You hear the woman get up and start to walk out of the room. A heavy door slams shut, then a loud hissing noise begins. Your head starts to spin and you start to black out: ");
	console.log("---------------------------------------------------------");
	sleep(500);
	console.log("YOU DIED(Sorry if your name is actually Dylan XD)");
}
	
if(Q2D==="No"){
	console.log("---------------------------------------------------------");
	sleep(500);
	console.log("Female Voice: He is lying!");
	sleep(2000*waitTime);
	console.log("---------------------------------------------------------");
	sleep(500);
	var what = readline.question("Male Voice(from intercom): Alright, get out of the room: ");
	console.log("---------------------------------------------------------");
	sleep(500);
	var lastwords = readline.question("You hear the woman get up and start to walk out of the room. A heavy door slams shut, then a loud hissing noise begins. Your head starts to spin and you start to black out: ");
	console.log("---------------------------------------------------------");
	sleep(500);
	console.log("YOU DIED(Sorry if your name is actually Dylan XD)");
}

if (Q1!="Dylan"){
	console.log("---------------------------------------------------------");
	sleep(500);
	var Q2 = readline.question("Female Voice: Don't lie, you can't fool me, we already know you name is Dylan. You aren't off to a good start. Do you know why you are here?(Yes/No): ");
}
if (Q2==="Yes"){
	console.log("---------------------------------------------------------");
	sleep(500);
	console.log("Female Voice: Sam, he admits to his actions, we can kill him now");
	var what = readline.question("Sam: Alright, get out of the room: ");
	sleep(500);
	console.log("---------------------------------------------------------");
	sleep(500);
	var lastwords = readline.question("You hear the female get up and start to walk out of the room. A heavy door slams shut, then a loud hissing noise begins. You head starts to spin and you start to black out: ");
	console.log("---------------------------------------------------------");
	sleep(500);
	console.log("YOU DIED");
}

if (Q2==="No" || Q2==="Nope"){
	console.log("---------------------------------------------------------");
	sleep(500);
	var lying = readline.question("Female Voice(Angry): Don't lie to me: ");
	sleep(500);
	console.log("---------------------------------------------------------");
	sleep(500);
	console.log("You hear a buzzing and then a staticy voice that you suppose is coming from an intercom. 'Rose, he may have actually forgotten everything, that is a known side-effect.'"); 
	sleep(5000*waitTime);
	console.log("---------------------------------------------------------");
	sleep(500);
	console.log("You hear a clicking sound");
	sleep(500);
	console.log("---------------------------------------------------------");
	sleep(500);
	console.log("Rose: I see, Sam. Now Dylan, you must come with me.");
	sleep(2000*waitTime);
	console.log("---------------------------------------------------------");
	sleep(500);
	console.log("The light is suddenly blinding as the woman you suppose is named Rose rips off your blindfold. You blink your eyes until they focus while she unties your restraints and you get the first glimpse of her and the room which you are held hostage in. She has brown hair down to just a few inches below her shoulders. She has dark brown eyebrows and deep blue eyes. She is wearing a white shirt and a dark grey jacket, as well as white pants. She is wrapping up the rope and putting it into an orange backpack. She catches you looking at her.");
	sleep(2000*waitTime);
	console.log("---------------------------------------------------------");
	sleep(500);
	var whatisit = readline.question("Rose: What?(Nothing/I...): ");
	console.log("---------------------------------------------------------");
	sleep(500);
	if (whatisit==="I..."){
		
		RoseLikesPlayer=RoseLikesPlayer+1;
	
	}
	var Q3 = readline.question("Rose: Are you going to get out of your seat or what?(Yes/No): ");
}


		
if (Q3==="Yes"){
	console.log("---------------------------------------------------------");
	sleep(500);
	console.log("Rose: Alright then come on.");
	sleep(500);
	console.log("---------------------------------------------------------");
	sleep(500);
	console.log("She gestures towards the door. It is a very heavy looking door, you think to yourself that nothing could get through it. As you make you way out of the room you enter into a hallway, no windows are visible but there are several doors.");
	sleep(5000*waitTime);
	console.log("---------------------------------------------------------");
	sleep(500);
	var Q4 = readline.question("There is a door on your right and a door on your left. Do you keep walking with Rose, or choose a door?(Right/Left/Stay): ");
	sleep(500);	
}

if (Q3==="No"){
	console.log("---------------------------------------------------------");
	sleep(500);
	var Qchair = readline.question("Rose: You can't afford to be stubborn, Dylan, if you want to be spared you must come with me(Stay/Go): ");
	RoseLikesPlayer=RoseLikesPlayer-1;
}	
if (Qchair==="Stay"){
	console.log("---------------------------------------------------------");
	sleep(500);
	console.log("Rose: Suit yourself. Sam start the process.");
	sleep(2000*waitTime);
	console.log("---------------------------------------------------------");
	sleep(500);
	console.log("Sam: Alright.");
	sleep(1000*waitTime);
	console.log("---------------------------------------------------------");
	sleep(500);
	var lastwords = readline.question("Rose gets up and starts to walk out of the room. She shuts the heavy door, then a loud hissing noise begins. You head starts to spin and you start to black out: ");
	console.log("---------------------------------------------------------");
	sleep(500);	
	console.log("YOU DIED");


}

if (Qchair==="Go"){
	console.log("---------------------------------------------------------");
	sleep(500);
	console.log("Rose: Alright then come on.");
	sleep(500);
	console.log("---------------------------------------------------------");
	sleep(500);
	console.log("She gestures towards the door. It is large, metal and, judging by the slight exertion Rose showed opening it, heavy. You doubt you could've escaped even if you weren't bound. As you make you way out of the room you enter into an artificially bright hallway with several doors and not a window in sight. ");
	sleep(5000*waitTime);
	console.log("---------------------------------------------------------");
	sleep(500);
	var Q4 = readline.question("There is a door on your right and a door on your left. Do you keep walking with Rose, or choose a door?(Right/Left/Stay): ");
	sleep(500);	
}

////////////RUNAWAY FAIL SCENE\\\\\\\\\\\\
			
if (Q4==="Right"){
	console.log("---------------------------------------------------------");
	sleep(500);	
	console.log("You make a dash towards the door!");
	console.log("---------------------------------------------------------");
	sleep(500);	
	console.log("Rose: HEY!!");
	console.log("---------------------------------------------------------");
	sleep(500);	
	var crap = readline.question("You reach the door but you find it is locked: ");
	sleep(1000*waitTime);
	console.log("---------------------------------------------------------");
	sleep(500);	
	console.log("Rose catches up to you with ease and grabs you violently, kicking you in the back. You are instantly down on the floor and she cuffs your hands together behind your back.");
	sleep(3000*waitTime);
	console.log("---------------------------------------------------------");
	sleep(500);	
	console.log("Rose: You really are idiotic, aren't you?");
	console.log("---------------------------------------------------------");
	sleep(500);	
	console.log("You won't be able to try that again.");
	sleep(500);
	console.log("---------------------------------------------------------");
	sleep(500);
	var lastwords = readline.question("You feel a sharp pain on your head and you start to drift out of consciousness: ");
	sleep(500);	
	console.log("YOU DIED[going to add expand on this part, it won't just be dying]");

}

////////////RUNAWAY SCENE\\\\\\\\\\\\
			
if (Q4==="Left"){
	console.log("---------------------------------------------------------");
	sleep(500);	
	console.log("You make a dash towards the door!");
	console.log("---------------------------------------------------------");
	sleep(500);	
	console.log("Rose: HEY!!");
	console.log("---------------------------------------------------------");
	sleep(500);	
	var yea = readline.question("You reach the door and you find that it is unlocked: ");
	sleep(1000*waitTime);
	console.log("---------------------------------------------------------");
	sleep(500);	
	console.log("You bolt through the door and slam it shut. You are delighted to see a large knob on the other side and, thinking quickly, you deadbolt it. You turn around and find yourself in a large room very similar to the one you were in before, complete with a chair and a person sitting in it with a bag over their head. However, you could see a panel nearby and inspecting it you realize that this is a torture chamber. The person with the mask on their head is limp.");
	sleep(2000*waitTime);	
	
	console.log("---------------------------------------------------------");
	sleep(500);	
	var helpHostage = readline.question("You see the poor soul who is tied up in the chair and you wonder if you should take them with you(Take/Leave): ");

	
	
}

////////////STAY WITH ROSE SCENE\\\\\\\\\\\\


if (Q4==="Stay"){
	console.log("---------------------------------------------------------");
	sleep(500);
	console.log("You continue along the hallway with Rose, soon you come to the end of the hallway, at which sits a massive door made out of pure steel.");
	sleep(3000*waitTime);
	console.log("---------------------------------------------------------");
	sleep(500);
	console.log("Rose pulls a panel up, revealing a touchscreen, she plants her palm on the door. A loud buzz sounds, then after a few second, the massive door begins to lift.");
	sleep(2000*waitTime);
	console.log("---------------------------------------------------------");
	sleep(500);
	console.log("Rose: Come on...");
	console.log("---------------------------------------------------------");
	sleep(500);
	console.log("Rose walks through the doorway and you walk through after her. When you get through you see a huge room with many other doorways. There are many people all going to various places.");
	sleep(2000*waitTime);
	console.log("---------------------------------------------------------");
	sleep(500);
	var hungry = readline.question("Rose: You hungry?(Yes/No): ");
}	

if (hungry==="Yes"){
	console.log("---------------------------------------------------------");
	sleep(500);
	console.log("Rose: Alright come with me. ");
	RoseLikesPlayer=RoseLikesPlayer+1;
}

if (hungry==="No"){
	console.log("---------------------------------------------------------");
	sleep(500);
	console.log("Rose raises an eyebrow");
	console.log("---------------------------------------------------------");
	sleep(500);
	console.log("Rose: You are a stubborn guy aren't you.");
	
	RoseLikesPlayer=RoseLikesPlayer-1;

}
////////////RUNAWAY SCENE\\\\\\\\\\\\

if (helpHostage==="Take"){

	console.log("---------------------------------------------------------");
	sleep(500);	
	console.log("You run towards the prisoner and untie him as quick as possible. Then you fling him over you shoulder, surprised at how light he is. As you look around you think you are trapped but you notice a door knob on the wall. You pull it open and enter into a long hallway.");
	console.log("You run through the door before Rose can catch up to you, slam it shut, and lock it from the other side.");
	sleep(2000*waitTime);	
	console.log("---------------------------------------------------------");
	sleep(500);	
	var dodge1 = readline.question("As you look around you see several turrets aiming at you, you only have a few seconds before they fire. Which way do you dodge?(Up/Down/Left/Right): ");
	

}

if (helpHostage==="Leave"){

	console.log("---------------------------------------------------------");
	sleep(500);	
	console.log("You run past the prisoner and as you look around you think you are trapped but you notice a door knob on the wall. You pull it open and enter into a long hallway.");
	console.log("You run through the door before Rose can catch up to you, slam it shut, and lock it from the other side.");
	sleep(2000*waitTime);	
	console.log("---------------------------------------------------------");
	sleep(500);	
	var dodge1 = readline.question("As you look around you see several turrets aiming at you, you only have a few seconds before they fire. Which way do you dodge?(Up/Down/Left/Right): ");
	
	if(dodge1!="Up"){
		console.log("---------------------------------------------------------");
		sleep(500);
		console.log("The turrets fire, your body goes limp as sharp pains form all over your body, then you feel no more.");
		sleep(500);
		console.log("---------------------------------------------------------");
		sleep(500);
		console.log("YOU DIED");
	}

}			
				
if (dodge1==="Up"){
	console.log("---------------------------------------------------------");
	sleep(500);
	var dodge2 = readline.question("The turrets fire! Looks like you made the right decision! The turrets begin to take aim again, which way do you dodge?(Up/Down/Left/Right): ");
	if(dodge2!="Up"){
		console.log("---------------------------------------------------------");
		sleep(500);
		console.log("The turrets fire, your body goes limp as sharp pains form all over your body, then you feel no more.");
		sleep(500);
		console.log("---------------------------------------------------------");
		sleep(500);
		console.log("YOU DIED");
	}
	
}

if (dodge2==="Up"){
	console.log("---------------------------------------------------------");
	sleep(500);
	var dodge3 = readline.question("The turrets fire! Looks like you made the right decision! The turrets begin to take aim again, which way do you dodge?(Up/Down/Left/Right): ");
	
	if(dodge3!="Down"){
		console.log("---------------------------------------------------------");
		sleep(500);
		console.log("The turrets fire, your body goes limp as sharp pains form all over your body, then you feel no more.");
		sleep(500);
		console.log("---------------------------------------------------------");
		sleep(500);
		console.log("YOU DIED");
	}
}

if (dodge3==="Down"){
	
	console.log("---------------------------------------------------------");
	sleep(500);
	var dodge4 = readline.question("The turrets fire! Looks like you made the right decision! The turrets begin to take aim again, which way do you dodge?(Up/Down/Left/Right): ");
	
	if(dodge4!="Down"){
		console.log("---------------------------------------------------------");
		sleep(500);
		console.log("The turrets fire, your body goes limp as sharp pains form all over your body, then you feel no more.");
		sleep(500);
		console.log("---------------------------------------------------------");
		sleep(500);
		console.log("YOU DIED");
	}
}

							
if (dodge4==="Down"){
	console.log("---------------------------------------------------------");
	sleep(500);
	var dodge5 = readline.question("The turrets fire! Looks like you made the right decision! The turrets begin to take aim again, which way do you dodge?(Up/Down/Left/Right): ");
	if(dodge5!="Left"){
		console.log("---------------------------------------------------------");
		sleep(500);
		console.log("The turrets fire, your body goes limp as sharp pains form all over your body, then you feel no more.");
		sleep(500);
		console.log("---------------------------------------------------------");
		sleep(500);
		console.log("YOU DIED");
	}
}

if (dodge5==="Left"){
	console.log("---------------------------------------------------------");
	sleep(500);
	var dodge6 = readline.question("The turrets fire! Looks like you made the right decision! The turrets begin to take aim again, which way do you dodge?(Up/Down/Left/Right): ");
	
	if(dodge6!="Right"){
		console.log("---------------------------------------------------------");
		sleep(500);
		console.log("The turrets fire, your body goes limp as sharp pains form all over your body, then you feel no more.");
		sleep(500);
		console.log("---------------------------------------------------------");
		sleep(500);
		console.log("YOU DIED");
	}
}

if (dodge6==="Right"){
	console.log("---------------------------------------------------------");
	sleep(500);
	var dodge7 = readline.question("The turrets fire! Looks like you made the right decision! The turrets begin to take aim again, which way do you dodge?(Up/Down/Left/Right): ");
	
	if(dodge7!="Left"){
		console.log("---------------------------------------------------------");
		sleep(500);
		console.log("The turrets fire, your body goes limp as sharp pains form all over your body, then you feel no more.");
		sleep(500);
		console.log("---------------------------------------------------------");
		sleep(500);
		console.log("YOU DIED");
	}
}	

if (dodge7==="Left"){
	console.log("---------------------------------------------------------");
	sleep(500);
	var dodge8 = readline.question("The turrets fire! Looks like you made the right decision! The turrets begin to take aim again, which way do you dodge?(Up/Down/Left/Right): ");
	
	if(dodge8!="Right"){
		console.log("---------------------------------------------------------");
		sleep(500);
		console.log("The turrets fire, your body goes limp as sharp pains form all over your body, then you feel no more.");
		sleep(500);
		console.log("---------------------------------------------------------");
		sleep(500);
		console.log("YOU DIED");
	}
}

if (dodge8==="Right"){
	console.log("---------------------------------------------------------");
	sleep(500);
	var finishdodge = readline.question("You made it to the end of the tunnel, there is a door with a numpad. You need some password to get through(a-z, no capital letters): ");
	
	if(finishdodge!="ba"){
		console.log("---------------------------------------------------------");
		sleep(500);
		console.log("The turrets fire, your body goes limp as sharp pains form all over your body, then you feel no more.");
		sleep(500);
		console.log("---------------------------------------------------------");
		sleep(500);
		console.log("YOU DIED");
	}
}

if (finishdodge==="ba"){
	console.log("---------------------------------------------------------");
	sleep(500);
	console.log("The door unlocks! You smile, 'What a simple passcode', you think.");
}



console.log("--------DEBUG PAGE--------");

console.log("RoseLikesPlayer amount="+RoseLikesPlayer);

console.log("Rose: I want to help you "+Q1+", I don't believe you were the one who committed those crimes.");

console.log("--------DEBUG PAGE--------");
			
			
		
/*if (Qchair==="Go"){

	Q3="Yes";
	console.log(Q3);
	
}*/

/*else{
	console.log("INCORRECT INPUT ERROR: GAME RESTARTING");
	sleep(500);	
	console.log("RESTARTING...");
	sleep(1000);
}*/
			
			
