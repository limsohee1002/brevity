'use strict'; // ?
var mongoose = require('mongoose');
var Algo = mongoose.model('algorithmSchema');

// get '/algos'
exports.getAllAlgorithms = function(req, res) {
	console.log('run')
  Algo.find({}, (err, allAlgos) => {
  	console.log("All Algos = " + JSON.stringify(allAlgos));
    if (err) console.error(err); 
    res.send(allAlgos); 
  })
}; 

// post '/algos'
exports.addAlgorithm = function(req, res) {
	// this will take in a body that has a prompt, summary, pointValue, 
	// required level and testing suite.
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
		// console.log('this is the algorithm object that is got by the /algos/:id route:', algo)
		// algo is coming back complete. 
    if (err) res.send(err)
    res.send(algo);
  });
}

// put '/algos/:id'
exports.updateSubmissionHistory = function(req, res) {
	// this will take in a submission history organized by <username, time, 
	// success status> and store it in the algo schema. 
	Algo.findById(req.params.id, (err, oldAlgo) => {
		var newSubmission = req.body.submissionHistory
		oldAlgo.submissionHistory.push(newSubmission)
		res.send(oldAlgorithm)
	}); 
}

// delete '/algos/:id'
exports.deleteAlgorithm = (req, res) => {
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


