var fs = require('fs');

global.plugins = {};

var pluginsList = fs.readdirSync('./plugins');

for(var i = 0; i < pluginsList.length; i++){

	if(pluginsList[i].substring(pluginsList[i].length - 2) != 'js'){

		continue;
	}

	global.plugins[pluginsList[i]] = require('./plugins/' + pluginsList[i]);

	console.log(global.plugins[pluginsList[i]].plugin.name + ' loaded');
}
