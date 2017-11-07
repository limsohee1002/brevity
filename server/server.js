var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser')
var bodyParser = require('body-parser');
var session = require('express-session');
var passport = require('passport')
var expressValidator = require("express-validator");
var localStrat = require('passport-local').Strategy;
var multer = require('multer');
var upload = multer({dest:"./uploads"});
var flash = require('connect-flash');
var mongo = require('mongodb');
var mongoose = require('mongoose');


var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
	console.log('mongo server loaded')
})

var routes = require('./routes/Routes.js'); //importing route

var DB_CREDENTIALS = require('./keys/mongoDBCredentials.js');
var uri = 'mongodb://' + DB_CREDENTIALS;
var local = 'mongodb://localhost';


mongoose.Promise = global.Promise
// set to 'local' to run on localhost, uri to run on mLab
mongoose.connect(uri); 


app = express();

app.use(express.static(__dirname +'/../client/public'))



app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false }));
app.use(cookieParser());
//handel session
app.use(session({
	secret: 'secret',
	saveUninitialized: true,
	resave: true 
}))


//Passport
app.use(passport.initialize());
app.use(passport.session()); 

//Validator
 app.use(expressValidator({
	 errorFormatter: function(param,msg, value) {
		 var namespace = param.split('.')
		 , root 	= namespace.shift()
		 , formParam = root;

	while(namespace.length){
		formParam += '[' + namespace.shift() + ']';
	}
	return{
		param: formParam,
		msg  : msg,
		value: value	
	};
   }
 }));

 app.use(require('connect-flash')());
 app.use(function(req, res, next ){
	 res.locals.messages = require('express-messages')(req,res);
	 next();
 });



//Middleware for sessions

app.use(express.static(__dirname +'/../client/public'))


app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false }));
app.use(cookieParser());
//handel session
app.use(session({
	secret: 'secret',
	saveUninitialized: true,
	resave: true 
}))

//Passport
app.use(passport.initialize());
app.use(passport.session()); 

//Validator
 app.use(expressValidator({
	 errorFormatter: function(param,msg, value) {
		 var namespace = param.split('.')
		 , root 	= namespace.shift()
		 , formParam = root;

	while(namespace.length){
		formParam += '[' + namespace.shift() + ']';
	}
	return{
		param: formParam,
		msg  : msg,
		value: value	
	};
   }
 }));

 app.use(require('connect-flash')());
 app.use(function(req, res, next ){
	 res.locals.messages = require('express-messages')(req,res);
	 next();
 });



//Middleware for sessions




app.get('*', (req,res) =>{
	res.sendFile(__dirname +'/../client/public/index.html')
})

port = process.env.PORT || 3000; 
app.listen(port);

// registering the routes and the model must happen before the routes
algos = require('./models/algorithmSchema.js'); // registering the models.
games = require('./models/gameSchema.js'); 
users = require('./models/userSchema.js'); 


// boilerplate from HR sprint. Setting extended to true allows parsing of nested objects. 
app.use(bodyParser.urlencoded({extended: true}));
// sets the default parser to .json?
routes(app); //register the route
app.get('/', (req,res) =>{
	res.send({hi: 'Hello'})
})




console.log('betf listening on: ' + port);
