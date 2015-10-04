var d6 = Math.ceil(Math.random() * 6);




function binsum(num1, num2, num3, num4, num5, num6) {
    var aster1 = '';
    var aster2 = '';
    var aster3 = '';
    var aster4 = '';
    var aster5 = '';
    var aster6 = '';
    for (x = 0; x < 1000; x = x + 1) {
        d6 = Math.ceil(Math.random() * 6);

        if (d6 === 1) {
            num1 = num1 + 1;
            aster1 = aster1 + '*';
        } else if (d6 === 2) {
            num2 = num2 + 1;
            aster2 = aster2 + '*';
        } else if (d6 === 3) {
            num3 = num3 + 1;
            aster3 = aster3 + '*';
        } else if (d6 === 4) {
            num4 = num4 + 1;
            aster4 = aster4 + '*';
        } else if (d6 === 5) {
            num5 = num5 + 1;
            aster5 = aster5 + '*';
        } else if (d6 === 6) {
            num6 = num6 + 1;
            aster6 = aster6 + '*';
        }
    }

    console.log(num1, aster1);
    console.log(num2, aster2);
    console.log(num3, aster3);
    console.log(num4, aster4);
    console.log(num5, aster5);
    console.log(num6, aster6);
    sum = num1 + num2 + num3 + num4 + num5 + num6;

    console.log(sum);

}

function bar(label, value) {
    var x = 0;

    value = value / 100;
    console.log(value);

}
bar("foo", d6);
binsum(0, 0, 0, 0, 0, 0);

