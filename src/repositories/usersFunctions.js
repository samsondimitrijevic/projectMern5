const { User } = require("../models/users");

const createUserDB = async (payload) => {
  const user = await User.findOne({ email: payload.email });

  if (user) {
    throw new Error("User already exists");
  }
  const newUser = new User(payload);
  await newUser.save();
  return newUser;
};

module.exports = {
  createUserDB,
};
