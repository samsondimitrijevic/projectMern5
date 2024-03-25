const express = require("express");
/* const routes = require("./routes"); */
const baseRouter = require("./routes/baseRoutes");
const studentRouter = require("./routes/studentRoutes");
const utilityRouter = require("./routes/utilityRoutes");

const app = express();
app.use(express.json());

app.use("/students", studentRouter);
app.use("/utilities", utilityRouter);
app.use("/", baseRouter);

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
