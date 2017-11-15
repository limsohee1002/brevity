var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var gameSchema = new Schema({
  // Game has a many to one relationship with algorithms. So many games can all use 
  // the same algorithm. This is so that down the line, a person could create a new 
  // game without having to write tests and a algorithm and instead can just choose 
  // from a list of vetted algorithms. 

  name : {
    type: String, 
  }, 

  // TODO: Tie these to the results of submit and the conditions of the game (timer, 
  // point cost etc.)
  playerScores: {
    type: Array, 
    default: [], 
  }, 

  // TODO: These should be initiated on creation of a game and appended as users join.
  participants: {
    type: Array,
    default: [], 
  },

  // TODO: This can be updated from the algorithm.submissionHistory or updated seperately.
  leaderboard: {
    type: Array,
    default: [],
  },

  // These are in a fib ratio: 1, 2, 3, 5, or 8 points
  // TODO: create a game creation page that has a pointWorth feild. 
  pointWorth: {
    type: Number, 
    default: 5,
  },  
  
  // TODO: The point cost is the cost of playing a certain game. Need to add
  // field to game creation page. 
  pointCost: {
    type: Number, 
    default: 1,
  }, 

  // Active, completed? 
  status : {
    type : String, 
    default : 'active',
  }, 

  // Because of the many to one relationship of the games to the algorithms, 
  // each game keeps reference to the algorithm. Algorithms currently do not
  // keep track of the games that depend on them. 
  algorithmID : {
    type : String, 
    required: true,
  }, 
});

mongoose.model('gameSchema', gameSchema);