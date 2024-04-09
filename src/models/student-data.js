const { Student } = require("./students");
// Fake data
let students = [
  {
    name: "Joe",
    surname: "Kirck",
    job: "Web Developer",
    studies: "Rock{theCode}",
  },
  {
    name: "Samson",
    surname: "Dimitrijevic",
    job: "Full Stack Developer",
    studies: "Rock{theCode}",
  },
  {
    name: "Kimberley",
    surname: "Jossen",
    job: "Web Designer",
    studies: "Rock{theCode}",
  },
];

const clearAndInsertData = async (data) => {
  await Student.collection.drop();
  await Student.insertMany(students);
};

module.exports = { clearAndInsertData };
