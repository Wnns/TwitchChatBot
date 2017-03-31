var fs = require('fs');

var actions = {};

// Load all bot actions

var actionList = fs.readdirSync('./actions');

for(var i = 0; i < actionList.length; i++){

	if(actionList[i].substring(actionList[i].length - 2) != 'js'){

		continue;
	}

	actions[actionList[i]] = require('./actions/' + actionList[i]);
}

exports.processMessage = function(from, channel, message){

	var command = '';
	var argument = '';

	if(message.charAt(0) == '!'){

		command = message.split(' ')[0];
		argument = message.substring(message.indexOf(' ')+1);
	}

	for(var i = 0; i < actionList.length; i++){

		actions[actionList[i]].action.message(from, channel, message, command, argument);
	}
}