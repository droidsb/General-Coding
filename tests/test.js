var grab = function(){};

grab.prototype.grab = function(word,num,anything,num2,num3){
	console.log(word,num,anything);
	var myarray=[num,num2,num3];
	console.log(myarray);
}


module.exports = new grab();