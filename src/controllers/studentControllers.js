// Fake data
let students = [
  { id: 1, name: "John" },
  { id: 2, name: "Samson" },
  { id: 3, name: "Kimberley" },
];

// http://localhost:3001//students/1 GET
const getStudentById = (req, res) => {
  const { id } = req.params;

  const student = students.find((student) => {
    return student.id.toString() === id;
  });

  res.status(200).json({ data: student });
};

// http://localhost:3001//students GET
const getAllStudents = (req, res) => {
  res.status(200).json({ data: students });
};

// http://localhost:3001/filter?name=Samson GET
const getStudentByName = (req, res) => {
  const { name } = req.query;

  if (name) {
    const filteredStudent = students.filter((student) => {
      return student.name === name;
    });
    res.status(200).json({ data: filteredStudent });
  } else {
    res.status(200).json({ data: students });
  }
};

// http://localhost:3001//students POST
const createStudent = (req, res) => {
  console.log(req.body);

  const newStudent = {
    id: Date.now(),
    name: req.body.name,
  };

  students.push(newStudent);
  res.status(201).json({
    data: newStudent,
  });

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
const updateStudent = (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  students = students.map((student) => {
    if (student.id.toString() === id) {
      return {
        ...student,
        name,
      };
    } else {
      return student;
    }
  });

  const updatedStudent = students.find(
    (student) => student.id.toString() === id
  );
  res.status(200).json({ data: updatedStudent });
};

// http://localhost:3001/students/<id> DELETE
const deleteStudent = (req, res) => {
  const { id } = req.params;

  students = students.filter((student) => {
    return student.id.toString() !== id;
  });
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
