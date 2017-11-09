'use strict'; // right?
var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var gameSchema = new Schema({
  name : {
    type: String, 
  }, 

  playerScores: {
    type: Array, 
    default: [], 
  }, 
  // participants can become as long as needed. 
  participants: {
    type: Array,
    default: [], 
  },

  leaderboard: {
    type: Array,
    default: [],
  },

  // these are in a fib ratio: 1, 2, 3, 5, or 8 points
  pointWorth: {
    type: Number, 
    default: 5,
  },  
  
  pointCost: {
    type: Number, 
    default: 1,
  }, 
  // active, completed, 
  status : {
    type : String, 
    default : 'active',
  }, 

  algorithmID : {
    type : String, 
    required: true,
  }, 
});

mongoose.model('gameSchema', gameSchema);