//this finds the miles traveled at the speed and time given
function absolute(MyArg) {
   if (MyArg >= 0) {
        return MyArg;
    }
    if (MyArg < 0) {
        return -MyArg;

    }

}
for (x = 0; x <= 10; x = x + 1) {
    var hours = Math.ceil(Math.random() * 8);
    var speed = Math.floor(Math.random() * 160) - 80;
   

    console.log('hours:' + hours);
    console.log('MPH:' + speed);
    console.log(absolute(speed*hours) + ' miles traveled');
    console.log('');


}