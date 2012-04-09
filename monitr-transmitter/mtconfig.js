
module.exports = 
{
	port: 3000,
	destination: {
		host: "localhost",
		port: 80,
		path: "/monitr",
		method: "PUT"
	}, 
	auth: {
		name: "username",
		pass: "password"
	},
	logfile: "monitr-transmitter.log"
}
