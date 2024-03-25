const mongoose = require("mongoose");

const studentSchemata = new mongoose.Schema({
  name: String,
});

const Student = mongoose.model("Student", studentSchemata);

module.exports = { Student };
