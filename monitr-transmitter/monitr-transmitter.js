var http = require('http');
var util = require('util');
var config = require('./mtconfig');
var winston = require('winston');

winston.add(winston.transports.File, { filename: config.logfile, timestamp: true, json: false, maxsize: 1024*1024*10, maxFiles: 10 });

function transmit(options, data){

	var req = http.request(options, function (res) {
		res.setEncoding("utf-8");
		res.on("data", function(chunk){
			//console.log(chunk);
		});
		res.on("end", function(){
			winston.log("info", "data transmitted; status: " + res.statusCode);
		});
	});

	req.on("error", function(e) {
		winston.log("error","problem with request: " + e.message);
	});
	var body = {
		name: config.auth.name,
		pass: config.auth.pass,
		data: data
	};
	req.write(JSON.stringify(body));
	//req.write("");
	req.end();

}

http.createServer(function(req, res) {
	var data = "";
	//console.log(util.inspect(request.body));
	req.on('data', function(chunk) {
		//console.log("==== DATA ====")
        winston.log("debug", chunk.toString());
		data += chunk.toString();
    });
    
    req.on('end', function() {
      // empty 200 OK response for now
	  if(config.destination){
	  	transmit(config.destination, data);
	  }
	  data = "";
      res.writeHead(200, "OK", {'Content-Type': 'application/json'});
      res.end();
    });
}).listen(config.port);
