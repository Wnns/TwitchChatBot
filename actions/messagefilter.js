exports.action = {
	
	message: function(from, channel, message, command, argument){

		for(var i = 0; i < global.messageFilter.bannedWords.length; i++){

			if(message.split(' ').indexOf(global.messageFilter.bannedWords[i]) > -1){

				global.say(channel, '/timeout ' + from + ' ' + global.messageFilter.timeout);
			}
		}
	}
}