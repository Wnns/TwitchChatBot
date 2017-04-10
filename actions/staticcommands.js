exports.action = {
	
	message: function(from, channel, message, command, argument){

		var staticCommands = Object.keys(global.staticCommands);
		message = message.trim();

		for(var i = 0; i < staticCommands.length; i++){

			if(message == staticCommands[i]){

				global.say(channel, global.staticCommands[staticCommands[i]]);
				return;
			}
		}
	}
}