var http = require('http');
var util = require('util');
var config = require('./muconfig');

http.createServer(function(req, res) {
	//console.log(util.inspect(req));
	var data = "";
	req.on('data', function(chunk) {
		data += chunk.toString();
      //console.log(chunk.toString());
    });
    
    req.on('end', function() {
		if(req.method == "PUT"){
			//console.log(data);
			var json;
			try{
				json = JSON.parse(data);
			}catch(err){
				console.log("ERR: " + err.message);
			}
			if(json && json.name && json.pass && json.name == config.auth.name && json.pass == config.auth.pass){
				console.log("AUTH succeeded");
			}else{
				console.log("AUTH failed or not valid json in body");
			}
		}
		data = "";
      // empty 200 OK response for now
    	res.writeHead(200, "OK", {'Content-Type': 'text/html'});
    	res.end();
    });
}).listen(3001);
