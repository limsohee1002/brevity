'use strict'; // right?
var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var gameSchema = new Schema({
  id : {
    type: Number, 
  }, 

  playerScores: {
    type: Array, 
  }, 

  participants: {
    type: Array,
  },

  leaderboard: {
    type: Array,
  },

  pointWorth: {
    type: Number, 
  },  
  
  pointCost: {
    type: Number, 
  }, 
  // active, completed, 
  status : {
    type : String, 
  }, 

  algorithm : {
    type : String
  }, 
});

mongoose.model('gameSchema', gameSchema);