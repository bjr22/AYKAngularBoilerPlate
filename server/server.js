var express = require('express');
var app = express();
//In short; body-parser extracts the entire body portion of an incoming request stream and exposes it on req.body as something easier to interface with. 
var bodyParser = require('body-parser');
//Enables cors header options as a middleware
var cors = require('cors');

//creates a route
var route1 = require('./routes/route1.js');

app.use(express.static(__dirname + '/../client'))
//parses json application/json
app.use(bodyParser.json());
//parses urls
app.use(bodyParser.urlencoded({extended: false}));
//sends cors headers
app.use(cors());

//allows client get and post from this middleware
app.use('/nameForRoute1', route1);

app.listen(3000, function() {
	console.log('Server is up and listening @ port 3000!');
})