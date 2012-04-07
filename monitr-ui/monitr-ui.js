var http = require('http');
var util = require('util');
//var config = require('./muconfig');

http.createServer(function(req, res) {
	//console.log(util.inspect(request.body));
	req.on('data', function(chunk) {
      console.log(chunk.toString());
    });
    
    req.on('end', function() {
      // empty 200 OK response for now
      res.writeHead(200, "OK", {'Content-Type': 'text/html'});
      res.end();
    });
}).listen(3001);
