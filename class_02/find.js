//this finds the miles traveled at the speed and time given
for(x=0; x<=10; x=x+1){
var hours=Math.ceil(Math.random() * 8);
var speed=Math.floor(Math.random() * 160)-80;
var MyArg = speed*hours;
function distance(MyArg){
if(hours<1){
console.log('The hours can not be below or equal to zero');
return;
}

if(speed*hours>0){
return MyArg;
}
if(speed*hours<0){
return MyArg*-1;

}

}

console.log('hours:'+hours);
console.log('MPH:'+speed);
console.log(distance(MyArg)+' miles traveled');
console.log('');


}