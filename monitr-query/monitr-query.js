var cronJob = require('cron').CronJob;
var config = require('./mqconfig');
var exec = require ('child_process').exec;
var http = require('http');

//var client = http.createClient(config.destination.port, config.destination.host);


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


cronJob(config.cron, function(){
	exec(config.command, function(err, stdout, stderr){
		transmit(config.destination, stdout);
	});
});
