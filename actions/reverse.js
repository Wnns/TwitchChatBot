exports.action = {
	
	message: function(from, channel, message, command, argument){

		if(command == '!reverse'){

			var reversedMessage = argument.split('').reverse().join('');
			global.say(channel, reversedMessage);
		}
	}
}