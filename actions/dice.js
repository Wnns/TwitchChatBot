exports.action = {
	
	message: function(from, channel, message, command, argument){

		if(command == '!dice'){

			var diceResult = 1 + Math.floor(Math.random() * 6);
			global.say(channel, from + " rolled " + diceResult);
		}
	}
}