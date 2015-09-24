//this finds the miles traveled at the speed and time given
function distance(MyArg) {
    if (hours < 1) {
        console.log('The hours can not be below or equal to zero');
        return;
    }

    if (speed * hours > 0) {
        return MyArg;
    }
    if (speed * hours < 0) {
        return -MyArg;

    }

}
for (x = 0; x <= 10; x = x + 1) {
    var hours = Math.ceil(Math.random() * 8);
    var speed = Math.floor(Math.random() * 160) - 90;
   

    console.log('hours:' + hours);
    console.log('speed:' + speed);
    console.log(distance(speed*hours) + ' miles traveled');
    console.log('');


}