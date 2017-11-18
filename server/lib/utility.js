const logger = (req, res, next) => {
  console.log(`${req.method} request at ${req.url}`);
  next();
};

const isLoggedIn = (req) => req.session ? !!req.session.user : false;

const checkUser = (req, res) => {
  isLoggedIn(req) ? createSession(req, res, req.session.user) : res.sendStatus(404);
};

const createSession = (req, res, newUser) => req.session.regenerate(() => {
  req.session.user = newUser;
  res.send(newUser);
});

var testPoints = (testsPassed, testsFailed) => {
  return 500*(testsPassed/ (testsPassed+testsFailed))
}

var timePoints = (timeLeft) => {
  var speedPoints = 250;
  if (timeLeft === true) {
    speedPoints = 125;
  }
    return speedPoints;
}

var lengthPoints = (answerLength, userCodeLength) => {
  var lengthPoints = 250;
  if (userCodeLength > answerLength) {
    lengthPoints = 125;
  } 
  return lengthPoints;
}

var totalPoints = (testsPassed,testsFailed, timeLeft, answerLength, userCodeLength ) => {
  return (testPoints(testsPassed, testsFailed) + timePoints(timeLeft) + lengthPoints(answerLength, userCodeLength));
}



module.exports = {
  logger,
  isLoggedIn,
  checkUser,
  createSession,
  testPoints,
  timePoints,
  lengthPoints,
  totalPoints
};