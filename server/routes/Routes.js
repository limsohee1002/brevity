'use strict'; // ?
module.exports = function(app) {
  var user = require('../controllers/userController.js');
  var game = require('../controllers/gameController.js');
  var algorithms = require('../controllers/algorithmController.js');

  //routes for signing in
  app.post('/login',(req, res) =>{
    console.log('this will only run if there are other login routes', req.body)
    res.send({t: 'true'})
})

  // routes for game:
  app.get('/users', user.getAllUsers)
  app.post('/users', user.addAUser); // sign-up
  app.post('/users/auth', user.authUser) // log-in


  // routes to handle getting and updating specific user. 
  app.get('/users/:username', user.getSpecificUserData)
  app.put('/users/:username', user.updateUserData)
  app.delete('/users/:username', user.deleteUser)

  // routes for games:
  app.get('/games', game.getAllGames)
  app.post('/games', game.addAGame);

  app.put('/games/:id', game.updateGame)
  app.get('games/:id', game.getAGame)
 
  app.delete('/games/:id', game.deleteGame)

  // routes algorithms: 
  app.get('/algos', algorithms.getAllAlgorithms)
  app.post('/algos', algorithms.addAlgorithm);

  // gameFrame (client/gamesList/GameFrame) is running this. 
  app.get('/algos/:id', algorithms.getSpecifiedAlgorithm)

  app.put('/algos/:id', algorithms.updateSubmissionHistory)
  app.delete('/algos/:id', algorithms.deleteAlgorithm)
};