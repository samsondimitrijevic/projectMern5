const express = require("express");
const router = express.Router();

// Fake data
let students = [
  { id: 1, name: "John" },
  { id: 2, name: "Samson" },
  { id: 3, name: "Kimberley" },
];

router.get("/", (req, res) => {
  res.send("Welcome to Express!");
});

// http://localhost:3001/upper?name=Samson
router.get("/upper", (req, res) => {
  try {
    const name = req.query.name;
    console.log(name);

    const upperName = name.toUpperCase();
    res.status(200).json({ data: `Hello ${upperName}` });
  } catch (err) {
    res.status(500).json({ error: "Query parameter 'name' is mandatory" });
  }
});
// http://localhost:3001/filter?name=Samson GET
router.get("/filter", (req, res) => {
  const { name } = req.query;

  if (name) {
    const filteredStudent = students.filter((student) => {
      return student.name === name;
    });
    res.status(200).json({ data: filteredStudent });
  } else {
    res.status(200).json({ data: students });
  }
});

// http://localhost:3001/students/<name> GET
// http://localhost:3001/students/Nick
// using URL params

router.get("/students", (req, res) => {
  res.status(200).json({ data: students });
});

// http://localhost:3001//students/1 GET
router.get("/students/:id", (req, res) => {
  const { id } = req.params;

  const student = students.find((student) => {
    return student.id.toString() === id;
  });

  res.status(200).json({ data: student });
});

// http://localhost:3001//students POST
router.post("/students", (req, res) => {
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
});

// http://localhost:3001/students/<id> PUT

router.put("/students/:id", (req, res) => {
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
});

// http://localhost:3001/students/<id> DELETE
router.delete("/students/:id", (req, res) => {
  const { id } = req.params;

  students = students.filter((student) => {
    return student.id.toString() !== id;
  });
  res.status(200).json({ data: `Student with id ${id} has been deleted` });
});

module.exports = router;
