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

  // This is stored as a bcrypt hash. See userController for details. 
  password: {
    type: String,
    required: true
  },

  // People start out with 100 totalPoints, but this is decremented as they 
  // play games and incremented as they win games. 
  totalPointsg: {
    type: Number, 
    default : 100
  }, 

  // TODO: Update level based on gameHistory.length? 
  level: {
    type: Number, 
    default: 1, 
  }, 

  // Will need to use gridFS for this if the profile
  // pictures are going to be larger than 16mb in size. 
  // Need to do more research to see if this will actually work. 
  profilePicture: {
    // data: Buffer, 
    // contentType: String 
    type: String,
    default: 'https://files.slack.com/files-pri/T2SUXDE72-F7YSEM5DW/bestpin.png'
  }, 

  // TODO: Append to this onClick of submit button. 
  gameHistory: {
    type: Array, 
    default: []
  },

  aboutMe: {
    type: String,
    default: 'I\'m not very interesting'
  }
});

mongoose.model('userSchema', userSchema);