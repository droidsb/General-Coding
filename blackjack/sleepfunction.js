function sleep(miliseconds) {
           var currentTime = new Date().getTime();

           while (currentTime + miliseconds >= new Date().getTime()) {
           }
       }

console.log("Hello World!");

sleep(5000);
console.log("I'll say it again... Hello World!");