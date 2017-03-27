var bannedWords = require('./config').bannedWords;

exports.processMessage = function(from, message){

	if(message.charAt(0) == '!'){

		return executeCommand(from, message);
	}

	var messageWords = message.split(" ");

	for(var i = 0; i < bannedWords.length; i++){

		if(messageWords.indexOf(bannedWords[i]) > -1){

			return '/timeout ' + from + "1";
		}
	}

}

function executeCommand(from, message){

	message = message.substring(1);

	var command = message.split(" ")[0];
	var argument = message.split(" ")[1];
	var response;

	if(commands[command] != undefined){

		response = commands[command](from, argument);
	}

	return response;
}

var commands = {

	hi: function(){ return "Hello" },
	dice: function(from){ return from + " rolled: " + (1 + Math.floor(Math.random() * 6)) },
	kappa: function(){ return "Kappa" },
	test: function(from, arg){ 

		if(arg == undefined){

			return "It works!";
		}

		return arg.split("").reverse().join("") 
	}
};