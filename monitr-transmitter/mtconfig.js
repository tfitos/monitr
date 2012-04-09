
module.exports = 
{
	port: 3000,
	destination: {
		host: "tamas.fitos.hu",
		port: 80,
		path: "/monitr",
		method: "PUT"
	}, 
	auth: {
		name: "name",
		pass: "pass"
	},
	logfile: "monitr-transmitter.log"
}
