var mongoose = require('mongoose');
var Users = mongoose.model('userSchema');
var bcrypt = require('bcrypt');

// SAM 11/14/2017 - These errors need to have the correct status codes attached

// Get '/users'
exports.getAllUsers = (req, res) => {
  Users.find({}, (error, allUsers) => {
    if (error) { return res.status(404).send(error); }
    res.send(allUsers); 
  });
};

// THIS AUTHENTICATION SHOULD BE REWRITTEN WITH PASSPORT!
// THIS AUTHENTICATION SHOULD BE REWRITTEN TO INCLUDE SESSIONS!

// Post '/users'
exports.addAUser = (req, res) => {
  // This adds a user to the database. 
  Users.find({}, (error, allUsers) => {
    // Handle bad usernames and passwords: 
    // The landing page handles all of these error objects by checking if there
    // is a property with the key 'error'. If there is, access is not granted and 
    // the error message shows up. 
    let allUsernames = allUsers.map((obj) => obj.username);
    if (allUsernames.includes(req.body.username)) {
      res.send({ error: 'username taken!' });
    } else if (req.body.username.length < 5) {
      res.send({ error: 'usernames must be at least 5 charachters long!' });
    } else if (req.body.password.length < 4) {
      res.send({ error: 'passwords must be at least 4 charachters long!' });
    } else if (req.body.username.split(" ").length > 1 || req.body.username.split(" ").length > 1) {
      res.send({ error: 'usernames and passwords may not contain spaces!' });
    
    // If not a bad username or password, hash it's password.
    } else {
      // console.log('your user name, ' + req.body.username + ' and your password, ' + req.body.password + ' are valid.' )
      bcrypt.hash(req.body.password, 10).then((hashedPass) => {
        req.body.password = hashedPass; 
        var newUser = new Users(req.body);
        newUser.save((error, newUser) => {
          if (error) { return res.status(401).send(error); }
          // landing takes this error and rethrows it. 
          res.send(newUser);
        });
      });
    };
  })
}; 

// Post '/users/auth'
exports.authUser = (req, res) => {
  // console.log('what comes into authUser', req.body)
  // Match will return an array. Beacuse there will always only be one match
  // (because of the rules stated in addAUser above), to play with the match, 
  // you will just need to do match[0]
  Users.find({username : req.body.username}, (error, match) => {
    if (error) {
      console.error('a res.send() with an error was sent to handleAdd');
      res.status(403).send('there was an error');
    } else {
      if (match.length === 0) {
        // if there are no matches, send an error. 
        res.send({ error: 'That username does not exist. Sign up above.' })
      } else if (match.length === 1) {
        var hashedPassword = match[0].password;
        var inputPassword = req.body.password;

        bcrypt.compare(inputPassword, hashedPassword, (error, isCorrectPassword) => {
          if (isCorrectPassword) {
            var currentUser = new Users(req.body);
            res.send(currentUser);
          } else {
            res.send({ error : 'That password and username did not match. Please try again.' });
          }
        });
      }
    }
  });
};

// SAM 11/14/2017 - We need to flesh the below out for leaderboard
// Get '/users/:username' // This has not been tested. 
exports.getSpecificUserData = (req, res) => {
  Users.findById(req.params.username, (error, user) => {
    if (error) { return res.status(404).send(error); }
    res.send(user);
  });
}; 

// Put '/users/:username' // This has not been tested. 
exports.updateUserData = (req, res) => {
  // This will be used on the profile page for users to update a user's profile 
  // with a profile picture and other information about that user. 
  Users.findOneAndUpdate({ username: req.params.username }, req.body, { new: true }, (error, user) => {
    if (error) { res.status(400).send(error)};
    res.send(user);
  });
};

// delete '/users/:username' //this has not been tested. 
exports.deleteUser = (req, res) => {
  Users.remove ({ username : req.params.username }, (error, user) => {
    if (error) { return res.status(400).send(error); }
    res.send(`${user} successfully deleted`);
  });
};


