function Binconvert(Binbit){

BinString="";
	
	if (Binbit<0){
	console.log('no negative number support yet');
	return;
	}
	
	for (i=256; i >= 1; i/=2){
		if (Binbit>=i) {
		BinString +="1";
		Binbit-=i;
		}
		else{BinString +="0";}
	}
	console.log(BinString);
}

Binconvert(231);