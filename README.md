# MONITR

Bash scripts and node.js projects to monitor our machines/processes and upload the result to web.

* **monitr.sh**: with remote ssh commands collects all necessary data
* **log-monitr.sh**: calls monitr.sh and puts its output to file
* **monitr-query/**: node.js program which executes monitr.sh periodically and send the output to monitr-transmitter
* **monitr-transmitter/**: node.js program which sits on the machine which can access the internet and our system as well; transmits the data to moitr-ui
* **monitr-ui/**: node.js program which stores and shows the result on a page

Only for my personal use but feel free to reuse if you see something useful!
