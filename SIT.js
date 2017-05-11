var readline = require('readline-sync');
var passCheck=null;

var d = new Date();
var year = d.getFullYear();

var userstat="signed out";

var user = readline.question("Username: ");
var pass = readline.question("Password: ", {
  hideEchoBack: true 
});
if(user==='droidsb'){
	passCheck="awesome";
	
}

if(pass===passCheck){
	console.log("signed in");
	userstat="signed in";
}
if(pass != passCheck){
	console.log("No such user or incorrect password");
}



var droidsbAccount = function(){
	var age=year-2001;
	var dayoftheweek=0;
	var month=0;
	if(d.getDay()===0){
		dayoftheweek="Sun";
	}
	if(d.getDay()===1){
		dayoftheweek="Mon";
	}
	if(d.getDay()===2){
		dayoftheweek="Tue";
	}
	if(d.getDay()===3){
		dayoftheweek="Wed";
	}
	if(d.getDay()===4){
		dayoftheweek="Thu";
	}
	if(d.getDay()===5){
		dayoftheweek="Fri";
	}
	if(d.getDay()===6){
		dayoftheweek="Sat";
	}
	
	
	if(d.getMonth()===0){
		month="Jan";
	}
	if(d.getMonth()===1){
		month="Feb";
	}
	if(d.getMonth()===2){
		month="Mar";
	}
	if(d.getMonth()===3){
		month="Apr";
	}
	if(d.getMonth()===4){
		month="May";
	}
	if(d.getMonth()===5){
		month="Jun";
	}
	if(d.getMonth()===6){
		month="Jul";
	}
	if(d.getMonth()===7){
		month="Aug";
	}
	if(d.getMonth()===8){
		month="Sep";
	}
	if(d.getMonth()===9){
		month="Oct";
	}
	if(d.getMonth()===10){
		month="Nov";
	}
	if(d.getMonth()===11){
		month="Dec";
	}
	console.log("It is "+dayoftheweek+" "+month+" "+d.getDate()+", "+d.getFullYear());
	
}

if(user==='droidsb' && userstat==="signed in"){
	droidsbAccount();
}

