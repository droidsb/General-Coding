var d6 = Math.ceil(Math.random() * 6);
var aster = '';

function bar(label, value) {
    var x = 0;

     value = value / 100;

    while (x < value - 1) {

        aster = aster + '*';
        x = x + 1;
    }
    console.log(label, value, aster);
    aster = '';
   
}

for (i = 0; i <= 10; i = i + 1) {

  
    bar("foo", d6);
}


function binsum(num1, num2, num3, num4, num5, num6) {
    sum = num1 + num2 + num3 + num4 + num5 + num6;
    console.log(sum);
}

binsum(0,0,0,0,0,0);