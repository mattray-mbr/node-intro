


var request = require('request');
request('https://cdn.rawgit.com/metaraine/swatch/74580660c9229541622bbf1fd4198618d9f677e5/webcolors.json', function(error, response, body){
	if(!error && response.statusCode == 200){
		var colors = JSON.stringify(body)
		console.log(colors)
	}
})