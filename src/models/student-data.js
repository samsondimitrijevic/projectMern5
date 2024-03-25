const { Student } = require("./students");
// Fake data
let students = [{ name: "Joe" }, { name: "Samson" }, { name: "Kimberley" }];

const clearAndInsertData = async (data) => {
  await Student.collection.drop();
  await Student.insertMany(students);
};

module.exports = { clearAndInsertData };
