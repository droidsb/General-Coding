var d6 = Math.ceil(Math.random() * 6);
var aster='';

function bar(label, value){
var x =0;

value=value*50;

while(x<value-1){

aster=aster+'*';
x=x+1;
}
console.log(label, value, aster);
aster='';
}

for(i=0; i<=10; i=i+1){
var R = Math.random() * 1;
bar("foo",R);
}
