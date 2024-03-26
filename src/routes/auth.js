const express = require("express");
const router = express.Router();
const { hasValidJWTToken } = require("../middlewares/authentification");
const { signToken } = require("../config/jwt");
const { hashPassword } = require("../config/password");
const { createUserDB } = require("../repositories/usersFunctions");

router.get("/authenticated", hasValidJWTToken, (req, res) => {
  res.status(200).json({ data: "Authenticated!" });
});

router.post("/login", (req, res) => {
  const token = signToken({ id: "sdimitrijevic" });

  res.status(200).json({ data: token });
});

router.post("/register", async (req, res) => {
  try {
    const { email, password } = req.body;
    const hash = await hashPassword(password);
    const newUser = await createUserDB({ email, password: hash });
    console.log(newUser);
    res.status(201).json({ data: newUser });
  } catch (err) {
    console.log("ERROR", err);
    res.status(500).json({ data: "Error registering user" });
  }
});

module.exports = router;
