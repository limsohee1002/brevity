var mongoose = require('mongoose');
var Algo = mongoose.model('algorithmSchema');

// Get '/algos'
exports.getAllAlgorithms = function(req, res) {
  // Finding an empty parameter returns all algos. 
  Algo.find({}, (error, allAlgos) => {
    console.log("All Algos = " + JSON.stringify(allAlgos));
    if (error) { res.status(404).send(error); }
    res.send(allAlgos); 
  });
}; 

// Post '/algos'
exports.addAlgorithm = function(req, res) {
  // Body should have prompt, summary, and pointValue. 
  // Check to see what has defaults before spamming postman with complicated requests. 
  var newAlgo = new Algo(req.body);
  newAlgo.save((error, newAlgo) => {
    if (error) { return res.status(401).send(error); }
    res.send(newAlgo);
  });
};

// Get '/algos/:id'
exports.getSpecifiedAlgorithm = function(req, res) {
  // console.log('the id on the req', req.params.id)
  Algo.findById(req.params.id, function(error, algo) {
    // The entire algorithm object will come back.
    if (error) { return res.status(404).send(error); }
    res.send(algo);
  });
};

// Put '/algos/:id'
exports.updateSubmissionHistory = function(req, res) {
  // This will take in a submission history organized by <username, time, 
  // success status> and store it in the algo schema. 
  // SAM 11/14/2017 - We need to validate this, I'm not sure what the above comment is supposed to reference
  Algo.findById(req.params.id, (error, oldAlgo) => {
    if (error) { return res.status(401).send(error); }
    let newSubmission = req.body.submissionHistory;
    oldAlgo.submissionHistory.push(newSubmission);
    res.send(oldAlgorithm);
  }); 
};

// Put /algos/:id/:property/:newValue'
exports.updateAlgoProperty = function(req, res) {
  // This takes a function at a given :id and a specified :property
  // and updates that :property with the :newValue. This has not been tested
  // to be working for non-empty properties, but does work for empty properties. 
  Algo.findById(req.params.id, (error, algo) => {
    if (error) { return res.status(400).send(error); }
    let targetProp = req.params.property;
    algo.set(targetProp, req.params.newValue);
    algo.save((error) => {
      if (error) { return res.send(error); }
      // SAM 11/14/2017 - Let's just send back a status code
      res.send(`successfully updated ${algo}`);
    });
  });
};


// Delete '/algos/:id'
// SAM 11/14/2017 - This is probably not needed
exports.deleteAlgorithm = (req, res) => {
  // This has not been tested. 
  Algo.remove({_id : req.params.id}, (error, algo) => {
      if (error) { return res.status(404).send(error); }
      // SAM 11/14/2017 - Let's just send back a status code
      res.send(`${algo} successfully deleted`);
    }
  );
};


