	var looper = 1; 
	var x = Math.ceil(Math.random() * 10);
	var y = Math.ceil(Math.random() * 10);
while(x!=y){
looper=looper+1
	if(x>=y || x<=y){
		if(x!=y){	
		console.log('The numbers are not equal');
	
	
			if(x<y){
			console.log(x+'<'+y);
			
			var x = Math.ceil(Math.random() * 10);
			var y = Math.ceil(Math.random() * 10);
			}
	
			else if(x>y){
			console.log(x+'>'+y);
			
			var x = Math.ceil(Math.random() * 10);
			var y = Math.ceil(Math.random() * 10);
			}
				if(x===y){
			console.log('SUCCESS');
			console.log('The numbers are equal');
			console.log(x+'='+y);
			console.log('Repeated '+looper+' times');
		
		
			}
		}


	
	}	
			
}