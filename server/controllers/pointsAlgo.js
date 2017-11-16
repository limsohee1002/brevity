var mongoose = require('./mongoose');
var points = mongoose.model('pointsSchema');


var testPoints = (testsPassed, testsFailed) => {
  return 500*(testsPassed/ (testsPassed+testsFailed))
}

var timePoints = (timeLeft) => {
  var speedPoints = 250;
  if (timeLeft >= 300) {
      return;  
    }
    if (timeLeft < 300) {
      speedPoints = 200;
    }
    if (timeLeft <= 240) {
      speedPoints = 150
    }
    if (timeLeft <= 180) {
      speedPoints = 100
    }
    if (timeLeft < 120) {
      speedPoints = 50
    }
    if (timeLeft === 0) {
      speedPoints = 0;
    }
    return speedPoints;
}

var lengthPoints = (answerLength, userCodeLength) => {
  var lengthPoints = 250;
  if (userCodelength > answerLength) {
    lengthPoints = 125;
  } 
  return lengthPoints;
}

var totalPoints = (testsPassed,testsFailed, timeLeft, answerLength, userCodelength) => {
  return (testPoints(testsPassed, testsFailed) + timePoints(timeLeft) + lengthPoints(answerLength, userCodelength));
}

