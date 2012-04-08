var cronJob = require('cron').CronJob;
var config = require('./mqconfig');
var exec = require ('child_process').exec;
var http = require('http');
var winston = require('winston');
var fs = require('fs');

winston.add(winston.transports.File, { filename: config.logfile, timestamp: true, json: false, maxsize: 1024*1024*10, maxFiles: 10 });
//var client = http.createClient(config.destination.port, config.destination.host);


function transmit(options, data){

	var req = http.request(options, function (res) {
		res.setEncoding("utf-8");
		res.on("data", function(chunk){
			//console.log(chunk);
		});
		res.on("end", function(){
			winston.log("info", "data sent; status: " + res.statusCode);
		});
	});

	req.on("error", function(e) {
		winston.log("error", "problem with request: " + e.message);
	});
	winston.log("debug", "Sending data:\n" + data);
	req.write(data);
	req.end();
}


cronJob(config.cron, function(){
	exec(config.command, function(err, stdout, stderr){
		transmit(config.destination, stdout);
	});

	/*
	fs.readFile("/Users/fittom/temp/monitr-2012-04-08_22-17-28.log", function(err,data){
		if(err) throw err;
		transmit(config.destination, data);
	});
	*/

});
