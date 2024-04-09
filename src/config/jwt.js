const jwt = require("jsonwebtoken");

const SECRET_TOKEN = "MyUltraSecret-Key";
const tokenTimeout = "1hr";

const signToken = (payload) => {
  const token = jwt.sign(payload, SECRET_TOKEN, { expiresIn: tokenTimeout });
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
