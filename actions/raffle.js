// TODO: make raffle support multiple channels
exports.action = {
	
	message: function(from, channel, message, command, argument){

		if(command == '!createraffle'){

			if(from != channel.substring(1)){

				global.client.say(channel, '/pm ' + from + ' You are not owner of this channel');
				return;
			}

			if(global.currentRaffle && global.currentRaffle.isActive){

				return;
			}

			global.currentRaffle = {

				isActive: true,
				participants: [],
				raffleDuration: parseInt(argument)
			};

			setTimeout(function(){

				if(global.currentRaffle.participants.length == 0){

					global.client.say(channel, 'Nobody took part in the raffle.');
					return;
				}

				var winner = Math.floor(Math.random() * global.currentRaffle.participants.length);

				global.client.say(channel, global.currentRaffle.participants[winner] + ' won the raffle!');
				global.client.say(channel, '/pm ' + channel.substring(1) + ' ' +  global.currentRaffle.participants[winner] + ' won the raffle!');

				global.currentRaffle = {};

			}, global.currentRaffle.raffleDuration* 1000);
		}

		if(command == '!raffle'){

			if(global.currentRaffle.participants.indexOf(from) == -1){

				global.currentRaffle.participants.push(from)
			}
		}
	}
}