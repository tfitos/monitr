
module.exports =  
		{
			cron: "*/5 * * * * *",
			command: "ls -la",
			destination: {
				host: "localhost",
				port: 3000,
				path: "/",
				method: "PUT"
			},
			logfile: "monitr-query.log"
		}
