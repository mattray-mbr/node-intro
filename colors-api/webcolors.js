
var _ = require('underscore') //accesses underscore to use .forEach
var request = require('request');	//accesses requrest method to get the json file
request('https://cdn.rawgit.com/metaraine/swatch/74580660c9229541622bbf1fd4198618d9f677e5/webcolors.json', function(error, response, body){
	if(!error && response.statusCode == 200){
		var colors = JSON.parse(body) //parse json file if no error code
	} //both parse and other functions are inside request function
	var userColor = process.argv[2].toLowerCase()
	var output //output is declared outside the foreach in order to console log it
		_.forEach(colors, function(obj){
			if(obj['name'].toLowerCase() === userColor){
				// console.log('yes')
				output = obj['rgb'] //rgb is an object that contains the values
			}
	})
	console.log(output['r'], output['g'], output['b']) //splits the rgb numbers into a readable format
})