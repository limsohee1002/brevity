'use strict'; // right?

var mongoose = require('mongoose');


var Schema = mongoose.Schema;

var userSchema = new Schema({
  username: {
    type: String, 
    required: true, 
    index : {
      unique: true      
    }
  }, 
  password: {
    type: String,
    required: true
  },

  totalPoints: {
    type: Number, 
  }, 

  level: {
    type: Number, 
  }, 

  // will need to use gridFS for this if the profile
  // pictures are going to be larger than 16mb in size. 
  // need to do more research to see if this will actually work. 
  profilePicture: {
    data: Buffer, 
    contentType: String 
  }, 

  gameHistory: {
    type: Array, 
  }, 

});



mongoose.model('userSchema', userSchema);