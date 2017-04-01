global.currentRaffles = {};

exports.action = {
	
	message: function(from, channel, message, command, argument){

		if(command == '!createraffle'){

			if(from != channel.substring(1)){

				global.say(channel, '/pm ' + from + ' You are not owner of this channel');

				return;
			}

			if(raffleExistsOn(channel) && global.currentRaffles[channel].isActive){

				global.say(channel, '/pm ' + from + ' You are not owner of this channel');

				return;
			}

			global.currentRaffles[channel] = {

				isActive: true,
				participants: [],
				raffleDuration: parseInt(argument),
				timeout: null
			};

			global.currentRaffles[channel].timeout = setTimeout(function(){

				if(global.currentRaffles[channel].participants.length == 0){

					global.say(channel, 'Nobody took part in the raffle.');
					return;
				}

				var winner = Math.floor(Math.random() * global.currentRaffles[channel].participants.length);

				global.say(channel, global.currentRaffles[channel].participants[winner] + ' won the raffle!');
				global.say(channel, '/pm ' + channel.substring(1) + ' ' +  global.currentRaffles[channel].participants[winner] + ' won the raffle!');

				delete global.currentRaffles[channel];

			}, global.currentRaffles[channel].raffleDuration* 1000);

			global.say(channel, 'Raffle started! Type !raffle to take part!');

		}

		if(command == '!raffle'){

			if(raffleExistsOn(channel) && global.currentRaffles[channel].participants.indexOf(from) == -1){

				global.currentRaffles[channel].participants.push(from)
			}
		}

		if(command == '!cancelraffle'){

			if(raffleExistsOn(channel)){

				clearTimeout(global.currentRaffles[channel].timeout);
				delete global.currentRaffles[channel];

				global.say(channel, 'Raffle canceled.');
			}
		}
	}
}

function raffleExistsOn(channel){

	if(global.currentRaffles[channel]){

		return true;
	}

	return false;
}