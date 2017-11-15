var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser')
var bodyParser = require('body-parser');
var session = require('express-session');
var mongo = require('mongodb');
var mongoose = require('mongoose');

// unused (should uninstall if these continue to be unused)
// var logger = require('morgan');

// SAM 11/14/2017 - My little logger
const logger = (req, res, next) => {
  console.log(`${req.method} request at ${req.url}`);
  next();
};

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:')); // SAM 11/14/2017 - What?
db.once('open', () => {
  console.log('mongo server loaded');
});

var routes = require('./routes/Routes.js'); //importing route

// registering the routes and the model must happen before the routes
var algos = require('./models/algorithmSchema.js'); // registering the models.
var games = require('./models/gameSchema.js'); 
var users = require('./models/userSchema.js'); 


var DB_CREDENTIALS = require('./keys/mongoDBCredentials.js');
var uri = 'mongodb://' + DB_CREDENTIALS;
var local = 'mongodb://localhost';


mongoose.Promise = global.Promise
// Set to 'local' to run on localhost, uri to run on mLab
mongoose.connect(uri); 

app = express();

app.use(logger);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true }));
app.use(cookieParser());

// Middleware for sessions
app.use(express.static(__dirname + '/public'));

routes(app); // Register the route
app.get('*', (req, res) => {
  res.sendFile(__dirname + '/public/index.html')
})
var port = process.env.PORT || 3000; 
app.listen(port);

console.log('brevity listening on: ' + port);
