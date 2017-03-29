exports.plugin = {

	name: 'String reverse',
	command: 'reverse',

	action: function(from, arguments){

		return arguments.split('').reverse().join('');
	}
}