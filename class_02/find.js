//this finds the miles traveled at the speed and time given
function distance(MyArg) {
    if (MyArg < 1) {
        console.log('The hours or speed can not be below or equal to zero');
        return;
    }

    if (MyArg > 0) {
        return MyArg;
    }
    if (MyArg < 0) {
        return -MyArg;

    }

}
for (x = 0; x <= 10; x = x + 1) {
    var hours = Math.ceil(Math.random() * 8);
    var speed = 0;//Math.floor(Math.random() * 160) - 80;
   

    console.log('hours:' + hours);
    console.log('speed:' + speed);
    console.log(distance(speed*hours) + ' miles traveled');
    console.log('');


}