function d6() {
    var l= Math.ceil(Math.random() * 6);
    
}



function d6(num1, num2, num3, num4, num5, num6) {
    var aster1 = '';
    var aster2 = '';
    var aster3 = '';
    var aster4 = '';
    var aster5 = '';
    var aster6 = '';
    for (x = 0; x < 1000; x = x + 1) {
        var RN=Math.ceil(Math.random() * 6);

        if (RN === 1) {
            num1 = num1 + 1;
            //aster1 = aster1 + '*';
        } else if (RN === 2) {
            num2 = num2 + 1;
            //aster2 = aster2 + '*';
        } else if (RN === 3) {
            num3 = num3 + 1;
            //aster3 = aster3 + '*';
        } else if (RN === 4) {
            num4 = num4 + 1;
            //aster4 = aster4 + '*';
        } else if (RN === 5) {
            num5 = num5 + 1;
            //aster5 = aster5 + '*';
        } else if (RN=== 6) {
            num6 = num6 + 1;
            //aster6 = aster6 + '*';
        }
    }
    var i = 0;
    var i2 = 0;
    var i3 = 0;
    var i4 = 0;
    var i5 = 0;
    var i6 = 0;
    while (i < num1 / 2) {
        aster1 = aster1 + '*';
        i = i + 1;
    }
    while (i2 < num1 / 2) {
        aster2 = aster2 + '*';
        i2 = i2 + 1;
    }
    while (i3 < num1 / 2) {
        aster3 = aster3 + '*';
        i3 = i3 + 1;
    }
    while (i4 < num1 / 2) {
        aster4 = aster4 + '*';
        i4 = i4 + 1;
    }
    while (i5 < num1 / 2) {
        aster5 = aster5 + '*';
        i5 = i5 + 1;
    }
    while (i6 < num1 / 2) {
        aster6 = aster6 + '*';
        i6 = i6 + 1;
    }

    console.log(num1, aster1);
    console.log(num2, aster2);
    console.log(num3, aster3);
    console.log(num4, aster4);
    console.log(num5, aster5);
    console.log(num6, aster6);
    sum = num1 + num2 + num3 + num4 + num5 + num6;

    

}

function bar(label, value) {
    var x = 0;

    value = value / 100;
    console.log(value);

}
bar("foo", d6);
d6(0, 0, 0, 0, 0, 0);