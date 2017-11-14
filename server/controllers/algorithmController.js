'use strict'; // ?
var mongoose = require('mongoose');
var Algo = mongoose.model('algorithmSchema');

// get '/algos'
exports.getAllAlgorithms = function(req, res) {
  // finding an empty parameter returns all algos. 
  Algo.find({}, (err, allAlgos) => {
    console.log("All Algos = " + JSON.stringify(allAlgos));
    if (err) console.error(err); 
    res.send(allAlgos); 
  })
}; 

// post '/algos'
exports.addAlgorithm = function(req, res) {
  // this will take in a body that has a prompt, summary, pointValue, 
  // Check to see what has defaults before spamming postman with complicated requests. 
  var newAlgo = new Algo(req.body);
  newAlgo.save(function(err, newAlgo) {
    if (err) {res.send(err)};
    res.send(newAlgo);
  });
} 

// get '/algos/:id'
exports.getSpecifiedAlgorithm = function(req, res) {
  // console.log('the id on the req', req.params.id)
  Algo.findById(req.params.id, function(err, algo) {
    // the entire algorithm object will come back. 
    if (err) res.send(err)
    res.send(algo);
  });
}

// put '/algos/:id'
exports.updateSubmissionHistory = function(req, res) {
  // this will take in a submission history organized by <username, time, 
  // success status> and store it in the algo schema. 
  Algo.findById(req.params.id, (err, oldAlgo) => {
    let newSubmission = req.body.submissionHistory
    oldAlgo.submissionHistory.push(newSubmission)
    res.send(oldAlgorithm)
  }); 
}

// put /algos/:id/:property/:newValue'
exports.updateAlgoProperty = function(req, res) {
  // this takes a function at a given :id and a specified :property
  // and updates that :property with the :newValue. This has not been tested
  // to be working for non-empty properties, but does work for empty properties. 
  Algo.findById(req.params.id, (err, algo) => {
    let targetProp = req.params.property
    algo.set(targetProp, req.params.newValue)
    algo.save((err) => {
      if (err) res.send(err); 
      res.send(`successfully updated ${algo}`)
    })
  })
}


// delete '/algos/:id'
exports.deleteAlgorithm = (req, res) => {
  // This has not been tested. 
  Algo.remove (
    {_id : req.params.id}, 
    (err, algo) => {
      if (err) {res.send(err)}
      else {
      res.send(`${algo} successfully deleted`)
      }
    }
  )
};


