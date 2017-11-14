var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser')
var bodyParser = require('body-parser');
var session = require('express-session');
var mongo = require('mongodb');
var mongoose = require('mongoose');

// unused (should uninstall if these continue to be unused)
// var logger = require('morgan');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
	console.log('mongo server loaded')
})

var routes = require('./routes/Routes.js'); //importing route

// registering the routes and the model must happen before the routes
algos = require('./models/algorithmSchema.js'); // registering the models.
games = require('./models/gameSchema.js'); 
users = require('./models/userSchema.js'); 


var DB_CREDENTIALS = require('./keys/mongoDBCredentials.js');
var uri = 'mongodb://' + DB_CREDENTIALS;
var local = 'mongodb://localhost';


mongoose.Promise = global.Promise
// set to 'local' to run on localhost, uri to run on mLab
mongoose.connect(uri); 

app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true }));
app.use(cookieParser());

//Middleware for sessions
app.use(express.static(__dirname + '/public'));

routes(app); //register the route

port = process.env.PORT || 3000; 
app.listen(port);

console.log('betf listening on: ' + port);
