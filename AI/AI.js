var runs=0;
//["forward","back","left","right","wall"]
while(runs!=100){
runs=runs+1;
var auto=true;
var readline = require('readline-sync');
var fs = require('fs');
var chanceDoc=fs.readFileSync('./choices.js', "utf8");
var fails=fs.readFileSync('./fails.js', "utf8");
var FailMoves=JSON.parse(fails);
function sleep(miliseconds) {
   var currentTime = new Date().getTime();

   while (currentTime + miliseconds >= new Date().getTime()) {
   }
}

console.log("--------------------------------------------------");



var forward=Math.floor(Math.random() * 2);
if(forward===1){
	
	forward=true;

}

if(forward!=1){

	forward=false;

}

var back=Math.floor(Math.random() * 2);
if(back===1){
	
	back=true;

}

if(back!=1){

	back=false;

}

var left=Math.floor(Math.random() * 2);
if(left===1){
	
	left=true;

}

if(left!=1){

	left=false;

}

var right=Math.floor(Math.random() * 2);
if(right===1){
	
	right=true;

}

if(right!=1){

	right=false;

}

//        Forward, Back, Left, Right.
var input=[forward, back, left,right];

var choices=[];



var save1=input.shift();
var save2=input.shift();
var save3=input.shift();
var save4=input.shift();

var AChoose;














function choose(choices){
var choiceChance=JSON.parse(chanceDoc);
var chanceSave=JSON.parse(chanceDoc);

if(auto===true){
	if(save1===false && save2===false && save3===false && save4===false){
	var direcErr=Math.floor(Math.random() * 4);
	if(direcErr===0){
		choices.push("forward");
		choices.push("wall");
		choices.push("wall");
		choices.push("wall");
		console.log("ERROR!!! FIXING");
	
			for(var i = choiceChance.length - 1; i >= 0; i--) {
			if(choiceChance[i] === "back") {
			   choiceChance.splice(i, 1);
			}
		}

	
	
		for(var i = choiceChance.length - 1; i >= 0; i--) {
			if(choiceChance[i] === "left") {
			   choiceChance.splice(i, 1);
			}
		}

	
	
		for(var i = choiceChance.length - 1; i >= 0; i--) {
			if(choiceChance[i] === "right") {
			   choiceChance.splice(i, 1);
			}
		}
		}
		if(direcErr===1){
		choices.push("wall");
		choices.push("back");
		choices.push("wall");
		choices.push("wall");
		console.log("ERROR!!! FIXING");
	
			for(var i = choiceChance.length - 1; i >= 0; i--) {
			if(choiceChance[i] === "forward") {
			   choiceChance.splice(i, 1);
			}
		}

	
	
		for(var i = choiceChance.length - 1; i >= 0; i--) {
			if(choiceChance[i] === "left") {
			   choiceChance.splice(i, 1);
			}
		}

	
	
		for(var i = choiceChance.length - 1; i >= 0; i--) {
			if(choiceChance[i] === "right") {
			   choiceChance.splice(i, 1);
			}
		}
		}
		if(direcErr===2){
		choices.push("wall");
		choices.push("wall");
		choices.push("left");
		choices.push("wall");
		console.log("ERROR!!! FIXING");
	
			for(var i = choiceChance.length - 1; i >= 0; i--) {
			if(choiceChance[i] === "forward") {
			   choiceChance.splice(i, 1);
			}
		}

	
	
		for(var i = choiceChance.length - 1; i >= 0; i--) {
			if(choiceChance[i] === "back") {
			   choiceChance.splice(i, 1);
			}
		}

	
	
		for(var i = choiceChance.length - 1; i >= 0; i--) {
			if(choiceChance[i] === "right") {
			   choiceChance.splice(i, 1);
			}
		}
		}
		if(direcErr===3){
		choices.push("wall");
		choices.push("wall");
		choices.push("wall");
		choices.push("right");
		console.log("ERROR!!! FIXING");
	
			for(var i = choiceChance.length - 1; i >= 0; i--) {
			if(choiceChance[i] === "forward") {
			   choiceChance.splice(i, 1);
			}
		}

	
	
		for(var i = choiceChance.length - 1; i >= 0; i--) {
			if(choiceChance[i] === "back") {
			   choiceChance.splice(i, 1);
			}
		}

	
	
		for(var i = choiceChance.length - 1; i >= 0; i--) {
			if(choiceChance[i] === "left") {
			   choiceChance.splice(i, 1);
			}
		}
		}
	
	
	

	
	}

	else{

		if (save1===true){

			choices.push("forward");
	


		}
		if (save1===false){

			choices.push("wall");
			for(var i = choiceChance.length - 1; i >= 0; i--) {
			if(choiceChance[i] === "forward") {
			   choiceChance.splice(i, 1);
			}
		}

		}




		if (save2===true){

			choices.push("back");
	


		}
		if (save2===false){

			choices.push("wall");
			for(var i = choiceChance.length - 1; i >= 0; i--) {
			if(choiceChance[i] === "back") {
			   choiceChance.splice(i, 1);
			}
	
		}

		}
		if (save3===true){

			choices.push("left");
	


		}
		if (save3===false){

			choices.push("wall");
			for(var i = choiceChance.length - 1; i >= 0; i--) {
			if(choiceChance[i] === "left") {
			   choiceChance.splice(i, 1);
			}
		}

		}
		if (save4===true){

			choices.push("right");
	

		}
		if (save4===false){

			choices.push("wall");
			for(var i = choiceChance.length - 1; i >= 0; i--) {
			if(choiceChance[i] === "right") {
			   choiceChance.splice(i, 1);
			}
	
		}

		}
	}
}
if(auto===false){
choices=["forward","back","left","right"]

}
console.log(choices);
//sleep(1000);
//console.log(save1);
//console.log(save2);
//console.log(save3);
//console.log(save4);










	
	var move=false;
	var Direction=Math.floor(Math.random() * choiceChance.length);
	//console.log(Direction);
	//console.log(choiceChance);
	
	var choosenDirec=choiceChance[Direction];
	
	if(choosenDirec==="wall"){
		
		move=false;
		console.log("Logging failure to move...");
		
	}
	
	if(choosenDirec==="forward"){
		
		move=true;
	
	
	}
	if(choosenDirec==="back"){
		
		move=true;
	
	
	}
	if(choosenDirec==="left"){
		
		move=true;
	
	
	}
	
	if(choosenDirec==="right"){
		
		move=true;
	
	
	}
	
	if(move===true){
	
		//choiceChance.push(choosenDirec.splice(0,1));
		
	
	
	
	
	chanceSave.push(choosenDirec);
	//console.log(chanceSave);
	//console.log(JSON.stringify(choiceChance));
	}
	//fs.readFileSync('./choices.js', "utf8");
	fs.writeFileSync('./choices.js', JSON.stringify(chanceSave));

//console.log();
console.log(choosenDirec);

console.log("--------------------------------------------------");

	if(move===false){

		
		
		FailMoves.push(choosenDirec);
		
		
		fs.writeFileSync('./fails.js', JSON.stringify(FailMoves));
		
	}
	
}
	
	choose(choices);
	
}


