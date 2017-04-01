var irc = require('irc');
require('./config');
var config = global.config;
var actions = require('./actions');

global.client = new irc.Client(config.twitchHost, config.botLogin, {

	port: config.twitchPort,
	userName: config.botLogin,
	realName: config.botLogin,
	password:config.botOAuth,
	channels: config.botChannels,
	secure: false,
	sasl: false,
	autoConnect: false
});

var client = global.client;

client.addListener('message', function(from, channel, message){

	actions.processMessage(from, channel, message);
});

client.addListener('error', function(message){

	if(!config.logErrors){

		return;
	}
	
	console.log("ERROR: ");
	console.log(message);
});

client.connect(function(message){

	console.log("*** Connected ***");
});

global.say = function(channel, message){

	//Todo: twitch restrictions following
	global.client.say(channel, message);
}