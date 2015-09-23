var fish = Math.ceil(Math.random() * 1000);
var car = Math.ceil(Math.random() * 6);
var ani =1;
var number=1;
var FC=car*fish;


console.log(fish); 
console.log(fish%2);
	if(fish%2===0){

	console.log('no bugs detected');
	}
	else if(fish%2>0){
	console.log('there are bugs in the program');
	}

	if(FC%5===0){
	console.log('success');

	}
	if(FC%5===1){
	console.log('CRACK!');

	}
	if(FC%5===2){
	console.log('BOOM!');

	}
	if(FC%5===3){
	console.log('Sizzle');

	}
	if(FC%5===4){
	console.log('SNAP!');

	}
	if(FC%5===0 && FC%10===0 ){
	console.log('BOOM CRASH');

	}
	console.log('%5:'+FC%5+' %10:'+FC%10);
	console.log(FC%5);