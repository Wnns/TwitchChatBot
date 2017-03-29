var bannedWords = require('./config').bannedWords;
var config = require('./config').config;
var plugins = global.plugins;

exports.processMessage = function(from, message){

	if(message.charAt(0) == '!'){

		return executeCommand(from, message);
	}

	var messageWords = message.split(' ');

	for(var i = 0; i < bannedWords.length; i++){

		if(messageWords.indexOf(bannedWords[i]) > -1){

			return '/timeout ' + from + '1';
		}
	}
}

function executeCommand(from, message){

	message = message.substring(1);

	var command = message.split(' ')[0];
	var arguments = message.split(' ').slice(1).join(' ');
	var response;

	var pluginsList = Object.keys(plugins);

	for(var i = 0; i < pluginsList.length; i++){

		if(plugins[pluginsList[i]].plugin.command == command){

			response = plugins[pluginsList[i]].plugin.action(from, arguments);
		}
	}

	if(commands[command] != undefined){

		response = commands[command](from, arguments);
	}

	return response;
}

var commands = {

	hi: function(){ return 'Hello' },
	dice: function(from){ return from + ' rolled: ' + (1 + Math.floor(Math.random() * 6)) },
	kappa: function(){ return 'Kappa' }
};