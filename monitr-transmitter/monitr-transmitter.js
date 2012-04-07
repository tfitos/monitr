var http = require('http');
var util = require('util');
var config = require('./mtconfig');

function transmit(options, data){

	var req = http.request(options, function (res) {
		res.setEncoding("utf-8");
		res.on("data", function(chunk){
			console.log(chunk);
		});
		res.on("end", function(){
			console.log("status: " + res.statusCode);
		});
	});

	req.on("error", function(e) {
		console.log("problem with request: " + e.message);
	});
	req.write(data);
	req.end();

}

http.createServer(function(req, res) {
	//console.log(util.inspect(request.body));
	req.on('data', function(chunk) {
		//console.log("==== DATA ====")
        console.log(chunk.toString());
		if(config.destination){
			transmit(config.destination, chunk.toString());
		}
    });
    
    req.on('end', function() {
      // empty 200 OK response for now
      res.writeHead(200, "OK", {'Content-Type': 'text/html'});
      res.end();
    });
}).listen(config.port);
