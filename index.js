const express = require('express')
const bunyan = require("bunyan");

var log = bunyan.createLogger({
    name: 'testing',
    streams: [{
        path: 'log.txt',
    }]
});

const app = express()

app.use(express.json())

app.all('*', function (req, res) {
	let a = {
		method: req.method,
		path: req.get('host') + req.originalUrl,
		query: req.query,
		body: req.body
		
	};
	log.info(a);
	res.send(a);
})

app.listen(5200)