const authorize = (req, res, next) => {
  next();
  console.log("authorize");
};
module.exports = authorize;
