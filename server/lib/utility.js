const logger = (req, res, next) => {
  console.log(`${req.method} request at ${req.url}`);
  next();
};

const isLoggedIn = (req) => req.session ? !!req.session.user : false;

const checkUser = (req, res) => {
  isLoggedIn(req) ? res.send(req.session.user) : res.sendStatus(404);
};

const createSession = (req, res, newUser) => req.session.regenerate(() => {
  req.session.user = newUser;
  res.send(newUser);
});

module.exports = {
  logger,
  isLoggedIn,
  checkUser,
  createSession
};