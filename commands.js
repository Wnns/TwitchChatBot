exports.execute = function(from, message){

	message = message.substring(1);

	var command = message.split(" ")[0];
	var arguments = message.split(" ")[1];
	var response;

	if(commands[command] != undefined){

		response = commands[command](from, arguments);
	}

	return response;
}

var commands = {

	hi: function(){ return "Hello" },
	dice: function(from){ return from + " rolled: " + (1 + Math.floor(Math.random() * 6)); },
	kappa: function(){ return "Kappa" }
};