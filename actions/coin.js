exports.action = {
	
	message: function(from, channel, message, command, argument){

		if(command == '!coin'){

			var coinResult = Math.floor(Math.random() * 2);

			if(coinResult == 0){

				global.say(channel, from + " flipped head");
			}
			else{

				global.say(channel, from + " flipped tail");
			}
		}
	}
}