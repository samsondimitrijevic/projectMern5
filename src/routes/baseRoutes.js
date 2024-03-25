const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).send("Welcome!");
});

router.use("*", (req, res) => {
  /*   egwfg; */
  res.status(404).send("404 Page Not Found");
});

router.use((error, req, res, next) => {
  res.status(500).json({ data: "500 Server Error" });
});

module.exports = router;
