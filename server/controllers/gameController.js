var mongoose = require('mongoose');
var Games = mongoose.model('gameSchema');

// SAM 11/14/2017 - Didn't really verify these routes

// Get '/games' 
exports.getAllGames = (req, res) => {
  // Empty search params returns all games. 
  Games.find({}, (error, data) => {
    if (error) { return res.status(404).send(error); }
    res.send(data); 
  });
};

// Post '/games'
exports.addAGame = (req, res) => {
  var newGame = new Games(req.body);
  newGame.save((error, game) => {
    if (error) { return res.status(401).send(error); }
    res.send(game);
  });
};


// Get 'games/:id'
exports.updateGame = (req, res) => {
  // Updates the game with the given :id
  Games.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true }, (error, games) => {
    if (error) { return res.status(404).send(error); }
    res.send(games);
  });
};

// Get 'games/:id'
exports.getAGame = (req, res) => {
  Games.findById(req.params.id, (error, game) => {
    if (error) { return res.status(404).send(error); }
    res.send(game);
  });
};


// Delete '/games:id'
exports.deleteGame = function(req, res) {
  // Deletes a game and console.logs that it was deleted. 
  Games.remove({ id : req.params.id }, (error, games) => {
    if (error) { return res.status(400).send(error); }
    res.send(`${Games} successfully deleted`);
  });
};