var ForwardMoves=[];
var BackMoves=[];
var LeftMoves=[];
var RightMoves=[];
var failcount=[];





for(var i = JSON.parse(chanceDoc).length - 1; i >= 0; i--) {
		if(JSON.parse(chanceDoc)[i] === "forward") {
		   ForwardMoves.push(JSON.parse(chanceDoc).splice(i,1));
		}
	}
	
	for(var i = JSON.parse(chanceDoc).length - 1; i >= 0; i--) {
		if(JSON.parse(chanceDoc)[i] === "back") {
		   BackMoves.push(JSON.parse(chanceDoc).splice(i,1));
		}
	}
	
	for(var i = JSON.parse(chanceDoc).length - 1; i >= 0; i--) {
		if(JSON.parse(chanceDoc)[i] === "left") {
		   LeftMoves.push(JSON.parse(chanceDoc).splice(i,1));
		}
	}
	
	for(var i = JSON.parse(chanceDoc).length - 1; i >= 0; i--) {
		if(JSON.parse(chanceDoc)[i] === "right") {
		   RightMoves.push(JSON.parse(chanceDoc).splice(i,1));
		}
	}
	
	for(var i = JSON.parse(fs.readFileSync('./fails.js', "utf8")).length - 1; i >= 0; i--) {
		if(JSON.parse(fs.readFileSync('./fails.js', "utf8"))[i] === "wall") {
		   failcount.push(JSON.parse(fs.readFileSync('./fails.js', "utf8")).splice(i,1));
		}
	}



var MoveF=Number(ForwardMoves.length)-1;
var MoveB=Number(BackMoves.length)-1;
var MoveL=Number(LeftMoves.length)-1;
var MoveR=Number(RightMoves.length)-1;
var MoveFA=Number(failcount.length);
var Total=MoveF+MoveB+MoveL+MoveR+MoveFA;
	
console.log("Forward moves:"+MoveF);
console.log("Backward moves:"+MoveB);
console.log("Left moves:"+MoveL);
console.log("Right moves:"+MoveR);
console.log("Fails:"+MoveFA);


console.log("Total Moves:"+Total);




