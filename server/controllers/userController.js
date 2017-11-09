'use strict'; // ?
var mongoose = require('mongoose');
var Users = mongoose.model('userSchema');
var bcrypt = require('bcrypt');
const saltRounds = 10; // this is 'bcrypt'

// get '/users'
exports.getAllUsers = function(req, res) {
  Users.find({}, (err, allUsers) => {
    if (err) console.error(err); 
    res.send(allUsers); 
  })
};

// THIS AUTHENTICATION SHOULD BE REWRITTEN WITH PASSPORT!
// THIS AUTHENTICATION SHOULD BE REWRITTEN TO INCLUDE SESSIONS!

// post '/users'
exports.addAUser = function(req, res) {
	// this will take in a body that has a username and password. 
  // need to add authntication to this.

  // check to see if the username 

  var newUser = new Users(req.body);
  newUser.set('username', 'seamusTest')


  console.log('username', newUser.username)
  console.log('this is req.body in the routes file', req.body)
  newUser.authenStatus = true; 
  newUser.save(function(err, newUser) {
    if (err) {res.send(err)};
    res.send(newUser)
  });
}; 

// post '/users/auth'
exports.authUser = function(req, res) {
  console.log('what comes into authUser', req.body)
  Users.find({username : req.body.username}, (err, match) => {
    if (err) {
      console.error('a res.send() with an error was sent to handleAdd')
      res.send('there was an error')
    } else {
      console.log('this is the match format: ', match) 
      // if there were no matching usernames, respond with authenStatus = false. 
      if (match.length === 0) {
        match = {}; 
        match.authenStatus = false; 
        res.send(match)
      } else if (match.length === 1) {
        console.log('there was a match!')
        match = JSON.parse(JSON.stringify(match[0])); 
        // do the bcrypt password check. 
        match.authenStatus = true; 
        console.log('match', match)
        res.send(match)
      }

    }
  })
}




// get '/users/:username'
exports.getSpecificUserData = function(req, res) {
  Users.findById(req.params.username, function(err, user) {
    if (err) {res.send(err)};
    res.send(user);
  });
}; 

// put '/users/:username'
exports.updateUserData = function(req, res) {
	// this will be used on the profile page for users to update a user's profile 
	// with a profile picture and other information about that user. 
  Users.findOneAndUpdate({username: req.params.username}, req.body, {new: true}, function(err, user) {
    if (err) {res.send(err)};
    res.send(user);
  });
}

// delete '/users/:username'
exports.deleteUser = function(req, res) {
  Users.remove (
    {username : req.params.username}, 
    (err, user) => {
      if (err) {res.send(err)}
      else {
      res.send(`${user} successfully deleted`)
      }
    }
  )
}


