var mongoose = require('mongoose');
var db = require('../server.js')

var Schema = mongoose.Schema;

var algorithmSchema = new Schema({
  // Algorithms have a one to many relationship with games. This is so that down the line, a person could create a new 
  // game without having to write tests and a algorithm and instead can just choose 
  // from a list of vetted algorithms. 
  name: {
    type: String, 
    required: true, 
  },  

  // This and the testingSuite will need to be encoded in JSON. You can do this with 
  // https://www.freeformatter.com/json-escape.html or can use the npm module
  // js-string-escape.
  prompt: {
    type: String, 
  }, 
  // This needs to be in ES5 so that the tests can read the function. 
  // ES6+ syntax will break the tests. It should also be one line so that 
  // it doesn't break the seedCode input in the codeEntryForm. 
  seedCode: {
    type: String,
    default: "\/\/ your code here"
  }, 

  functionName: {
    type: String, 
  }, 

  // This and the prompt will need to be encoded in JSON. You can do this with 
  // https://www.freeformatter.com/json-escape.html or can use the npm module
  // js-string-escape.
  testingSuite: {
    type: String,  
  }, 

  // TODO: this should get pushed to with the username that submits. 
  // We made the choice to put this in the algo instead of the game so that eventually 
  // you could render a component that showed all of the submissions that had been made 
  // across all games to a given algorithm. 
  submissionHistory: {
    type: Array, 
    default: [], 
  }, 

});

mongoose.model('algorithmSchema', algorithmSchema);