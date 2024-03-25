const { Student } = require("../models/students");
const {
  getAllStudentsDB,
  getStudentByIdDB,
  getStudentByNameDB,
  createStudentDB,
  updateStudentDB,
  deleteStudentDB,
} = require("../repositories/studentFunctions");

// http://localhost:3001//students GET
const getAllStudents = async (req, res) => {
  const students = await getAllStudentsDB({});
  /*  const students = await Student.find({}); */
  res.status(200).json({ data: students });
};

// http://localhost:3001//students/1 GET
const getStudentById = async (req, res) => {
  const { id } = req.params;
  const student = await getStudentByIdDB(id);
  /*  const student = await Student.findById(id); */

  /*   const student = students.find((student) => {
    return student.id.toString() === id;
  }); */

  res.status(200).json({ data: student });
};

// http://localhost:3001/filter?name=Samson GET
const getStudentByName = async (req, res) => {
  const { name } = req.query;
  const student = await getStudentByNameDB(name);
  res.status(200).json({ data: student });

  /* const nameFilter = {
    name: {
      $regex: new RegExp(name, "i"),
    },
  }; */

  /*   const student = await Student.find(name ? nameFilter : {});
  res.status(200).json({ data: student }); */

  /*   if (name) {
    const filteredStudent = students.filter((student) => {
      return student.name === name;
    });
    res.status(200).json({ data: filteredStudent });
  } else {
    res.status(200).json({ data: students });
  } */
};

// http://localhost:3001//students POST
const createStudent = async (req, res) => {
  const newStudent = await createStudentDB({
    name: req.body.name,
  });
  /* await newStudent.save(); */
  res.status(200).json({ data: newStudent });

  /*   const newStudent = {
    id: Date.now(),
    name: req.body.name,
  };

  students.push(newStudent);
  res.status(201).json({
    data: newStudent,
  }); */

  /*   students.push({
    id: 4,
    name: "Lauren",
  });
  res.status(201).json({
    id: 4,
    name: "Lauren",
  }); */
};

// http://localhost:3001/students/<id> PUT
const updateStudent = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  const updatedStudent = await updateStudentDB(id, { name });
  /*   id,
    { name: name },
    { new: true }
  ); */

  /*   students = students.map((student) => {
    if (student.id.toString() === id) {
      return {
        ...student,
        name,
      };
    } else {
      return student;
    }
  }); */

  /*   const updatedStudent = students.find(
    (student) => student.id.toString() === id
  ); */
  res.status(200).json({ data: updatedStudent });
};

// http://localhost:3001/students/<id> DELETE
const deleteStudent = async (req, res) => {
  const { id } = req.params;

  deleteStudentDB(id);

  /*   await Student.findByIdAndDelete(id); */

  /*   students = students.filter((student) => {
    return student.id.toString() !== id;
  }); */
  res.status(200).json({ data: `Student with id ${id} has been deleted` });
};

module.exports = {
  getAllStudents,
  getStudentByName,
  getStudentById,
  createStudent,
  updateStudent,
  deleteStudent,
};
