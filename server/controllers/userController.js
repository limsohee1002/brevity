'use strict'; // ?
var mongoose = require('mongoose');
var Users = mongoose.model('userSchema');
var bcrypt = require('bcrypt');


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
  // this adds a user to the database. 
  Users.find({}, (err, allUsers) => {
    // handle bad usernames and passwords: 
    // the landing page handles all of these error objects by checking if there
    // is a property with the key 'error'. If there is, access is not granted and 
    // the error message shows up. 
    let allUsernames = allUsers.map((obj) => obj.username)
    if (allUsernames.includes(req.body.username)) {
      res.send({error : 'username taken!'})
    } else if (req.body.username.length < 5) {
      res.send({error : 'usernames must be at least 5 charachters long!'})
    } else if (req.body.password.length < 4) {
      res.send({error : 'passwords must be at least 4 charachters long!'})
    } else if (req.body.username.split(" ").length > 1 || req.body.username.split(" ").length > 1) {
      res.send({error : 'usernames and passwords may not contain spaces!'})
    
    // if not a bad username or password, hash it's password.
    } else {
      // console.log('your user name, ' + req.body.username + ' and your password, ' + req.body.password + ' are valid.' )
      bcrypt.hash(req.body.password, 10).then((hashedPass) => {
        req.body.password = hashedPass; 
        var newUser = new Users(req.body)
        newUser.save(function(err, newUser) {
          if (err) {res.send(err)};
          // landing takes this err and rethrows it. 
          res.send(newUser)
        })
      })
    };
  })
}; 

// post '/users/auth'
exports.authUser = function(req, res) {
  // console.log('what comes into authUser', req.body)
  // match will return an array. Beacuse there will always only be one match
  // (because of the rules stated in addAUser above), to play with the match, 
  // you will just need to do match[0]
  Users.find({username : req.body.username}, (err, match) => {
    if (err) {
      console.error('a res.send() with an error was sent to handleAdd')
      res.send('there was an error')
    } else {
      if (match.length === 0) {
        // if there are no matches, send an error. 
        res.send({error : 'That username does not exist. Sign up above.'})
      } else if (match.length === 1) {
        var hashedPassword = match[0].password
        var inputPassword = req.body.password

        bcrypt.compare(inputPassword, hashedPassword, (err, isCorrectPassword) => {
          if (isCorrectPassword) {
            var currentUser = new Users(req.body)
            res.send(currentUser)
          } else {
            res.send({error : 'That password and username did not match. Please try again.'})
          }
        })

      }
    }
  })
}


// get '/users/:username' //this has not been tested. 
exports.getSpecificUserData = function(req, res) {
  Users.findById(req.params.username, function(err, user) {
    if (err) {res.send(err)};
    res.send(user);
  });
}; 

// put '/users/:username' //this has not been tested. 
exports.updateUserData = function(req, res) {
	// this will be used on the profile page for users to update a user's profile 
	// with a profile picture and other information about that user. 
  Users.findOneAndUpdate({username: req.params.username}, req.body, {new: true}, function(err, user) {
    if (err) {res.send(err)};
    res.send(user);
  });
}

// delete '/users/:username' //this has not been tested. 
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


