'use strict'; // right?
var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var algorithmSchema = new Schema({

  name: {
    type: String, 
  },

  prompt: {
    type: String, 
  }, 

  pointValue: {
    type: Number, 
  }, 

  levelRequired: {
    type: Number, 
  }, 

  seedCode: {
    type: String,
  }, 

  // This is going to reference a file system within 
  testingSuite: {
    type: String,
  }, 

  // skeleton for submissionHistory: 

  submissionHistory: {
    type: Array, 
  }, 

});

mongoose.model('algorithmSchema', algorithmSchema);