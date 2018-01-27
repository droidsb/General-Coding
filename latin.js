var readline = require('readline-sync');

while(true){


var phrase = readline.question("You: ");


var translated = phrase.replace('I am','Ago')
.replace('I understand','Intellego')
.replace('I partly understand','semi intellego')
.replace('I have no questions','Non habeo quaestiones')
.replace('I like','Mihi placet')
.replace(' day',' dies')
.replace('is','quod')
.replace('I ','Ego ')
.replace('was','erat')
.replace('  ',' ')
.replace('my','mea')
.replace('favorite','ventus')
.replace('very good','optime')
.replace('good','bene')
.replace('How do you do','Quid agis')
.replace('How are you','Quid agis')
.replace('yesterday','heri')
.replace('today','hodie')
.replace('tomorrow','cras')
.replace('the day before','pridie')
.replace('Sunday','dies Solis')
.replace('Monday','dies Lunae')
.replace('Tuesday','dies Martis')
.replace('Wednesday','dies Mercurii')
.replace('Thursday','dies Iovis')
.replace('Friday','dies Veneris')
.replace('Saturday','dies Saturni')
.replace('thus truly','ita vero')
.replace('without a doubt','sine dubio')
.replace('certe','indeed')
.replace('female teacher','magistra')
.replace('boy friend','amicus')
.replace('girl friend','amica');
console.log(translated);

}