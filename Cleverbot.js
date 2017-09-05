var Cleverbot = require('cleverbot-node');
    cleverbot = new Cleverbot;
    cleverbot.configure({botapi: "IAMKEY"});
    cleverbot.write(cleverMessage, function (response) {
       console.log(response.output);
    });
    
    