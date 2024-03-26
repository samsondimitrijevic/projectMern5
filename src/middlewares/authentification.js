const { verifyToken } = require("../config/jwt");

const secretToken = "MY_SECRET_TOKEN";

const isAuthenticated = (req, res, next) => {
  const { token } = req.query;
  if (token === secretToken) {
    next();
    return;
  } else {
    res.status(401).json({ data: "Unauthorized" });
  }
};
const hasValidJWTToken = (req, res, next) => {
  try {
    const token = req.query;
    verifyToken(token);
    next();
  } catch (err) {
    res.status(401).json({ data: "Unauthorized" });
  }
};

module.exports = {
  isAuthenticated,
  hasValidJWTToken,
};
