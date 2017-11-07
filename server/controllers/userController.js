'use strict'; // ?
var mongoose = require('mongoose');
var Users = mongoose.model('userSchema');

// get '/users'
exports.getAllUsers = function(req, res) {
  Users.find({}, (err, allUsers) => {
    if (err) console.error(err); 
    res.send(allUsers); 
  })
};

// post '/users'
exports.addAUser = function(req, res) {
	// this will take in a body that has a username and password. 
  var newUser = new Users(req.body);
  newUser.save(function(err, newUser) {
    if (err) {res.send(err)};
    res.send(newUser);
  });
}; 

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


