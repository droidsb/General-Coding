
var x = Math.ceil(Math.random() * 10);
var y = Math.ceil(Math.random() * 10);
if(x>=y || x<=y){
	if(x!=y){	
	console.log('The numbers are not equal');
	
	
		if(x<y){
		console.log(x+'<'+y);
		}
	
		else if(x>y){
		console.log(x+'>'+y);
		}
	}

		else if(x===y){
		console.log('The numbers are equal');
		console.log(x+'='+y);
		
		
		}
	
}	