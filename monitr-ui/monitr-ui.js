var http = require('http');
var util = require('util');
var config = require('./muconfig');
var fs = require('fs');
var winston = require('winston');

winston.add(winston.transports.File, { filename: config.logfile, timestamp: true, json: false, maxsize: 1024*1024*10, maxFiles: 10 });


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
				winston.log('error', 'ERR: ' + err.message);
				//console.log("ERR: " + err.message);
			}
			if(json && json.name && json.pass && json.name == config.auth.name && json.pass == config.auth.pass){
				winston.log('debug', 'AUTH succeeded');
				//console.log("AUTH succeeded");
				fs.writeFile(config.filepath, json.data, function(err){
					if(err) {winston.log('error', 'ERR: '+ err.message);}
					else{
						winston.log('info', "data stored to " + config.filepath);
					}
				});
				res.writeHead(200, "OK", {'Content-Type': 'text/html'});
				res.end();
			}else{
				winston.log('warn', "AUTH failed or not valid json in body");
				res.writeHead(403, "Forbidden", {'Content-Type': 'text/html'});
				res.end();
			}
		}else if (req.method == "GET"){
			winston.log('debug', "Incoming GET request");
			fs.readFile(config.filepath, function(err, data){
				if(err) {
					winston.log("error", "ERR: " + err.message);
					res.writeHead(500, "Internal Server Error", {'Content-Type': 'text/html'});
					res.end();
				}else{
					//console.log(data.toString());
					res.write(data.toString());
					//res.writeHead(200, "OK", {'Content-Type': 'text/plain'});
					res.end();
				}
			});
		}
		data = "";
    });
}).listen(config.port);
