const jwt = require("jsonwebtoken");

const SECRET_TOKEN = "MyUltraSecret-Key";

const signToken = (payload) => {
  const token = jwt.sign(payload, SECRET_TOKEN);
  return token;
};

const verifyToken = (token) => {
  const payload = jwt.verify(token, SECRET_TOKEN);
  return payload;
};

module.exports = {
  signToken,
  verifyToken,
};
